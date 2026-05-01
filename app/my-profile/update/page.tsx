"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending, refetch } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?callbackUrl=/my-profile/update");
    }

    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [isPending, session, router]);

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (res.error) {
      toast.error(res.error.message || "Profile update failed");
      return;
    }

    await refetch();
    toast.success("Profile updated successfully");
    router.push("/my-profile");
  }

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
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Update Profile</h1>

          <form onSubmit={handleUpdate} className="space-y-4 mt-6">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter new name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">Image URL</label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="Enter new image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            {image && (
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="Preview"
                  className="w-24 h-24 rounded-full object-cover border"
                />
              </div>
            )}

            <button disabled={loading} type="submit" className="btn btn-primary w-full">
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}