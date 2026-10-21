# Reddington Consulting Inc. — website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.1.13 (pinned) · Motion

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content
- Company details, nav: `src/content/site.ts`
- Services, industries, stats, testimonials: `src/content/services.ts`
- Blog posts: `src/content/posts.ts` (each post gets `/blog/<slug>`)
- Job openings: `src/content/jobs.ts` (each job gets `/careers/<slug>`)

## Forms
`/api/contact` (JSON) and `/api/careers` (multipart, resume ≤ 5 MB PDF/DOC/DOCX) send email via SMTP.
Copy `.env.example` to `.env.local` and fill the SMTP values. Without `SMTP_HOST`, submissions are logged to the server console.

> Keep `tailwindcss` and `@tailwindcss/postcss` at 4.1.13 — newer 4.x breaks the Turbopack build.
