import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary mt-6">
        Back Home
      </Link>
    </div>
  );
}