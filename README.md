# Atelier Arch — Architecture Studio Website

One-page portfolio site (Portfolio, Gallery, Featured Projects, Contact) with downloadable PDF portfolios.

## Files
- `index.html` — page structure and content (the 3D building views are inline SVG)
- `css/style.css` — all styling
- `js/main.js` — menu, gallery filter, image viewer, contact form
- `portfolio/` — the three PDF portfolios linked from the site
- `.nojekyll` — tells GitHub Pages to serve files as they are

## Publish with GitHub Pages
1. Create a new public repository on GitHub (e.g. `architecture-website`).
2. Upload everything in this folder to the repository root (keep `index.html` at the top level and the `portfolio` folder beside it).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **main** and folder **/ (root)**, then **Save**.
5. After a minute, your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Customise
Open `index.html` and replace the sample firm name, project text and contact details (search for `Atelier Arch`, `yourfirm.example`, `12 Design Avenue`).
To use your own PDFs, replace the files in `portfolio/` and keep the same file names (or update the links in `index.html`).
The contact form is a demo and does not send messages; connect it to a form service such as Formspree if you need it.
