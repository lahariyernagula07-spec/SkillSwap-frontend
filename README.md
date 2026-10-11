# SkillSwap — Frontend Only

A polished frontend prototype for the SkillSwap student-to-student skill exchange platform.

## Included
- Landing page
- Explore Skills with search + category filters
- Smart Matches
- Student Dashboard
- Student Profile
- Skill Sessions / calendar
- Campus Leaderboard
- Chat UI
- Settings
- Exchange Request modal
- Offer Your Skill modal
- Responsive mobile layout
- Mock data only — no backend, database, authentication or real chat yet

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Next phase
Backend can later be connected to the same UI for authentication, users, skills, matching, exchanges, messages, sessions, reviews and badges.


## New: Project Info page
The navigation now includes **Project Info**, a presentation-cover-style page based on the first slide of the supplied SkillSwap presentation. It contains the college, project title, team, guide, and two buttons: **Abstract** (shows/hides the abstract) and **Website Link** (opens the main SkillSwap homepage).

## Publish a public URL (Vercel — free tier)
You need a public GitHub repository and a Vercel account. Publishing is not automatic from this ZIP; follow these steps:
1. Install Node.js LTS from https://nodejs.org/ and restart Command Prompt. Check `node -v` and `npm -v`.
2. Extract this ZIP, open the `SkillSwap-Frontend` folder in VS Code or Command Prompt, and run `npm install` then `npm run build` to test it.
3. Sign in at https://github.com/ and create a new repository, for example `skillswap-frontend`. Upload the extracted project files (including `package.json`, `index.html`, and `src`), not the ZIP itself.
4. Sign in at https://vercel.com/ with GitHub, choose **Add New → Project**, import `skillswap-frontend`.
5. Use Framework Preset **Vite**, Build Command `npm run build`, and Output Directory `dist`. Leave Root Directory at `./` if `package.json` is at the repository root. Click **Deploy**.
6. Vercel will give you a public URL such as `https://your-project-name.vercel.app`. Copy the actual URL shown in your Vercel dashboard and share it.
7. To update later, upload/commit the changed files to GitHub; Vercel automatically redeploys.

This is a frontend prototype using mock data. Authentication, database, real-time chat and production matching are not connected yet.
