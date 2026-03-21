import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./signupSchema";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { authService } from "@/services/authService";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    try {
      const res = await authService.signup({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        gender: data.gender,
        phone_number: data.phone,
        password: data.password,
      });

      navigate("/check-email", {
        state: {
          email: data.email,
          link: res.data.link,
        },
      });
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <article className="signup-page">
      <section className="signup-container">
        <h2 className="signup-title">Create an account</h2>

        {/* Server error banner */}
        {serverError && <div className="error-banner">{serverError}</div>}

        <form
          className="signup-form"
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => {
            if (serverError) setServerError("");
          }}
          noValidate
        >
          {/* First Name */}
          <section className="field-group">
            <label htmlFor="firstName" className="field-label">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter first name"
              className={`field-input ${errors.firstName ? "field-input--error" : ""}`}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="field-error">{errors.firstName.message}</p>
            )}
          </section>

          {/* Last Name */}
          <section className="field-group">
            <label htmlFor="lastName" className="field-label">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              className={`field-input ${errors.lastName ? "field-input--error" : ""}`}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="field-error">{errors.lastName.message}</p>
            )}
          </section>

          {/* Work Email */}
          <section className="field-group field-group--full">
            <label htmlFor="workEmail" className="field-label">
              Work email
            </label>
            <input
              id="workEmail"
              type="email"
              placeholder="Enter work email"
              className={`field-input ${errors.email ? "field-input--error" : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <p className="field-error">{errors.email.message}</p>
            )}
          </section>

          {/* Gender */}
          <section className="field-group">
            <label htmlFor="gender" className="field-label">
              Gender
            </label>
            <select
              id="gender"
              className={`field-input field-select ${errors.gender ? "field-input--error" : ""}`}
              {...register("gender")}
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="field-error">{errors.gender.message}</p>
            )}
          </section>

          {/* Phone Number */}
          <section className="field-group">
            <label htmlFor="phone" className="field-label">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              className={`field-input ${errors.phone ? "field-input--error" : ""}`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="field-error">{errors.phone.message}</p>
            )}
          </section>

          {/* Password */}
          <section className="field-group">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <section className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                className={`field-input ${errors.password ? "field-input--error" : ""}`}
                {...register("password")}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((p) => !p)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </section>
            {errors.password && (
              <p className="field-error">{errors.password.message}</p>
            )}
          </section>

          {/* Confirm Password */}
          <section className="field-group">
            <label htmlFor="confirmPassword" className="field-label">
              Confirm password
            </label>
            <section className="password-wrapper">
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat your password"
                className={`field-input ${errors.confirmPassword ? "field-input--error" : ""}`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirm((p) => !p)}
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </section>
            {errors.confirmPassword && (
              <p className="field-error">{errors.confirmPassword.message}</p>
            )}
          </section>

          {/* Terms Checkbox */}
          <section className="field-group field-group--full">
            <label className="checkbox-label" htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                className="checkbox-input"
                {...register("terms")}
              />
              I agree to Terms of service
            </label>
            {errors.terms && (
              <p className="field-error">{errors.terms.message}</p>
            )}
          </section>

          {/* Submit */}
          <section className="field-group field-group--full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-create"
            >
              {isSubmitting && <Loader2 size={16} className="btn-spinner" />}
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
          </section>

          {/* Login redirect */}
          <section className="field-group field-group--full login-redirect">
            <span className="redirect-text">
              Already have an account?{" "}
              <Link to="/login" className="redirect-link">
                Sign in
              </Link>
            </span>
          </section>
        </form>
      </section>
    </article>
  );
}
