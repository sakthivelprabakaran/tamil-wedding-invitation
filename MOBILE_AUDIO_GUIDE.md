# Mobile Audio Experience - How It Works

## Desktop vs Mobile Audio Interaction

### 🖱️ Desktop (Mouse + Hover)
1. **Hover over Groom** → Welcome audio plays
2. **Move to Bride** → Groom jealous + Bride response
3. **Move to Groom** → Bride jealous + Groom response
4. **Click** → Navigate to main site

### 📱 Mobile (Touch)
1. **Tap Groom** → Welcome audio plays *(no navigation)*
2. **Tap Bride** → Groom jealous + Bride response *(no navigation)*  
3. **Tap Groom** → Bride jealous + Groom response *(no navigation)*
4. **Tap again** → Navigate to main site

## Key Differences

| Feature | Desktop | Mobile |
|---------|---------|--------|
| **Trigger** | Mouse hover | Touch/Tap |
| **First interaction** | Audio on hover | Audio on tap |
| **Navigation** | Click after hover | Tap 4th time (after hearing all audio) |
| **Hint text** | "Click to Enter" | "Tap to Hear & Enter" |

## Mobile Implementation Details

### Detection
```javascript
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
         || window.innerWidth <= 768;
};
```

### Touch Handler
- Triggers audio **immediately** on tap
- Prevents navigation until user has explored both sides
- Smooth conversation flow with 0.5s pauses

### Mobile-Specific Features
✅ No accidental navigation on first tap  
✅ Audio plays instantly (no hover needed)  
✅ Clear "Tap to Hear" instructions  
✅ Touch-optimized tap areas  
✅ Prevents iOS auto-zoom on inputs (16px font size)

## Audio Modal
Both mobile and desktop require clicking "Enable Audio & Continue" first to unlock browser audio playback policies.

## Testing
Test on actual mobile devices for best experience. Browser mobile emulation may not perfectly simulate touch events.
