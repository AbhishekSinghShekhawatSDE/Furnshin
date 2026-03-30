# Furnshin — Digital Platform

**Spaces Designed for Luxury** | Est. 1996, Jaipur

Premium Next.js 15 website for Furnshin, the 30-year interior design & furnishing brand from Jaipur.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS Tokens |
| Animation | Framer Motion + Canvas 2D |
| SEO | next-seo + JSON-LD Schemas |
| Analytics | Google Analytics 4 |
| Backend | Google Apps Script + Sheets |
| Deployment | Vercel |

---

## Pages Built

| Route | Page |
|-------|------|
| `/` | Homepage — Hero, Services, Process, Testimonials |
| `/about` | Brand story, 30-year timeline, values |
| `/contact` | Lead form + Google Sheets + Map |
| `/services` | Services overview (6 verticals) |
| `/services/glass-works` | Glass Works detail |
| `/services/custom-furniture` | Custom Furniture detail |
| `/services/aluminum-solutions` | Aluminum Solutions detail |
| `/services/iron-metal-works` | Iron & Metal Works detail |
| `/services/interior-decoration` | Interior Decoration detail |
| `/services/floor-decor` | Floor Decor detail |
| `/portfolio` | 12-item portfolio grid |
| `/blog` | 12 SEO blog posts listing |
| `/blog/[slug]` | Individual blog post (12 static pages) |
| `/case-studies` | 6 case studies listing |
| `/case-studies/[slug]` | Individual case study (6 static pages) |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |
| `/sitemap.xml` | Dynamic sitemap (37 URLs) |

---

## Environment Variables

Create `.env.local` (already exists from setup):

```env
NEXT_PUBLIC_APPSCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
NEXT_PUBLIC_GA_ID=G-01FKMZ7BQ1
NEXT_PUBLIC_WHATSAPP=919828101833
```

---

## Setup & Development

```bash
# Install
npm install --legacy-peer-deps

# Dev server
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

---

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended for first deploy)
```bash
npx vercel --prod
```
Follow prompts to login and link/create project.

### Option 2: GitHub Integration
1. Push to GitHub: `git push origin main`
2. Connect repo at [vercel.com/new](https://vercel.com/new)
3. Set environment variables in Vercel dashboard
4. Every push to `main` auto-deploys

### Environment Variables on Vercel
Add these in Vercel Dashboard → Project Settings → Environment Variables:
- `NEXT_PUBLIC_APPSCRIPT_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_WHATSAPP`

---

## Google Apps Script Setup

1. Go to [script.google.com](https://script.google.com) → New Project
2. Replace the default code with this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID');
  const data = JSON.parse(e.postData.contents);
  const tab = sheet.getSheetByName(data.type || 'Contact') || sheet.getSheets()[0];
  const row = [new Date(), data.name, data.phone, data.email, data.message || data.service || '', data.budget || ''];
  tab.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Furnshin API Active');
}
```

3. Deploy → New Deployment → Web App → Execute as Me → Anyone
4. Copy the web app URL → paste into `NEXT_PUBLIC_APPSCRIPT_URL`

---

## Brand & Contact

| Field | Value |
|-------|-------|
| Phone | +91 9828101833 |
| Email | Furnshin@gmail.com |
| Address | Petunia 201, Manglam Aananda, Sanganer, Jaipur, 302029 |
| GA4 ID | G-01FKMZ7BQ1 |
| WhatsApp | 919828101833 |
