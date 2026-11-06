# My First Website — Learning HTML

A four-page English-language learning project for a Web Technologies course. Written in plain HTML, CSS and JavaScript. All original quotes and illustrations are included locally; no paid tools or framework required.

## 1. How to run (no installation required)
1. Unzip `learning-html-my-site.zip`.
2. Open `learning-html-my-site/index.html` in Chrome, Edge or Firefox.
3. Use the navigation menu to move between pages.
4. On `quotes.html`, click **Another quote**. On `machine.html`, click the switch.

**Optional — VS Code:** Open the whole folder with VS Code. For live preview you can install the *Live Server* extension, then right-click `index.html` and choose "Open with Live Server". This site also works by double-clicking the HTML files.

## 2. Page / file guide

| File | Function |
|------|----------|
| `index.html` | Homepage with introductory text and original SVG hero image |
| `quotes.html` | 15 quotes and a random quote generator |
| `project.html` | 5 distinct website project ideas |
| `machine.html` | Interactive Useless Machine switch |
| `nav.html` | Standalone demonstration of the reusable navigation |
| `js/nav.js` | Injects the same navigation and footer on every page |
| `js/quotes.js` | Stores the 15 original quotes and chooses one at random |
| `js/machine.js` | Controls the switch, animation, and attempt counter |
| `style.css` | Global design and responsive layout |
| `assets/hero.svg` | Original homepage illustration |
| `assets/favicon.svg` | Original icon |
| `assets/og-cover.png`, `assets/app-icon.png`, `assets/favicon.png` | Image assets for previews and project submission |

## 3. Learning HTML assignment checklist (14 items)

### Eight coding/content requirements — already included in this starter
- [x] 1. `index.html` contains homepage content and a large hero illustration.
- [x] 2. `quotes.html` contains 15 quotes.
- [x] 3. `nav.html` plus `js/nav.js` demonstrate JavaScript-reused navigation.
- [x] 4. `project.html` contains at least 5 website ideas.
- [x] 5. `quotes.html` shows a randomly chosen quote, and lets visitors request another.
- [x] 6. `machine.html` presents a Useless Machine.
- [x] 7. `js/machine.js` makes the machine interactive.
- [x] 8. `style.css` provides shared styling and responsive layout.

### Six developer workflow tasks — must be completed by the student
- [ ] 9. Install Visual Studio Code; configure the AI coding assistant specified by your teacher (follow campus rules).
- [ ] 10. Install Git locally and check `git --version`.
- [ ] 11. Initialize an actual Git repository in the project folder.
- [ ] 12. Register/sign in to GitHub (if necessary).
- [ ] 13. Connect a GitHub repository and push your actual development commits.
- [ ] 14. Publish the project to a publicly reachable URL, e.g. GitHub Pages.

**Important:** Check the teacher's current published assignment page in case some requirements differ. The tool could not re-fetch the slides during this build. Do not claim that the six workflow tasks above are already done. A generated project has no genuine past development history.

## 4. Complete real Git setup and upload (student actions)

In VS Code, choose **Terminal → New Terminal**, then run these inside `learning-html-my-site`:

```bash
git --version
git init
git add .
git commit -m "Add initial Learning HTML website"
```

If Git asks for your identity, configure it with your actual name/email (do not copy placeholders):

```bash
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL"
```

Create an **empty public repository** on GitHub, e.g. `learning-html`, without automatically creating a README. Replace `<YOUR_USERNAME>` with your actual GitHub username and run:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/learning-html.git
git push -u origin main
```

Now do real, small improvements to the site (update introductions, refine the design, improve accessibility, test on mobile). After **each genuine change**, commit it:

```bash
git add .
git commit -m "Improve mobile navigation and homepage text"
git push
```

Do **not** fabricate commit history, dates, or changes.

## 5. GitHub Pages deployment

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, `main`, and `/(root)`.
4. Save and open the published URL, usually `https://<YOUR_USERNAME>.github.io/learning-html/`.
5. Test Home, Quotes, Project Ideas, Useless Machine, and the mobile navigation on the actual deployed site.

## 6. How to submit

The teacher's class portal may require a separate **Learning HTML** project entry, project summary, GitHub repository URL, live website URL, and images. Verify the exact current submission deadline and file size limits on the official course page before uploading.

Assets included in `assets/`:
- `og-cover.png`: 1200 × 630 pixels (check any file-size limit; compress if necessary)
- `desktop-preview.png`: 1920 × 1080 illustrative preview, **not an actual screenshot of a deployed website**
- `mobile-preview.png`: 375 × 812 illustrative preview, **not an actual screenshot of a deployed website**
- `app-icon.png`: 180 × 180 pixels
- `favicon.png`: 32 × 32 pixels

**For actual submissions, take real desktop and mobile screenshots after you deploy**. The preview assets are design references only, not substitutes for genuine screenshots. All text, screenshots and links should be checked and personalized by the student.

## 7. Five-minute explanation practice (optional)
- Home page: explain semantic sections, header, image alt text.
- Quotes: explain the array of 15 quotes, `Math.random`, and DOM updates.
- Machine: explain the click listener, `aria-checked`, and `setTimeout`.
- Navigation: explain how `nav.js` creates the same links on every page.
- Responsive design: show desktop and narrow/mobile screen layouts.

## 8. Credits
Original code, SVG artwork and quote texts produced for this starter website. Google Fonts is optional; if offline, it falls back to system fonts. No unlicensed images or copied quotes are used.
