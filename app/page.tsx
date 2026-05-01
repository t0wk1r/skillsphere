import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/courses";
import { instructors } from "@/data/instructors";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = courses.slice(0, 3);



  return (
    <div>
      <AnimatedSection>
        <section className="hero-gradient py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge badge-primary mb-4">
                Online Learning Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Upgrade Your Skills Today 🚀
              </h1>

              <p className="py-6 text-gray-600">
                Learn from industry experts and enroll in skill-based courses like
                Web Development, Design, Marketing, and more.
              </p>

              <Link href="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop"
                alt="Online Learning"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <SectionTitle
            title="Popular Courses"
            subtitle="Top 3 highest-rated courses for you"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-base-200 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Trending Courses"
              subtitle="Courses students are exploring right now"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {trendingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>


      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <SectionTitle
            title="Learning Tips"
            subtitle="Study smarter, not harder"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-base-100 rounded-3xl p-7 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition">
                ⏰
              </div>
              <h3 className="font-black text-xl">Time Management</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Study every day at a fixed time to build consistency and avoid last-minute pressure.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-7 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition">
                🛠️
              </div>
              <h3 className="font-black text-xl">Practice Projects</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Build real projects after each lesson to improve faster and gain practical experience.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-7 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition">
                📝
              </div>
              <h3 className="font-black text-xl">Study Techniques</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Take notes, revise concepts regularly, and explain topics in your own words.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>


      <AnimatedSection>
        <section className="bg-base-200 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Top Instructors"
              subtitle="Learn from experienced industry professionals"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="card bg-base-100 shadow-xl text-center p-6 hover:-translate-y-1 transition"
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border"
                  />

                  <h3 className="text-xl font-bold mt-4">{instructor.name}</h3>
                  <p className="text-gray-500">{instructor.skill}</p>
                  <p className="text-sm mt-2 text-primary font-semibold">
                    {instructor.students}+ Students
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}