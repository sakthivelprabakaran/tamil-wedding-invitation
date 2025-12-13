# Audio Files Guide - Updated for Conversational Flow

## 📁 Required Audio Files in `public/audio/`

### Groom's Audio Files (3 total):

1. **groom_hover_welcome.m4a** ✅ (You have this)
   - *Message*: "Hey! Are you on the groom's side? Click here to enter!"
   - *When*: First hover on groom's side
   - *Tone*: Welcoming, friendly

2. **groom_hover_jealous.m4a** ✅ (You have this)
   - *Message*: "Hey hey hey! Stay here on my side! Don't go to the bride's side!"
   - *When*: User moves FROM groom TO bride
   - *Tone*: Playful, competitive

3. **groom_response_to_bride.m4a** ❌ (Need to record)
   - *Message*: "Ha! They came back to MY side. Welcome back!"
   - *When*: User moves FROM bride TO groom (plays 2 seconds AFTER bride's protest)
   - *Tone*: Triumphant, playful, welcoming back

---

### Bride's Audio Files (3 total):

4. **bride_hover_welcome.m4a** ❌ (Need to record)
   - *Message*: "Hello! Are you on the bride's side? Come on in, click here!"
   - *When*: First hover on bride's side
   - *Tone*: Sweet, inviting

5. **bride_hover_jealous.m4a** ❌ (Need to record)
   - *Message*: "Wait wait wait! Don't leave me! Stay on the bride's side!"
   - *When*: User moves FROM bride TO groom
   - *Tone*: Playful, cute, protesting

6. **bride_response_to_groom.m4a** ❌ (Need to record)
   - *Message*: "Hey groom, be calm! They're MY side now. Welcome to the bride's side!"
   - *When*: User moves FROM groom TO bride (plays 2 seconds AFTER groom's protest)
   - *Tone*: Confident, playful, addressing groom then welcoming guest

---

## 🎬 Example Conversation Flows

### Flow 1: Start with Groom → Move to Bride → Back to Groom

1. **Hover Groom**: "Hey! Are you on the groom's side? Click here!" (welcome)
2. **Move to Bride**: "Hey hey! Stay here on my side!" (groom jealous) → **[2s delay]** → "Hey groom be calm! They're MY side now. Welcome!" (bride responds)
3. **Move to Groom**: "Wait! Don't leave me!" (bride jealous) → **[2s delay]** → "Ha! They came back! Welcome back!" (groom responds)

### Flow 2: Start with Bride → Move to Groom → Back to Bride

1. **Hover Bride**: "Hello! Come on in, click here!" (welcome)
2. **Move to Groom**: "Wait! Don't leave!" (bride jealous) → **[2s delay]** → "Ha! They came back to MY side. Welcome!" (groom responds)
3. **Move to Bride**: "Hey hey! Stay here!" (groom jealous) → **[2s delay]** → "Hey groom be calm! Welcome back!" (bride responds)

---

## 🎙️ Recording Tips

- **Groom's response**: Sound confident/triumphant when "winning" the guest back
- **Bride's response**: Sound playful when telling groom to calm down, then switch to welcoming tone
- Keep each clip **under 5 seconds** for best experience
- **Format**: .m4a (preferred) or .mp3
- **Quality**: Clear audio, minimal background noise

Have fun with the recordings! The conversation creates a playful competition between bride and groom! 🎤❤️
