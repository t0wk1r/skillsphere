"use client";

import { courses } from "@/data/courses";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CourseDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, isPending } = authClient.useSession();

  const id = params.id as string;
  const course = courses.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?callbackUrl=/courses/${id}`);
    }
  }, [isPending, session, router, id]);

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

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl font-bold">Course Not Found</h1>
        <Link href="/courses" className="btn btn-primary mt-6">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[350px] object-cover rounded-2xl shadow"
        />

        <div>
          <div className="badge badge-primary mb-4">{course.category}</div>

          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

          <p className="text-gray-600 mb-4">{course.description}</p>

          <div className="space-y-2 mb-6">
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Rating:</strong> ⭐ {course.rating}</p>
            <p><strong>Level:</strong> {course.level}</p>
          </div>

          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>

        <div className="space-y-3">
          {[
            "Introduction to the course",
            "Basic concepts and tools",
            "Practical project setup",
            "Advanced lessons",
            "Final project",
          ].map((lesson, index) => (
            <div
              key={index}
              className="p-4 bg-base-200 rounded-xl flex justify-between"
            >
              <span>
                Module {index + 1}: {lesson}
              </span>
              <span>▶</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link href="/courses" className="btn btn-outline">
          Back to Courses
        </Link>
      </div>
    </div>
  );
}