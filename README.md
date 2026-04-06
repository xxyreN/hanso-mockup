# HanSo Café — Concept Mockup

Unsolicited redesign concept. Not affiliated with HanSo Café.

## Preview locally

Just double-click `index.html` or drag it into a browser. No build step.

For live reload while editing, use VS Code Live Server extension.

## Deploy to Netlify (for the pitch)

```bash
# from this folder
netlify deploy --dir=. --prod
# or drag-and-drop the whole folder onto netlify.com
```

You'll get a URL like `hanso-concept.netlify.app` to send in the DM.

## File structure

```
hanso-mockup/
├── index.html       Home
├── menu.html        Full menu (carta)
├── locales.html     Two locations
├── tienda.html      Shop (beans + merch)
├── filosofia.html   Philosophy + NO LAPTOPS manifesto
├── css/style.css    All styles, design tokens at top
├── js/lang.js       EN/ES language toggle
└── img/             (add real photos here)
```

## Design tokens (edit in `css/style.css`)

```
bg:           #0D0D0D  near-black
text:         #F2EDE5  warm cream
text-muted:   #7A756E  warm gray
accent:       #C14B4B  hanko red
accent-warm:  #E8B87A  amber food tone
```

Fonts via Google Fonts: **Fraunces** (display), **Inter** (body), **JetBrains Mono** (utility).

## How to swap in real photos

All hero/media slots use CSS gradient placeholders. To replace:

1. Drop photos in `/img/` (e.g. `img/hero-pourover.jpg`)
2. In `css/style.css`, find `.hero-media`, `.menu-item-media`, `.locale-media`, `.shop-item-media`, `.tienda-item .media`
3. Replace the `background:` line with:
   ```css
   background: url('../img/hero-pourover.jpg') center/cover no-repeat;
   ```

Needed photos:
- 1 hero shot (pour-over or similar moody @iamxriz photo)
- 4 menu item shots (Çilbir, Chashu Toast, French Toast Tiramisú, Bacon Egg Bagel)
- 2 locale shots (HanSo 1 interior, HanSo 2 interior)
- 6 shop shots (beans × 4, merch × 2)

## Credits

Concept design: [your agency name]
Photography (reference only): @iamxriz
Brand: HanSo Café Madrid
