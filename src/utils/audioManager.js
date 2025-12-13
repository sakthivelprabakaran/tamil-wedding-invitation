class AudioManager {
    constructor() {
        this.currentAudio = null;
        this.bgm = null;
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
        // Placeholder paths - user needs to replace these
        const src = side === 'groom' ? '/audio/groom_welcome.mp3' : '/audio/bride_welcome.mp3';
        this.play(src);
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

    // New: Play hover audio (with fallback to TTS)
    playHoverAudio(audioPath, fallbackText, pitch = 1) {
        // Try to play audio file first
        fetch(audioPath)
            .then(response => {
                if (response.ok) {
                    this.play(audioPath);
                } else {
                    // Fallback to text-to-speech
                    this.speak(fallbackText, pitch, 1.1);
                }
            })
            .catch(() => {
                // If fetch fails, use text-to-speech
                this.speak(fallbackText, pitch, 1.1);
            });
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
