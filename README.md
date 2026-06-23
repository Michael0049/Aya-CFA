# Aya CFA — Level I Study Hub

A clean, static study website for CFA® Level I: summarized notes, formula sheets, and interactive quizzes across all 10 topic areas. No build step, no dependencies — just open `index.html`.

## What's inside

| Page | Purpose |
|------|---------|
| `index.html` | Homepage with the 10 topic cards and exam weights |
| `notes.html` | Summarized notes for every topic |
| `formulas.html` | Quick-reference formula sheets |
| `quizzes.html` | Quiz hub |
| `quiz.html?t=<topic>` | Interactive quiz player (scored, with explanations) |
| `assets/css/style.css` | Styling |
| `assets/js/topics.js` | Topic metadata (names, weights) |
| `assets/js/quizzes.js` | Quiz question bank |
| `assets/js/app.js` | Nav + quiz engine |

## Run it locally
Just double-click `index.html`, or serve the folder:
```
python -m http.server 8000
```
Then visit http://localhost:8000

## Publish free on GitHub Pages

1. Create a new repository on GitHub (e.g. `aya-cfa`). Public.
2. Upload all the files in this folder (keep the folder structure — `assets/` must stay intact). You can drag-and-drop them into the repo's web uploader, or push with git:
   ```
   git init
   git add .
   git commit -m "CFA Level I study hub"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aya-cfa.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait ~1 minute. Your site goes live at:
   ```
   https://<your-username>.github.io/aya-cfa/
   ```

> Tip: To use a `username.github.io` root URL instead of a subpath, name the repo exactly `<your-username>.github.io`.

## Editing content

- **Add/edit quiz questions:** edit `assets/js/quizzes.js`. Each question is `{q, options:[...], answer:<index>, explain}` where `answer` is the 0-based index of the correct option.
- **Edit notes:** edit `notes.html` (each topic is a `<section>`).
- **Edit formulas:** edit `formulas.html`.
- **Change topic names/weights:** edit `assets/js/topics.js`.

---

*Study aid only. Not affiliated with or endorsed by CFA Institute. CFA® is a registered trademark owned by CFA Institute.*
