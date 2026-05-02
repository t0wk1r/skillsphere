"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    if (!registering && !isPending && session?.user) {
      router.push("/");
    }
  }, [isPending, session, router, registering]);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRegistering(true);

    const res = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (res.error) {
      setRegistering(false);
      toast.error(res.error.message || "Registration failed");
      return;
    }

    await authClient.signOut();

    toast.success("Registration successful. Please login.");
    window.location.href = "/login";
  }

  async function handleGoogleLogin() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  if (isPending && !registering) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!registering && session?.user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Create Your <span className="text-primary">Account</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Start your learning journey today 🚀
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4 mt-6">
          <input
            type="text"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={registering}
          />

          <input
            type="email"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={registering}
          />

          <input
            type="url"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Profile Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            disabled={registering}
          />

          <input
            type="password"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={registering}
          />

          <button
            type="submit"
            disabled={registering}
            className="btn btn-primary w-full rounded-xl mt-2"
          >
            {registering ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="divider text-sm">OR</div>

        <button
          onClick={handleGoogleLogin}
          disabled={registering}
          className="btn w-full flex items-center gap-2 justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-100"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center mt-5 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}