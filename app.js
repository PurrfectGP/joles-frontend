# Using Google AI Studio to Edit Harmonia
## Complete Guide for Beginners

---

## What is Google AI Studio?

Google AI Studio (aistudio.google.com) is Google's free interface for Gemini AI models. It can help you edit code, generate content, and work with the Harmonia project files.

---

## Step 1: Access Google AI Studio

1. Go to **aistudio.google.com**
2. Sign in with your Google account
3. Click **"Create New Prompt"** or use **"Chat"** mode

---

## Step 2: Set Up Your Context

### System Instructions (paste this into System Instructions field):

```
You are a web developer working on the Harmonia website project.

DESIGN SYSTEM:
- Fonts: Cormorant Garamond (headings), DM Sans (body)
- Light mode background: #FAF6F1 (warm cream)
- Dark mode background: #12090A (wine black)  
- Primary accent: Gold #D4A853 (light) / #F0C86E (dark)
- Secondary accent: Maroon #722F37
- Text: #1E293B (light mode), #F5F0E8 (dark mode)
- Animations: 0.3s ease for micro, 0.5s for page transitions
- Cards: border-radius 12px, subtle gold border on hover
- Buttons: 4px border-radius, gold gradient primary, outlined secondary

FILE STRUCTURE:
- css/style.css — All styles
- js/app.js — Main JavaScript
- js/webgl.js — Particle background
- assets/logo.png — Celtic Knot logo
- 7 HTML pages: index, why-harmonia, partnerships, team, local-network, p2p, contact

Always preserve dark/light mode compatibility.
Always use CSS variables, never hardcoded colors.
```

---

## Step 3: How to Work with Files

### Option A: Paste File Contents
1. Copy the contents of the file you want to edit (e.g., `style.css`)
2. Paste it into the chat with your request
3. Gemini will return the modified version

### Option B: Describe Changes
```
"Here is my current CSS for the hero section [paste CSS]. 
Change the grid layout from 1.4fr 1fr to 1fr 1fr 
and increase the tagline font size to 4rem."
```

### Option C: Generate New Code
```
"Generate a new HTML section for a 'How It Works' area that goes 
on the index.html page. It should have 3 steps with icons, 
using the Harmonia design system colors and fonts.
Use Cormorant Garamond for step titles and DM Sans for descriptions."
```

---

## Step 4: Best Prompts for Common Tasks

### Editing CSS
```
"Modify this CSS to add a subtle parallax scrolling effect to the hero section.
Keep all existing styles but add transform: translateZ(0) and a scroll-based 
translateY using CSS custom properties. Maintain dark/light mode compatibility."

[paste current hero CSS]
```

### Creating Animations
```
"Create a CSS keyframe animation called 'goldPulse' that makes an element 
glow with the Harmonia gold color (#D4A853). It should pulse opacity 
from 0.5 to 1.0 over 2 seconds with an ease-in-out timing function.
Also create the dark mode variant using #F0C86E."
```

### Adding Three.js Effects
```
"Write a Three.js scene that creates a rotating DNA helix for the 
local-network.html page. Use:
- Gold color: 0xD4A853 for one strand
- Maroon color: 0x722F37 for the other
- Transparent background
- Responsive canvas that fills its container
- 60fps animation loop
Include the full script tag with CDN import for Three.js r128."
```

### Generating Page Content
```
"Write the HTML content for an 'FAQ' section to add to the why-harmonia page.
Include 5 questions about Harmonia's compatibility engine.
Style using the existing CSS classes: .section-title for headings,
.container for max-width, and DM Sans font for body text.
Add collapsible accordion behavior with vanilla JavaScript."
```

---

## Step 5: Using Gemini's Strengths

### Code Generation
Gemini excels at generating complete code blocks. Ask for:
- Full HTML pages with proper structure
- Complete CSS animations with keyframes
- JavaScript functions with error handling
- SVG illustrations matching the design system

### Code Review
```
"Review this JavaScript function for bugs and performance issues:
[paste code]
Also check if it handles dark mode properly."
```

### Responsive Design
```
"Make this CSS responsive. Add media queries for:
- 1024px (tablet)
- 768px (tablet portrait) 
- 480px (mobile)
Keep the Harmonia design system breakpoints consistent."
```

---

## Step 6: Model Selection

| Task | Recommended Model | Why |
|------|------------------|-----|
| Complex code generation | Gemini 2.5 Pro | Best reasoning for multi-file edits |
| Quick CSS tweaks | Gemini 2.5 Flash | Fast, accurate for small changes |
| Content writing | Gemini 2.5 Pro | Better prose and creative output |
| Code review | Gemini 2.5 Pro | Catches more edge cases |

---

## Step 7: Combining with Claude

For the best workflow:
1. **Use Google AI Studio** for generating new features and content
2. **Use Claude** for assembling files, creating zip packages, and complex multi-file edits
3. **Google AI Studio** excels at isolated code generation
4. **Claude** excels at understanding project context and file management

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Gemini changes the color scheme | Include the full color palette in System Instructions |
| Generated code doesn't match style | Paste an example of existing code as reference |
| Animation timing feels off | Specify exact values: "0.3s ease" or "cubic-bezier(0.2,0.8,0.2,1)" |
| Dark mode is broken | Always say "maintain [data-theme='dark'] compatibility" |
| Output is truncated | Ask "continue from where you left off" or generate in smaller sections |

---

## Quick Reference Card

```
FONTS:     Cormorant Garamond (headings) | DM Sans (body)
GOLD:      #D4A853 (light) | #F0C86E (dark)
MAROON:    #722F37
BG LIGHT:  #FAF6F1
BG DARK:   #12090A
TEXT:      #1E293B (light) | #F5F0E8 (dark)
RADIUS:    4px (buttons) | 12px (cards) | 100px (pills)
SHADOW:    0 4px 20px rgba(212, 168, 83, 0.3)
TIMING:    0.3s ease (micro) | 0.5s ease (page)
EASING:    cubic-bezier(0.2, 0.8, 0.2, 1)
```
