import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/courses";
import { instructors } from "@/data/instructors";
import AnimatedSection from "@/components/AnimatedSection";
import { Clock, Wrench, NotebookPen } from "lucide-react";

export default function HomePage() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = courses.slice(0, 3);



  return (
    <div>
      <AnimatedSection>
        <section className="relative overflow-hidden px-4 py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-sm text-primary font-semibold mb-5">
                🎓 Online Learning Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
                Upgrade Your Skills
                <span className="block text-primary">Today</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn from industry experts and enroll in skill-based courses like Web
                Development, Design, Marketing, and more.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/courses" className="btn btn-primary rounded-full px-8">
                  Explore Courses
                </Link>

                <Link href="/register" className="btn btn-outline rounded-full px-8 bg-white">
                  Join Now
                </Link>
              </div>

              <div className="mt-8 flex gap-6 text-sm text-slate-600">
                <div>
                  <p className="text-2xl font-black text-slate-900">6+</p>
                  <p>Courses</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">4.8</p>
                  <p>Avg Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">1K+</p>
                  <p>Learners</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/60 rounded-[2rem] rotate-3"></div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop"
                alt="Online Learning"
                className="relative w-full h-[380px] md:h-[450px] object-cover rounded-[2rem] shadow-2xl"
              />

              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4">
                <p className="font-bold text-slate-900">Learn from experts</p>
                <p className="text-sm text-slate-500">Anytime, anywhere</p>
              </div>
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
                <Clock size={28} />
              </div>
              <h3 className="font-black text-xl">Time Management</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Study every day at a fixed time to build consistency and avoid last-minute pressure.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-7 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition">
                <Wrench size={28} />
              </div>
              <h3 className="font-black text-xl">Practice Projects</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Build real projects after each lesson to improve faster and gain practical experience.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-7 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition">
                <NotebookPen size={28} />
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