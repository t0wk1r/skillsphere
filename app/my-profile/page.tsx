"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?callbackUrl=/my-profile");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <img
            src={session.user.image || "https://i.pravatar.cc/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
          />

          <h1 className="text-3xl font-bold mt-4">
            {session.user.name || "No Name"}
          </h1>

          <p className="text-gray-500">{session.user.email}</p>

          <div className="mt-6">
            <Link href="/my-profile/update" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}