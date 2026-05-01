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
    <div className="card bg-base-100 shadow-xl hover:-translate-y-1 transition">
      <figure>
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="badge badge-primary">{course.category}</div>
        <h2 className="card-title">{course.title}</h2>
        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
        <p className="text-sm">⭐ {course.rating} | {course.level}</p>

        <div className="card-actions justify-end">
          <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}