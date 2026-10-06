import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleRegister,
    register,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    isSubmitting,
  } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(formValues) {
    clearErrors("root.server");
    try {
      await handleRegister(formValues);
      navigate("/chat");
    } catch (submitError) {
      setError("root.server", {
        type: "server",
        message:
          submitError.response?.data?.message ??
          submitError.response?.data?.errors?.[0]?.msg ??
          "Unable to create your account. Please try again.",
      });
    }
  }

  return (
    <div>
      <p className="mb-3.25 text-[11px] font-bold tracking-[1.2px] text-[#3b765d]">
        MAKE YOURSELF AT HOME
      </p>
      <h2 className="m-0 font-[Manrope] text-[27px] leading-tight font-bold text-[#293a31] sm:text-[30px]">
        Create your account
      </h2>
      <p className="mt-2.25 mb-7.5 text-sm leading-[1.6] text-[#77827c]">
        A little more connected starts right here.
      </p>

      <form
        className="flex flex-col items-stretch"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label
          className="mb-2 text-[13px] font-semibold text-[#39483f]"
          htmlFor="register-full-name"
        >
          Full name
        </label>
        <div className="mb-5 flex min-h-12.5 items-center gap-2.75 rounded-[7px] border border-[#e3e9e4] bg-white px-3.5 text-[#8a978f] transition focus-within:border-[#6e9b7e] focus-within:shadow-[0_0_0_3px_rgba(75,128,101,0.1)]">
          <UserRound size={18} aria-hidden="true" />
          <input
            className="w-full min-w-0 border-0 bg-transparent font-[DM_Sans] text-[13px] text-[#293a31] outline-none placeholder:text-[#a3ada6]"
            id="register-full-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters.",
              },
            })}
          />
        </div>
        {errors.fullName && (
          <p className="-mt-4 mb-4 text-xs text-[#b34436]" role="alert">
            {errors.fullName.message}
          </p>
        )}

        <label
          className="mb-2 text-[13px] font-semibold text-[#39483f]"
          htmlFor="register-email"
        >
          Email address
        </label>
        <div className="mb-5 flex min-h-12.5 items-center gap-2.75 rounded-[7px] border border-[#e3e9e4] bg-white px-3.5 text-[#8a978f] transition focus-within:border-[#6e9b7e] focus-within:shadow-[0_0_0_3px_rgba(75,128,101,0.1)]">
          <Mail size={18} aria-hidden="true" />
          <input
            className="w-full min-w-0 border-0 bg-transparent font-[DM_Sans] text-[13px] text-[#293a31] outline-none placeholder:text-[#a3ada6]"
            id="register-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: "Email address is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="-mt-4 mb-4 text-xs text-[#b34436]" role="alert">
            {errors.email.message}
          </p>
        )}

        <label
          className="mb-2 text-[13px] font-semibold text-[#39483f]"
          htmlFor="register-password"
        >
          Password
        </label>
        <div className="mb-5 flex min-h-12.5 items-center gap-2.75 rounded-[7px] border border-[#e3e9e4] bg-white px-3.5 text-[#8a978f] transition focus-within:border-[#6e9b7e] focus-within:shadow-[0_0_0_3px_rgba(75,128,101,0.1)]">
          <LockKeyhole size={18} aria-hidden="true" />
          <input
            className="w-full min-w-0 border-0 bg-transparent font-[DM_Sans] text-[13px] text-[#293a31] outline-none placeholder:text-[#a3ada6]"
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 6 characters"
            autoComplete="new-password"
            aria-invalid={Boolean(errors.password)}
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          <button
            className="grid size-8 shrink-0 place-items-center border-0 bg-transparent text-[#89958d]"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="-mt-4 mb-4 text-xs text-[#b34436]" role="alert">
            {errors.password.message}
          </p>
        )}

        {errors.root?.server && (
          <p
            className="-mt-1.5 mb-3 text-xs leading-normal text-[#b34436]"
            role="alert"
          >
            {errors.root.server.message}
          </p>
        )}
        <button
          className="mt-1 flex min-h-12.75 items-center justify-between rounded-[7px] border-0 bg-[#3b765d] px-4.25 font-[DM_Sans] text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#2f654e] disabled:cursor-wait disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Creating account..." : "Create account"}</span>
          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6.25 text-center text-[13px] text-[#77827c]">
        Already have an account?{" "}
        <Link
          className="font-bold text-[#3b765d] no-underline hover:underline hover:underline-offset-[3px]"
          to="/"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
