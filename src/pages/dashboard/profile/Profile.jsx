// src/pages/dashboard/settings/Profile.jsx
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../../../features/auth/authContext";
import {
  User,
  Lock,
  Bell,
  Users,
  CreditCard,
  Camera,
  Save,
  Trash2,
  CheckCircle2,
  Mail,
  Phone,
  Globe,
  Shield,
  Settings2,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react";

// ─── Settings nav items ──────────────────────────────────────────────────────
const settingsNav = [
  { label: "Profile", to: "/dashboard/settings", icon: User, end: true },
  { label: "Security", to: "/dashboard/settings/security", icon: Lock },
  {
    label: "Notifications",
    to: "/dashboard/settings/notifications",
    icon: Bell,
  },
  { label: "Team", to: "/dashboard/settings/team", icon: Users },
  { label: "Billing", to: "/dashboard/settings/billing", icon: CreditCard },
];

// ─── Settings layout — sidebar (desktop) + horizontal tabs (mobile) ──────────
export function SettingsLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* ── Mobile top nav bar ── */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <span className="text-sm font-semibold text-slate-700">Settings</span>
        <button
          onClick={() => setMobileNavOpen((v) => !v)}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── Mobile dropdown nav ── */}
      {mobileNavOpen && (
        <div className="border-b border-slate-200 bg-white md:hidden">
          {settingsNav.map((item) => (
            <MobileNavLink
              key={item.to}
              {...item}
              onSelect={() => setMobileNavOpen(false)}
            />
          ))}
        </div>
      )}

      {/* ── Desktop sidebar nav ── */}
      <aside className="hidden w-52 shrink-0 border-r border-slate-200 bg-white py-6 md:block">
        <p className="mb-3 px-5 text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
          Account
        </p>
        {settingsNav.slice(0, 3).map((item) => (
          <SideNavLink key={item.to} {...item} />
        ))}
        <p className="mt-5 mb-3 px-5 text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
          Workspace
        </p>
        {settingsNav.slice(3).map((item) => (
          <SideNavLink key={item.to} {...item} />
        ))}
      </aside>

      {/* ── Page content ── */}
      <main className="flex-1 overflow-auto bg-slate-50 px-4 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>
    </div>
  );
}

function SideNavLink({ to, label, icon: Icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      style={{ textDecoration: "none" }}
      className={({ isActive }) =>
        `flex items-center gap-2.5 border-l-2 px-5 py-2.5 text-[13px] font-medium transition-colors ${
          isActive
            ? "border-[#1535d0] bg-[#1535d010] text-[#1535d0]"
            : "border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800"
        }`
      }
    >
      <Icon size={14} />
      {label}
    </NavLink>
  );
}

function MobileNavLink({ to, label, icon: Icon, end, onSelect }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onSelect}
      style={{ textDecoration: "none" }}
      className={({ isActive }) =>
        `flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
          isActive
            ? "bg-[#1535d010] text-[#1535d0]"
            : "text-slate-600 hover:bg-slate-50"
        }`
      }
    >
      <Icon size={15} />
      {label}
    </NavLink>
  );
}

// ─── Reusable components ─────────────────────────────────────────────────────
function Card({ children, className = "", danger = false }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-4 sm:p-6 ${
        danger ? "border-red-200/60" : "border-slate-200"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      className="mb-4 text-[10px] font-semibold tracking-widest uppercase"
      style={{ color: "#e6ac2c" }}
    >
      {children}
    </p>
  );
}

function Field({
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
        {Icon && <Icon size={11} />}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition outline-none focus:border-[#1535d0] focus:ring-2 focus:ring-[#1535d0]/15"
      />
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-3 sm:px-4">
      <p className="text-[10px] text-slate-400 sm:text-[11px]">{label}</p>
      <p className="mt-0.5 text-lg font-semibold text-slate-800 sm:text-xl">
        {value}
        {sub && (
          <span className="ml-1.5 text-[11px] font-medium text-emerald-500">
            {sub}
          </span>
        )}
      </p>
    </div>
  );
}

// ─── Profile page ─────────────────────────────────────────────────────────────
export default function Profile() {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(user?.firstName ?? "Adewale");
  const [lastName, setLastName] = useState(user?.lastName ?? "Okonkwo");
  const [email, setEmail] = useState(user?.email ?? "adewale.o@credaxis.com");
  const [phone, setPhone] = useState(user?.phone ?? "+234 812 345 6789");
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [timezone, setTimezone] = useState("WAT (UTC+1)");
  const [displayName, setDisplayName] = useState("adewale.okonkwo");
  const [bio, setBio] = useState(
    "Senior credit analyst specialising in SME lending and risk scoring models.",
  );
  const [saved, setSaved] = useState(false);
  const [deleteStep, setDeleteStep] = useState(false);

  const initials =
    `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase() || "?";

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Page heading */}
      <div className="mb-2 flex flex-col gap-0.5 sm:mb-6 sm:flex-row sm:items-baseline sm:gap-3">
        <h1 className="text-lg font-semibold text-white sm:text-xl">
          Profile settings
        </h1>
      </div>

      {/* ── Hero card (cover + avatar + stats) ──────────────────────── */}
      <Card className="mb-4 overflow-hidden p-0">
        {/* Cover */}
        <div
          className="relative flex h-20 items-end justify-end pr-3 pb-2 sm:h-28 sm:pr-4 sm:pb-3"
          style={{ backgroundColor: "#1535d0" }}
        >
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white transition hover:bg-white/20 sm:px-3 sm:py-1.5"
          >
            <Camera size={11} />
            Edit cover
          </button>
        </div>

        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          {/* Avatar row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-end gap-3 sm:gap-4">
              {/* Avatar overlapping cover */}
              <div className="relative -mt-8 sm:-mt-10">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-lg font-black text-white sm:h-20 sm:w-20 sm:text-xl"
                  style={{ backgroundColor: "#111d6b" }}
                >
                  {initials}
                </div>
                <span
                  className="absolute right-0.5 bottom-0.5 h-3 w-3 rounded-full border-2 border-white sm:h-3.5 sm:w-3.5"
                  style={{ backgroundColor: "#22c55e" }}
                />
              </div>

              <div className="mb-1">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  {firstName} {lastName}
                </p>
                <p className="mb-1.5 text-xs text-slate-500">
                  {user?.role ?? "Credit Analyst"} · CredAxis · {location}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    <Shield size={10} /> Admin
                  </span>
                  <span
                    className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium"
                    style={{ background: "#1535d012", color: "#1535d0" }}
                  >
                    Credit Engine
                  </span>
                  <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                    Senior Analyst
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600 transition hover:bg-slate-50 sm:mt-3 sm:px-3.5 sm:py-2"
            >
              <Camera size={12} /> Change photo
            </button>
          </div>

          {/* Stats — 2 cols on mobile, 4 on sm+ */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-4 sm:gap-3">
            <StatCard label="Borrowers reviewed" value="1,240" sub="↑12%" />
            <StatCard label="Decisions made" value="986" />
            <StatCard label="Accuracy rate" value="98.2%" />
            <StatCard label="Avg. review time" value="4.2m" />
          </div>
        </div>
      </Card>

      {/* ── Main content — stacks on mobile, 2-col on lg ─────────────── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px]">
        {/* ── LEFT: forms ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            {/* Personal info */}
            <Card>
              <SectionLabel>Personal information</SectionLabel>
              {/* 1 col on mobile, 2 col on sm+ */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <Field
                  label="First name"
                  icon={User}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Field
                  label="Last name"
                  icon={User}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Field
                  label="Email address"
                  icon={Mail}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                  label="Phone number"
                  icon={Phone}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Field
                  label="Location"
                  icon={Globe}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Field
                  label="Timezone"
                  icon={Globe}
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                />
              </div>
            </Card>

            {/* Bio & identity */}
            <Card>
              <SectionLabel>Bio &amp; identity</SectionLabel>
              <div className="flex flex-col gap-4">
                <Field
                  label="Display name"
                  icon={Settings2}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <User size={11} /> Bio
                  </label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell your team about yourself…"
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 transition outline-none focus:border-[#1535d0] focus:ring-2 focus:ring-[#1535d0]/15"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[11px] text-slate-400">
                  Last updated 2 hours ago
                </span>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90 active:scale-[0.98] sm:w-auto"
                  style={{ backgroundColor: "#111d6b" }}
                >
                  <Save size={13} /> Save changes
                </button>
              </div>

              {saved && (
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Changes saved successfully
                </div>
              )}
            </Card>
          </form>
        </div>

        {/* ── RIGHT: sidebar cards (full width on mobile, fixed on lg) ── */}
        <div className="flex flex-col gap-4">
          {/* Recent activity */}
          <Card>
            <SectionLabel>Recent activity</SectionLabel>
            <div className="flex flex-col divide-y divide-slate-100">
              {[
                {
                  color: "#22c55e",
                  text: "Approved loan for",
                  name: "Emeka Chukwu",
                  time: "2 hours ago",
                },
                {
                  color: "#ef4444",
                  text: "Flagged high-risk",
                  name: "Kemi Adeyemi",
                  time: "5 hours ago",
                },
                {
                  color: "#1535d0",
                  text: "Updated model",
                  name: "SME-V3",
                  time: "Yesterday",
                },
                {
                  color: "#f59e0b",
                  text: "Exported report",
                  name: "Q1-2025",
                  time: "2 days ago",
                },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: a.color }}
                  />
                  <div>
                    <p className="text-xs text-slate-700">
                      {a.text} <span className="font-medium">{a.name}</span>
                    </p>
                    <p className="text-[11px] text-slate-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Connected accounts */}
          <Card>
            <SectionLabel>Connected accounts</SectionLabel>
            <div className="flex flex-col divide-y divide-slate-100">
              {[
                {
                  bg: "#1877f2",
                  letter: "M",
                  name: "Microsoft SSO",
                  sub: "Connected",
                  status: "Active",
                },
                {
                  bg: "#1f2937",
                  letter: "G",
                  name: "Google Workspace",
                  sub: "Not connected",
                  status: null,
                },
              ].map((acc) => (
                <div
                  key={acc.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
                      style={{ backgroundColor: acc.bg }}
                    >
                      {acc.letter}
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-slate-800">
                        {acc.name}
                      </p>
                      <p className="text-[11px] text-slate-400">{acc.sub}</p>
                    </div>
                  </div>
                  {acc.status ? (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                      {acc.status}
                    </span>
                  ) : (
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
                      Connect
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Danger zone */}
          <Card danger>
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle size={13} className="text-red-500" />
              <p className="text-[10px] font-semibold tracking-widest text-red-500 uppercase">
                Danger zone
              </p>
            </div>
            <p className="mb-1 text-[13px] font-semibold text-slate-800">
              Delete your account
            </p>
            <p className="mb-4 text-[11px] leading-relaxed text-slate-500">
              Permanently removes your account and all associated data. This
              cannot be undone.
            </p>
            {!deleteStep ? (
              <button
                type="button"
                onClick={() => setDeleteStep(true)}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-[12px] font-medium text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={13} /> Delete my account
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <p className="w-full text-[12px] font-medium text-red-500 sm:w-auto">
                  Are you absolutely sure?
                </p>
                <button className="rounded-full bg-red-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-red-700">
                  Yes, delete
                </button>
                <button
                  onClick={() => setDeleteStep(false)}
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
