# A9 Epoxy Inspirations

Premium responsive landing page for A9 Epoxy Inspirations, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Build the production bundle with:

```bash
npm run build
```

## WhatsApp configuration

The WhatsApp action is intentionally not pointed at an invented phone number. Add the real destination as a Vite environment variable when it is available:

```bash
VITE_WHATSAPP_URL=https://wa.me/<business-number>?text=Hello%20A9%20Epoxy%20Inspirations
```

Until configured, the CTA explains how to enable the destination instead of creating a broken or misleading link.

## Artwork note

The landing page now reads the supplied PNG artwork from `public/hero`, `public/wedding-keepsakes`, `public/devotional-art`, and `public/custom-wall-art`. The image file names are kept explicit in `src/App.jsx` so Vite serves the same assets in development and production, while the existing responsive crops, hover motion, and lightbox remain in place.

`public/pooja-festive` and `public/baby-memories` are currently empty in this workspace. Their cards render a styled upload-pending state until the corresponding real artwork files are added; no artwork from another collection is substituted.
