# EPF Website

This site is a static HTML/CSS site with a Spinelli Report article feed loaded from `content/articles.json`.

## Editor workflow (GitHub + Decap CMS)

### Goal
Editors should have their own UI for adding new articles, and the published content should be stored via GitHub.

### What works today
- `news.html` loads the Spinelli article list from `content/articles.json`
- `admin/editor.html` is a browser UI that lets editors build article JSON and download an updated `articles.json`
- `admin/index.html` is the Decap CMS entry point
- `admin/config.yml` is configured for a GitHub-backed CMS once you provide a real repo

### To make it work with GitHub
1. Initialize the project as a Git repository:
   ```powershell
   git init
   git add .
   git commit -m "Initial EPF site"
   ```
2. Create a GitHub repo and add it as the remote:
   ```powershell
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Update `admin/config.yml`:
   - Replace `YOUR_USERNAME/YOUR_REPO` with your GitHub repo path
   - Replace `YOUR_DOMAIN` with your site domain or preview URL

4. Deploy the site to a host that supports Decap CMS / Netlify CMS and GitHub authentication.
   - Netlify is a common choice
   - GitHub Pages can work if the CMS is configured correctly

5. Open `/admin/` in the browser and log in with the CMS backend.

### Notes
- The recommended editor UI is `/admin/` once the GitHub backend is configured.
- If you want a quick local editor without backend connection, use `/admin/editor.html`.
- The public article page remains `news.html`.

## Publishing articles
- Editors use the CMS UI to edit the article list
- The CMS commits changes to `content/articles.json`
- `news.html` automatically reads the latest JSON on page load
