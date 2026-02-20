# Using Claude AI to Edit Harmonia
## Complete Guide for Beginners

---

## What Claude Can Do

Claude (claude.ai) can read, edit, and create all files in this project including HTML, CSS, JavaScript, and documentation. It can also create downloadable zip files.

---

## Step 1: Upload Your Project

1. Go to **claude.ai** and start a new conversation
2. Click the **paperclip icon** (📎) to attach files
3. Upload **the entire zip file** of this project
4. Claude will have access to all files inside

**Pro tip:** Upload the zip rather than individual files — Claude can extract and work with everything.

---

## Step 2: How to Ask for Changes

### Changing Colors
```
"Change the gold accent color from #D4A853 to #C9976B across the entire site. 
Make sure to update both light and dark mode CSS variables in style.css."
```

### Adding a New Page
```
"Create a new page called 'investors.html' that matches the existing site style.
Use the same nav, footer, fonts, and color scheme. Include a hero section 
with the heading 'For Investors' and a contact form."
```

### Editing Animations
```
"Make the hero radar chart spin faster. The animation is in js/app.js. 
Currently it updates every 3 seconds — change it to every 1.5 seconds.
Keep the same easing and transition style."
```

### Editing the P2P Preview
```
"Update the P2P page Phase 2 preview to include all 6 Felix questions 
from the technical specification. Show them in a scrollable list with 
the domain and primary sins for each question."
```

---

## Step 3: Key Files Reference

Tell Claude which file to edit:

| What you want to change | File to mention |
|------------------------|-----------------|
| Colors, fonts, layout, responsive | `css/style.css` |
| Page content, structure | `[page-name].html` |
| Navigation, theme toggle, sliders | `js/app.js` |
| Background particles | `js/webgl.js` |
| Phase fields, technical spec | `docs/DESIGN_FIELDS.md` |
| Deployment configuration | `server.js`, `package.json` |

---

## Step 4: Best Practices

### DO ✅
- **Reference the README.md** — Say "following the style guide in README.md"
- **Be specific** — "Change the hero title font size from 3.8rem to 4.2rem"
- **Ask for both modes** — "Make sure it works in both light and dark mode"
- **Request a zip** — "Package everything as a zip file I can download"
- **Test incrementally** — Make one change at a time, verify, then move on

### DON'T ❌
- Don't say "make it look better" — be specific about what to change
- Don't forget dark mode — always mention both themes
- Don't change CSS variables to hardcoded hex values
- Don't remove the WebGL background — it's intentional ambient design
- Don't ask Claude to change fonts without specifying which ones

---

## Step 5: Advanced Prompts

### Adding WebGL Effects
```
"Add a new WebGL effect to the why-harmonia.html page. Create a DNA helix 
animation using Three.js that renders behind the science cards section.
Use the gold (#D4A853) and maroon (#722F37) colors from the design system.
Make it subtle in light mode and more visible in dark mode."
```

### Creating Interactive Components
```
"Add an interactive compatibility calculator to the local-network.html page.
When the user adjusts sliders for Visual (0-100), Psychometric (0-100), 
and Biological (0-100), calculate and display the WtM score using the formula:
WtM = (0.4 × S_vis) + (0.3 × S_psych) + (0.3 × S_bio)
Style it with the Harmonia design system colors and fonts."
```

### Full Page Redesign
```
"Redesign the contact.html page. Keep the same nav and footer but replace 
the current layout with a single-column centered design. Use a large 
Cormorant Garamond heading, a brief description in DM Sans, and a modern 
form with floating labels. Add a subtle gold border animation on input focus.
Follow all style guidelines from README.md."
```

---

## Step 6: Getting Files Back

After Claude makes changes, ask:
```
"Package the entire updated project as a zip file I can download."
```

Claude will create the zip and provide a download link.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Claude doesn't know the colors | Say "Read README.md first for the style guide" |
| Changes only affect one mode | Say "Apply to both light and dark mode" |
| Animation feels wrong | Reference the timing: "Use cubic-bezier(0.2, 0.8, 0.2, 1)" |
| New page doesn't match | Say "Copy the exact HTML structure from index.html" |
| CSS isn't applying | Check if the class names match style.css |
