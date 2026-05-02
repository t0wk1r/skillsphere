import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
            <Search size={18} />
            Page not found
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-slate-900 leading-none">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-black mt-6 text-slate-900">
            Sorry, we couldn’t find this page.
          </h2>

          <p className="text-slate-500 mt-4 text-lg leading-relaxed">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn btn-primary rounded-full px-8">
              <ArrowLeft size={18} />
              Back Home
            </Link>

            <Link href="/courses" className="btn btn-outline rounded-full px-8">
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-8">
          <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-indigo-100 via-pink-100 to-cyan-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🎓</div>
              <p className="text-2xl font-black text-slate-900">
                Lost in learning?
              </p>
              <p className="text-slate-500 mt-2">
                Let’s get you back on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}