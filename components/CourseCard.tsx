import Link from "next/link";

type Course = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  level: string;
  description: string;
  image: string;
  category: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group bg-base-100 rounded-3xl overflow-hidden border border-base-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">
  <figure className="relative overflow-hidden">
    <img
      src={course.image}
      alt={course.title}
      className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute top-4 left-4 badge badge-primary px-4 py-3">
      {course.category}
    </div>
  </figure>

  <div className="p-6">
    <h2 className="text-xl font-black leading-snug group-hover:text-primary transition">
      {course.title}
    </h2>

    <p className="text-sm text-gray-500 mt-3">
      Instructor: <span className="font-semibold">{course.instructor}</span>
    </p>

    <div className="flex items-center justify-between mt-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">⭐ {course.rating}</span>
        <span className="text-xs text-gray-500">{course.level}</span>
      </div>

      <Link
        href={`/courses/${course.id}`}
        className="btn btn-primary btn-sm rounded-full px-5"
      >
        View Details
      </Link>
    </div>
  </div>
</div>
  );
}