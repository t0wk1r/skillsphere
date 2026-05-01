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
  <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50 rounded-3xl p-5 md:p-10">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[360px] object-cover rounded-3xl shadow-2xl"
        />

        <div className="absolute top-4 left-4 badge badge-primary px-4 py-3">
          {course.category}
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm font-semibold text-primary mb-4">
          ⭐ {course.rating} Rating
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          {course.title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {course.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Instructor</p>
            <p className="font-bold">{course.instructor}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-bold">{course.duration}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Level</p>
            <p className="font-bold">{course.level}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-bold">{course.category}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary rounded-full px-8">
            Enroll Now
          </button>

          <Link href="/courses" className="btn btn-outline rounded-full px-8">
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-16">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-black">Course Curriculum</h2>
      <p className="text-gray-500 mt-2">
        Follow this structured path to complete the course
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-4">
      {[
        "Introduction to the course",
        "Basic concepts and tools",
        "Practical project setup",
        "Advanced lessons",
        "Final project",
      ].map((lesson, index) => (
        <div
          key={index}
          className="group flex items-center justify-between gap-4 p-5 bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div>
              <p className="font-bold">Module {index + 1}</p>
              <p className="text-gray-500 text-sm">{lesson}</p>
            </div>
          </div>

          <span className="w-10 h-10 rounded-full bg-base-200 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition">
            ▶
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}