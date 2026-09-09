# Same Standard Co. — Marketing Website

Premium marketing site for **Same Standard Co.** — firefighter merch and training aids for rural volunteer firefighters.

**Message:** Volunteers and career firefighters share the *same* standard. The paycheck isn’t the qualification.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — brand hero, taglines, featured merch, training CTA |
| `/shop` | Product cards with notify-me (coming soon) |
| `/training` | Weeknight calendar + drill cards pitch; PDF downloads |
| `/standard` | Philosophy / About |
| `/about` | Redirects to `/standard` |

## Brand

- **Colors:** black `#0a0a0a`, bone/cream `#EDE6D6`, oxblood `#8B1E1E`
- **Mark:** equals sign `=` + SAME STANDARD CO. wordmark
- **Tone:** aggressive but humble; zero cheese

## Getting started

```bash
cd /workspace/same-standard-co/website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Assets

- Brand marks: `public/brand/` (patch, capsule)
- Product mocks: `public/products/`
- Training PDFs: `public/downloads/`

## Product line (coming soon)

| Item | Price |
|------|-------|
| Field Cap | $32 |
| Standard Tee | $30 |
| Sticker Pack | $10 |
| Station Hoodie | $60 |
| Job Shirt | $65 |

Notify forms on the shop page capture interest locally in the UI (no backend wired yet).

## License

Private — Same Standard Co.
