# EASYGo Creative Design Studio

A responsive React + Vite website inspired by the supplied EASYGo reference design.

## Run on Windows

1. Install Node.js (LTS) if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `EASYGo-Creative-Studio` folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

```powershell
npm.cmd install
npm.cmd run dev
```

6. Open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```powershell
npm.cmd run build
```

## Before publishing

- In `src/App.jsx`, replace `WA_NUMBER = "919876543210"` with your real WhatsApp number, including country code and without `+`.
- Replace the portfolio placeholder images in `public/images/` with your own approved work.
- Update the sample starting prices in the `templates` array to your actual prices.
- Add your real contact details and social links.

The current gallery uses cropped visual samples from the supplied reference screenshot as temporary placeholders. Replace them with original design images before presenting the site as a live client portfolio.
