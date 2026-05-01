"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const { data: session, isPending } = authClient.useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isPending && session?.user) {
      router.push("/");
    }
  }, [isPending, session, router]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await authClient.signIn.email({
      email,
      password,
    });

    if (res.error) {
      toast.error(res.error.message || "Login failed");
      return;
    }

    toast.success("Login successful 🎉");
    router.push(callbackUrl);
  }

  async function handleGoogleLogin() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  }

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (session?.user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Welcome Back 👋
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to continue your learning journey
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <input
            type="email"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-primary w-full rounded-xl mt-2">
            Login
          </button>
        </form>

        <div className="divider text-sm">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center gap-2 justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-100"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center mt-5 text-sm text-gray-500">
          New here?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}