#  BrainWired – AI-Powered LMS SaaS Platform

Create a modern Learning Management System (LMS) from scratch with **[Next.js](https://nextjs.org/)**, **[Supabase](https://supabase.com/)**, **[Clerk](https://clerk.dev/)**. Empower users with **AI voice tutors**, subscription-based access, real-time learning sessions, and an interactive, scalable teaching experience.

---

## ⚙ Tech Stack

- **[Clerk](https://clerk.dev/)** – Simplifies authentication, user management, and billing in one platform. It offers plug-and-play UI components, APIs, and admin tools to handle subscriptions, pricing pages, and access control based on user plans.  
- **[Next.js](https://nextjs.org/)** – A React-based framework ideal for building full-stack web apps. It supports server-side rendering, static generation, and API routes for high-performance and scalable development.  
- **[Sentry](https://sentry.io/)** – Helps developers monitor app performance and fix issues faster by delivering live error tracking, detailed stack traces, and insightful performance metrics.  
- **[shadcn/ui](https://ui.shadcn.com/)** – A sleek, customizable UI component library built with Radix UI and Tailwind CSS, providing accessible, themeable components for fast and modern UI development.  
- **[Supabase](https://supabase.com/)** – An open-source backend with instant APIs, real-time features, secure authentication, storage, and a PostgreSQL database, simplifying scalable app development.  
- **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework that enables custom UI design using pre-defined classes directly in HTML, speeding up the styling process.  
- **[TypeScript](https://www.typescriptlang.org/)** – Enhances JavaScript with static typing, improving code quality, developer productivity, and catching errors early in large-scale applications.  
- **[Vapi](https://www.vapi.ai/)** – A voice AI tool for developers to create real-time conversational agents with features like speech-to-text, text-to-speech, multilingual support, and AI model integration.  
- **[Zod](https://zod.dev/)** – A lightweight schema validation library tailored for TypeScript, ensuring data correctness during development through easy-to-use validation rules.  

---

## 🔋 Features

- 👉 **AI Voice Tutors** – Learn with interactive AI-powered voice agents tailored to specific subjects and skills.  
- 👉 **Secure Authentication** – Enable sign-up/sign-in with Clerk, supporting Google and other social logins.  
- 👉 **Subscription & Billing** – Seamlessly manage user plans, upgrades, and payments.  
- 👉 **Bookmarks & History** – Users can save favorite tutors and revisit previous learning sessions.  
- 👉 **Reusable Codebase** – Built with modular components for efficient and maintainable development.  
- 👉 **Custom Tutor Creation** – Users can generate their own AI tutors by selecting topics, subjects, and communication styles.  
- 👉 **Responsive Design** – Fully optimized UI for smooth performance across desktops, tablets, and mobile devices.  
- 👉 **Real-Time Database** – Integrated with Supabase for live data syncing and secure storage.  
- 👉 **Polished UI/UX** – Crafted with Tailwind CSS and shadcn/ui for a modern and intuitive user interface.  
- 👉 **Scalable Framework** – Developed with Next.js for high performance and easy scalability.  
- 👉 **Advanced Search** – Quickly find relevant tutors using powerful filters and a smart search bar.  
- 👉 **Robust Architecture** – Designed for scalability, maintainability, and efficient code reuse.  

---

##  Quick Start

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

###  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Harshanand42917/BrainWired.git
cd BrainWired
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on: Supabase, Clerk, Sentry, Vapi.

### 4. Run the Development Server

```bash
npm run dev
```
Visit `http://localhost:3000` in your browser to view the app.

---
### Screenshot
![image](https://github.com/user-attachments/assets/174c3c10-2a36-420f-895c-439135cfbaed)





