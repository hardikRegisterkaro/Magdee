# MagDee

A voice-first cooking companion — intelligence, gently engineered. Built with Next.js 16 and React 19.

---

## Prerequisites

- Node.js 18+
- A running instance of the MagDee backend API (default: `http://localhost:3001`)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rishabh-registerkaro/Magdee.git
cd Magdee
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and update the values:

```env
BACKEND_API_URL=http://localhost:3001
```

> `.env.local` is gitignored and never committed. See [Environment Variables](#environment-variables) below for all available variables.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

All variables are **server-only** (no `NEXT_PUBLIC_` prefix) and never exposed to the browser.

| Variable | Required | Description | Example |
|---|---|---|---|
| `BACKEND_API_URL` | Yes | Base URL of the MagDee backend API. No trailing slash. | `http://localhost:3001` |

### Per-environment setup

| Environment | Where to set |
|---|---|
| **Development** | `.env.local` (copy from `.env.example`) |
| **Production** | Set in your hosting platform (Vercel, Railway, etc.) as an environment variable |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Caching

API data (e.g. the header menu) is fetched once on the server and stored in Next.js's Data Cache using `cache: "force-cache"`. Subsequent requests are served from the cache with no network call to the backend.

To bust the cache after a content update, call `revalidateTag("header-menu")` from a Server Action or Route Handler.

> In `next dev`, the Data Cache is bypassed on every request so you always see live data. Caching only applies in production (`next build` + `next start`).
