// src/pages/dashboard/settings/Profile.jsx
import { useState } from "react";
import { useAuth } from "../../../features/auth/authContext";
import {
  Camera,
  Save,
  Trash2,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Globe,
  Shield,
  AlertTriangle,
  Settings2,
} from "lucide-react";

// ─── tiny reusable field ──────────────────────────────────────────────────────
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
      <label className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <Icon size={12} />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition outline-none focus:border-[#1535d0] focus:ring-2 focus:ring-[#1535d0]/20"
      />
    </div>
  );
}

// ─── stat chip ────────────────────────────────────────────────────────────────
function Stat({ label, value, sub }) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-3">
      <p className="text-[11px] text-slate-400">{label}</p>
      <p className="mt-0.5 text-[18px] font-semibold text-slate-800">
        {value}{" "}
        {sub && (
          <span className="text-[11px] font-medium text-emerald-500">
            {sub}
          </span>
        )}
      </p>
    </div>
  );
}

export default function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [timezone, setTimezone] = useState("WAT (UTC+1)");
  const [saved, setSaved] = useState(false);
  const [deleteStep, setDeleteStep] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const initials =
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "?";

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* ── Page heading ──────────────────────────────────────────── */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            My Profile
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your personal information and account preferences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {/* ── Avatar card ──────────────────────────────────────────── */}
            <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div
                    className="flex h-18 w-18 items-center justify-center rounded-full text-2xl font-black text-white"
                    style={{ backgroundColor: "#111d6b" }}
                  >
                    {initials}
                  </div>
                  <span
                    className="absolute right-0.5 bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                </div>

                {/* Name + role */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-slate-900">
                    {name || "Your Name"}
                  </p>
                  <p className="mb-2.5 text-xs text-slate-500 capitalize">
                    {user?.role ?? "Member"} · CredAxis
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                      <Shield size={11} />
                      {user?.role ?? "Member"}
                    </span>
                    <span
                      className="inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium"
                      style={{ backgroundColor: "#1535d010", color: "#1535d0" }}
                    >
                      Lagos, Nigeria
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    <Camera size={12} />
                    Change photo
                  </button>
                </div>

                {/* Right col */}
                <div className="hidden shrink-0 text-right sm:block">
                  <p className="text-[11px] text-slate-400">Member since</p>
                  <p className="text-sm font-semibold text-slate-700">
                    Jan 2024
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-slate-100" />

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                <Stat label="Borrowers reviewed" value="1,240" sub="↑12%" />
                <Stat label="Decisions made" value="986" />
                <Stat label="Accuracy rate" value="98.2%" />
              </div>
            </div>

            {/* ── Personal info form ───────────────────────────────────── */}
            <form onSubmit={handleSave}>
              <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6">
                <p
                  className="mb-5 text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: "#e6ac2c" }}
                >
                  Personal Information
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    icon={User}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                  <Field
                    label="Username"
                    icon={Settings2}
                    value={user?.username ?? ""}
                    placeholder="e.g. adewale.o"
                  />
                  <Field
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                  <Field
                    label="Phone Number"
                    icon={Phone}
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 8xx xxx xxxx"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Timezone"
                      icon={Globe}
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Save row */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-400">
                    Last saved 2 hours ago
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: "#111d6b" }}
                  >
                    <Save size={14} />
                    Save changes
                  </button>
                </div>

                {/* Success toast */}
                {saved && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Changes saved successfully
                  </div>
                )}
              </div>
            </form>

            {/* ── Danger zone ──────────────────────────────────────────── */}
            <div className="rounded-2xl border border-red-200/60 bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle size={14} className="text-red-500" />
                <p className="text-[11px] font-semibold tracking-widest text-red-500 uppercase">
                  Danger Zone
                </p>
              </div>

              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Delete your account
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-slate-500">
                Once you delete your account, all borrower assignments,
                decisions, and audit history tied to your profile will be
                permanently removed. This cannot be undone.
              </p>

              {!deleteStep ? (
                <button
                  type="button"
                  onClick={() => setDeleteStep(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={14} />
                  Delete my account
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="text-xs font-medium text-red-500">
                    Are you absolutely sure?
                  </p>
                  <button
                    type="button"
                    className="rounded-full bg-red-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
                  >
                    Yes, delete it
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeleteStep(false)}
                    className="rounded-full border border-slate-200 px-5 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-4">
            {/* ── Security & privacy ─────────────────────────────────────── */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p
                className="mb-5 text-[11px] font-semibold tracking-widest uppercase"
                style={{ color: "#0c4a6e" }}
              >
                Security & privacy
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Two-factor authentication
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setTwoFactorEnabled((prev) => !prev)}
                  className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition ${
                    twoFactorEnabled
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {twoFactorEnabled ? "Enabled" : "Enable"}
                </button>
              </div>
            </div>

            {/* ── Recent activity ───────────────────────────────────────── */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p
                className="mb-5 text-[11px] font-semibold tracking-widest uppercase"
                style={{ color: "#1e3a8a" }}
              >
                Recent activity
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-slate-800">Signed in</p>
                    <p className="text-xs text-slate-500">Chrome • Lagos, NG</p>
                  </div>
                  <span className="text-xs text-slate-400">2h ago</span>
                </li>
                <li className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      Password changed
                    </p>
                    <p className="text-xs text-slate-500">2 days ago</p>
                  </div>
                  <span className="text-xs text-slate-400">2d ago</span>
                </li>
                <li className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-slate-800">
                      Profile updated
                    </p>
                    <p className="text-xs text-slate-500">1 week ago</p>
                  </div>
                  <span className="text-xs text-slate-400">7d ago</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
