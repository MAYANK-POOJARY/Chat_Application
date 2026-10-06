import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin, register, handleSubmit, setError, clearErrors, errors, isSubmitting } = useAuth();
  
  const navigate = useNavigate();

  async function onSubmit(credentials) {
    clearErrors("root.server");
    try {
      await handleLogin(credentials);
      navigate("/chat");
    } catch (submitError) {
      setError(
        "root.server",
        {
          type: "server",
          message:
            submitError.response?.data?.message ??
            submitError.response?.data?.errors?.[0]?.msg ??
            "Unable to sign in. Please try again.",
        },
      );
    }
  }

  return (
    <div>
      <p className="mb-3.25 text-[11px] font-bold tracking-[1.2px] text-[#3b765d]">
        WELCOME BACK
      </p>
      <h2 className="m-0 font-[Manrope] text-[27px] leading-tight font-bold text-[#293a31] sm:text-[30px]">
        Sign in to Mingle
      </h2>
      <p className="mt-2.25 mb-7.5 text-sm leading-[1.6] text-[#77827c]">
        Pick up right where your conversations left off.
      </p>

      <form className="flex flex-col items-stretch" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label
          className="mb-2 text-[13px] font-semibold text-[#39483f]"
          htmlFor="login-email"
        >
          Email address
        </label>
        <div className="mb-5 flex min-h-12.5 items-center gap-2.75 rounded-[7px] border border-[#e3e9e4] bg-white px-3.5 text-[#8a978f] transition focus-within:border-[#6e9b7e] focus-within:shadow-[0_0_0_3px_rgba(75,128,101,0.1)]">
          <Mail size={18} aria-hidden="true" />
          <input
            className="w-full min-w-0 border-0 bg-transparent font-[DM_Sans] text-[13px] text-[#293a31] outline-none placeholder:text-[#a3ada6]"
            id="login-email"
            name="email"
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
        {errors.email && <p className="-mt-4 mb-4 text-xs text-[#b34436]" role="alert">{errors.email.message}</p>}

        <label
          className="mb-2 text-[13px] font-semibold text-[#39483f]"
          htmlFor="login-password"
        >
          Password
        </label>
        <div className="mb-5 flex min-h-12.5 items-center gap-2.75 rounded-[7px] border border-[#e3e9e4] bg-white px-3.5 text-[#8a978f] transition focus-within:border-[#6e9b7e] focus-within:shadow-[0_0_0_3px_rgba(75,128,101,0.1)]">
          <LockKeyhole size={18} aria-hidden="true" />
          <input
            className="w-full min-w-0 border-0 bg-transparent font-[DM_Sans] text-[13px] text-[#293a31] outline-none placeholder:text-[#a3ada6]"
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
            aria-invalid={Boolean(errors.password)}
            {...register("password", { required: "Password is required." })}
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
        {errors.password && <p className="-mt-4 mb-4 text-xs text-[#b34436]" role="alert">{errors.password.message}</p>}

        {errors.root?.server && (
          <p
            className="-mt-1.5 mb-3 text-xs leading-normal text-[#b34436]"
            role="alert"
          >
            {errors.root.server.message}
          </p>
        )}
        <button
          className="mt-1 flex min-h-12.75 items-center justify-between rounded-[7px] border-0 bg-[#3b765d] px-4.25 font-[DM_Sans] text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#2f654e] disabled:cursor-wait disabled:opacity-70 pl-5"
          type="submit"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Signing in..." : "Sign in"}</span>
          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6.25 text-center text-[13px] text-[#77827c]">
        New to Mingle?{" "}
        <Link
          className="font-bold text-[#3b765d] no-underline hover:underline hover:underline-offset-[3px]"
          to="/register"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
