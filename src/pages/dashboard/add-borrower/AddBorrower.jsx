import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { addBorrowerSchema } from "./addBorrowerSchema";
import { Field, FieldInput } from "./fieldComponents";
import { authService } from "@/services/authService";

// Main component
export default function AddBorrower() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addBorrowerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      bvn: "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    try {
      const res = await authService.addBorrower(data);
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  // Success screen
  if (success) {
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
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Add Another
            </button>
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

      {/* Back arrow */}
      <Link
        to="/dashboard"
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

          {/* Server error */}
          {serverError && (
            <div className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            noValidate
          >
            {/* First name + Last name */}
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First name" error={errors.first_name?.message}>
                <FieldInput
                  type="text"
                  placeholder="Enter first name"
                  error={errors.first_name?.message}
                  {...register("first_name")}
                />
              </Field>

              <Field label="Last name" error={errors.last_name?.message}>
                <FieldInput
                  type="text"
                  placeholder="Enter last name"
                  error={errors.last_name?.message}
                  {...register("last_name")}
                />
              </Field>
            </div>

            {/* Phone number */}
            <Field label="Phone number" error={errors.phone_no?.message}>
              <FieldInput
                type="tel"
                placeholder="Enter phone number"
                error={errors.phone_no?.message}
                {...register("phone_no")}
              />
            </Field>

            {/* BVN */}
            <Field label="BVN" error={errors.bvn?.message}>
              <FieldInput
                type="text"
                placeholder="Enter 11-digit BVN"
                maxLength={11}
                error={errors.bvn?.message}
                {...register("bvn")}
              />
            </Field>

            {/* Submit */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mb-3 flex w-full items-center justify-center gap-2 py-3 text-[17px] font-bold text-white transition hover:opacity-90 active:scale-[0.98] disabled:opacity-70"
                style={{
                  backgroundColor: "#111d6b",
                  borderRadius: "5px",
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
          </form>

          {/* Bottom hint */}
          <p className="mt-16 text-center text-sm text-[#a0aecf]">
            Can't remember borrower's BVN?{" "}
            <Link
              to="/dashboard/borrowers"
              className="font-medium transition hover:underline"
              style={{
                textDecoration: "none",
                color: "#e6ac2c",
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
