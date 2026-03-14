# CredAxis – Alternative Credit Engine

React 19 · React Router 7 · Vite 6 · Plain JSX · No TypeScript

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

**Demo login**: any email + password of 4+ characters.

---

## Folder structure

```
src/
├── app/
│   ├── router.jsx          ← All routes defined here
│   └── App.jsx             ← RouterProvider entry
│
├── features/
│   └── auth/
│       ├── authContext.jsx  ← AuthProvider + useAuth hook
│       └── ProtectedRoute.jsx
│
├── layouts/
│   ├── PublicLayout.jsx    ← Navbar + Outlet + Footer
│   ├── DashboardLayout.jsx ← Sidebar + Topbar + Outlet
│   └── SettingsLayout.jsx  ← Settings tab bar + Outlet
│
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── dashboard/
│       ├── Sidebar.jsx
│       └── Topbar.jsx
│
├── pages/
│   ├── public/             ← Home, About, Features, Documentation, Contact
│   ├── auth/               ← Login, Signup
│   ├── dashboard/
│   │   ├── overview/       ← Overview
│   │   ├── borrowers/      ← Borrowers, BorrowerDetails
│   │   ├── lenders/        ← Lenders
│   │   ├── credit-models/  ← CreditModels
│   │   ├── risk-analysis/  ← RiskAnalysis
│   │   ├── transactions/   ← Transactions
│   │   ├── reports/        ← Reports
│   │   ├── integrations/   ← Integrations
│   │   ├── settings/       ← General, Security, Billing, Team
│   │   └── profile/        ← Profile
│   └── NotFound.jsx
│
├── services/
│   └── api.js              ← Fetch wrapper (attaches auth token)
│
├── styles/
│   └── global.css
│
└── main.jsx
```

---

## URL map

| URL | Page |
|-----|------|
| `/` | Home |
| `/about` | About |
| `/features` | Features |
| `/docs` | Documentation |
| `/contact` | Contact |
| `/login` | Login |
| `/signup` | Signup |
| `/dashboard` | Overview |
| `/dashboard/borrowers` | Borrowers list |
| `/dashboard/borrowers/:id` | Borrower detail |
| `/dashboard/lenders` | Lenders |
| `/dashboard/credit-models` | Credit Models |
| `/dashboard/risk-analysis` | Risk Analysis |
| `/dashboard/transactions` | Transactions |
| `/dashboard/reports` | Reports |
| `/dashboard/integrations` | Integrations |
| `/dashboard/settings` | Settings – General |
| `/dashboard/settings/security` | Settings – Security |
| `/dashboard/settings/billing` | Settings – Billing |
| `/dashboard/settings/team` | Settings – Team |
| `/dashboard/profile` | Profile |
| `*` | 404 |

---

## How auth works

1. `AuthProvider` in `main.jsx` wraps the whole app.
2. On mount it checks `localStorage` for a saved user object.
3. `ProtectedRoute` in `src/features/auth/ProtectedRoute.jsx` guards all `/dashboard/*` routes — unauthenticated users are redirected to `/login` and their intended URL is saved in router state.
4. After login, `Login.jsx` sends them back to the saved URL (or `/dashboard`).

---

## How to add a new page

### New public page (e.g. `/pricing`)

1. Create `src/pages/public/Pricing.jsx`
2. Add lazy import in `src/app/router.jsx`
3. Add route inside the `PublicLayout` children array:
   ```jsx
   { path: "pricing", element: wrap(Pricing) }
   ```
4. Add nav link in `src/components/shared/Navbar.jsx`

### New dashboard module (e.g. `/dashboard/loans`)

1. Create folder `src/pages/dashboard/loans/`
2. Create `Loans.jsx` inside it
3. Add lazy import in `src/app/router.jsx`
4. Add route inside the `/dashboard` children array:
   ```jsx
   { path: "loans", element: wrap(Loans) }
   ```
5. Add nav link in `src/components/dashboard/Sidebar.jsx` → `NAV_ITEMS`

The new route is automatically protected because it's nested under `ProtectedRoute`.

---

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
