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
      <SectionTitle
        title="All Courses"
        subtitle="Search and explore all available SkillSphere courses"
      />

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search course by title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold">No Course Found</h3>
          <p className="text-gray-500 mt-2">
            Try searching with another course title.
          </p>
        </div>
      )}
    </div>
  );
}