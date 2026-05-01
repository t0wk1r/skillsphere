"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    setOpen(false);
    router.push("/login");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-300">
      <div className="max-w-7xl mx-auto navbar px-4">
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-bold shadow">
              S
            </div>
            <span className="text-2xl font-black tracking-tight">
              Skill<span className="text-primary">Sphere</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 bg-base-200/70 rounded-full px-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "bg-primary text-primary-content rounded-full font-semibold"
                      : "rounded-full font-medium"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex gap-3">
          {session?.user ? (
            <>
              <div className="flex items-center gap-2 bg-base-200 rounded-full px-3 py-1">
                <img
                  src={session.user.image || "https://i.pravatar.cc/80"}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="text-sm font-semibold max-w-28 truncate">
                  {session.user.name || "User"}
                </span>
              </div>

              <button onClick={handleLogout} className="btn btn-error btn-sm text-white rounded-full">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm rounded-full">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm rounded-full">
                Register
              </Link>
            </>
          )}
        </div>

        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-4 pb-4">
          <div className="max-w-7xl mx-auto bg-base-100 border border-base-300 shadow-xl rounded-3xl p-4">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-2xl font-semibold ${
                    pathname === link.href
                      ? "bg-primary text-primary-content"
                      : "bg-base-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="divider my-3"></div>

            {session?.user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-base-200 rounded-2xl p-3">
                  <img
                    src={session.user.image || "https://i.pravatar.cc/80"}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{session.user.name || "User"}</p>
                    <p className="text-sm text-gray-500">{session.user.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="btn btn-error text-white w-full rounded-2xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="btn btn-outline rounded-2xl"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary rounded-2xl"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}