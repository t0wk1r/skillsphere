# 🎓 SkillSphere – Online Learning Platform

## 🚀 Live URL
👉 https://skillsphere-psi.vercel.app/

---

## 📌 Project Overview

**SkillSphere** is a modern online learning platform where users can explore courses, view details, and enroll in skill-based programs like Web Development, Design, and Marketing.

This project is built using **Next.js App Router**, with authentication, protected routes, and a clean responsive UI.

---

## ✨ Key Features

- 🔐 Authentication (Email/Password + Google Login)
- 👤 User Profile with update functionality
- 🔒 Protected Course Details Page
- 🔎 Search Courses by Title
- 📚 Course Listing from JSON Data
- 🎯 Trending Courses Section
- 🧑‍🏫 Top Instructors Section
- 🎥 Hero Section
- 📱 Fully Responsive Design (Mobile + Tablet + Desktop)
- ⚡ Clean UI using Tailwind CSS + DaisyUI
- 🔔 Toast Notifications (Sonner)
- 🌀 Loading State
- ❌ Custom Not Found Page

---

## 🧩 Pages & Routes

| Page | Route |
|------|------|
| Home | `/` |
| All Courses | `/courses` |
| Course Details (Protected) | `/courses/[id]` |
| Login | `/login` |
| Register | `/register` |
| My Profile | `/my-profile` |
| Update Profile | `/my-profile/update` |

---

## 🔐 Authentication

- Email & Password Login
- Google Social Login
- Session-based authentication using **BetterAuth**
- Redirect after login to intended page

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- DaisyUI
- BetterAuth
- MongoDB Atlas
- Motion / Framer Motion
- Swiper JS
- Sonner (Toast)

---

## 📦 NPM Packages Used

```bash
better-auth
mongodb
react-icons
sonner
swiper
motion