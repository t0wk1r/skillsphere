import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-black text-white">
            Skill<span className="text-primary">Sphere</span>
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed max-w-sm">
            Learn skills, grow your career, and build your future with industry
            experts.
          </p>

          <div className="mt-5 text-sm text-slate-400 space-y-2">
            <p>📧 support@skillsphere.com</p>
            <p>📞 +880 1234 567890</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-primary transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:text-primary transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>

          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
  <Link
    href="#"
    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition flex items-center justify-center"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </Link>

  <Link
    href="#"
    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition flex items-center justify-center"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </Link>

  <Link
    href="#"
    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition flex items-center justify-center"
    aria-label="YouTube"
  >
    <FaYoutube />
  </Link>
</div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}