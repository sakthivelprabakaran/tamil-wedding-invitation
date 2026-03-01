import { publicUrl } from './publicUrl';

class AudioManager {
    constructor() {
        this.currentAudio = null;

        // Pre-instantiate BGM so the browser eagerly loads it. 
        // This prevents Android Chrome from expiring the user gesture token 
        // while it hangs waiting for the network metadata.
        const bgmAudio = new Audio(publicUrl('/audio/background_music.mp3'));
        bgmAudio.loop = true;
        bgmAudio.volume = 0.22;
        // preload="auto" encourages caching the metadata before the click
        bgmAudio.preload = "auto";
        this.bgm = bgmAudio;

        this.synthesis = window.speechSynthesis;
    }

    play(src, loop = false) {
        if (this.currentAudio) {
            this.fadeOut(this.currentAudio);
        }

        const audio = new Audio(src);
        audio.loop = loop;
        audio.volume = 0;
        audio.play().catch(e => console.error("Audio play failed (interaction required):", e));
        this.fadeIn(audio);

        this.currentAudio = audio;
        return audio;
    }

    playWelcome(side) {
        const src = side === 'groom' ? publicUrl('/audio/groom_welcome.mp3') : publicUrl('/audio/bride_welcome.mp3');
        this.play(src);
    }

    // Android/iOS unblocker mapping
    initBackgroundMusic() {
        if (!this.bgm) return;

        const startOnInteraction = () => {
            if (this.bgm.paused) {
                this.bgm.play().catch(e => console.warn("BGM resume blocked:", e));
            }
            // Cleanup listeners once triggered
            document.removeEventListener('click', startOnInteraction);
            document.removeEventListener('touchstart', startOnInteraction);
            document.removeEventListener('keydown', startOnInteraction);
        };

        // If it's already paused, try attaching the interaction listeners 
        // to cleanly unlock it on the user's very first interaction anywhere.
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('touchstart', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });

        // Try to play immediately if the browser permits it
        if (this.bgm.paused) {
            this.bgm.play().catch(() => { });
        }
    }

    // New: Text-to-Speech for testing
    speak(text, pitch = 1, rate = 1) {
        // Stop any current speech
        this.synthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = 1;

        this.synthesis.speak(utterance);
    }

    stop() {
        if (this.currentAudio) {
            this.fadeOut(this.currentAudio);
            this.currentAudio = null;
        }
        this.synthesis.cancel();
    }

    fadeIn(audio) {
        let vol = 0;
        const interval = setInterval(() => {
            if (vol < 1) {
                vol += 0.1;
                audio.volume = Math.min(vol, 1);
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    fadeOut(audio) {
        let vol = audio.volume;
        const interval = setInterval(() => {
            if (vol > 0) {
                vol -= 0.1;
                audio.volume = Math.max(vol, 0);
            } else {
                audio.pause();
                clearInterval(interval);
            }
        }, 100);
    }
}

export const audioManager = new AudioManager();
