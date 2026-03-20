// src/pages/dashboard/borrowers/AddBorrower.jsx
import {
  Form,
  Link,
  useNavigation,
  useActionData,
  redirect,
} from "react-router";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

// ─── Action — runs on form submit (server or client action) ───────────────────
export async function action({ request }) {
  const data = await request.formData();
  const name = data.get("name")?.toString().trim() ?? "";
  const phone = data.get("phone")?.toString().trim() ?? "";
  const bvn = data.get("bvn")?.toString().trim() ?? "";

  // Validate
  const errors = {};
  if (!name) errors.name = "Full name is required";
  if (!phone) errors.phone = "Phone number is required";
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone))
    errors.phone = "Enter a valid phone number";
  if (!bvn) errors.bvn = "BVN is required";
  else if (!/^\d{11}$/.test(bvn)) errors.bvn = "BVN must be exactly 11 digits";

  if (Object.keys(errors).length) {
    return { errors, values: { name, phone, bvn } };
  }

  // TODO: replace with your real API call
  // await createBorrower({ name, phone, bvn });

  // Redirect to borrower scoring/approval page with form data in query params
  const redirectUrl = new URL("/dashboard/borrower-scoring", "http://localhost");
  redirectUrl.searchParams.set("name", name);
  redirectUrl.searchParams.set("phone", phone);

  return redirect(redirectUrl.pathname + redirectUrl.search);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AddBorrower() {
  const navigation = useNavigation();
  const actionData = useActionData();

  const isSubmitting = navigation.state === "submitting";
  const isSuccess =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("success") === "true";

  // Pull back field values so inputs stay filled on validation error
  const values = actionData?.values ?? {};
  const errors = actionData?.errors ?? {};

  // ── Success screen ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-[#061546] via-[#0B298C] to-sky-500">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCircle2 size={48} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-emerald-400">
            Borrower Added!
          </h2>
          <p className="text-base text-[#a0aecf]">
            The borrower has been successfully added.
          </p>
          <div className="mt-4 flex gap-3">
            {/* Link back to the clean form */}
            <Link
              to="/dashboard/add-borrower"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              style={{ textDecoration: "none" }}
            >
              Add Another
            </Link>
            <Link
              to="/dashboard/borrowers"
              className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "#111d6b", textDecoration: "none" }}
            >
              View All Borrowers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form screen ─────────────────────────────────────────────────────────────
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 80%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Back arrow — Link instead of onClick navigate(-1) */}
      <Link
        to="/dashboard/borrowers"
        className="absolute top-8 left-8 flex items-center gap-2 text-[#a0aecf] transition hover:text-white"
        style={{ textDecoration: "none" }}
      >
        <ArrowLeft size={22} strokeWidth={2} />
      </Link>

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-xl rounded-2xl bg-white/10 p-10 shadow-xl backdrop-blur-md">
          <h1
            className="mb-8 font-extrabold tracking-tight text-white"
            style={{
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Add a borrower
          </h1>

          <Form method="post" className="flex flex-col gap-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Name"
                name="name"
                type="text"
                placeholder="Enter full name"
                defaultValue={values.name}
                error={errors.name}
              />

              <Field
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                defaultValue={values.phone}
                error={errors.phone}
              />
            </div>

            <Field
              label="BVN"
              name="bvn"
              type="text"
              placeholder="Enter BVN"
              defaultValue={values.bvn}
              error={errors.bvn}
              maxLength={11}
            />

            {/* Submit — useNavigation().state drives the loading state */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mb-3 flex items-center justify-center gap-2 rounded-full py-3 text-[17px] font-bold text-white transition hover:opacity-90 active:scale-[0.98] disabled:opacity-70"
                style={{
                  backgroundColor: "#111d6b",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>

          {/* Bottom hint — Link instead of onClick button */}
          <p className="mt-16 text-center text-sm text-[#a0aecf]">
            Can't remember borrower's BVN?{" "}
            <Link
              to="/dashboard/borrowers"
              className="font-medium text-[#a0aecf] underline-offset-2 transition hover:text-white hover:underline"
              style={{
                textDecoration: "none",
                color: "#111d6b",
                borderRadius: "5px",
              }}
            >
              Search for Borrower
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Reusable field component ─────────────────────────────────────────────────
function Field({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  error,
  maxLength,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold" style={{ color: "#e6ac2c" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxLength}
        className="w-full rounded-2xl px-3 py-3 text-[15px] text-gray-700 placeholder-gray-400 transition outline-none focus:ring-2 focus:ring-emerald-400"
        style={{
          backgroundColor: "#f0f2f8",
          border: error ? "2px solid #f87171" : "2px solid transparent",
          borderRadius: "5px",
        }}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
