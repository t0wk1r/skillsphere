"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50 rounded-3xl px-5 py-12 mb-12 text-center">
        <SectionTitle
          title="All Courses"
          subtitle="Search and explore all available SkillSphere courses"
        />

        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search course by title..."
              className="input input-bordered w-full rounded-2xl pl-12 h-14 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-3xl">
          <div className="text-5xl mb-4">🔎</div>
          <h3 className="text-2xl font-bold">No Course Found</h3>
          <p className="text-gray-500 mt-2">
            Try searching with another course title.
          </p>
        </div>
      )}
    </div>
  );
}