#  BrainWired – AI-Powered LMS SaaS Platform

Create a modern Learning Management System (LMS) from scratch with **Next.js**, **Supabase**, **Stripe**, and **Clerk**. Empower users with **AI voice tutors**, subscription-based access, real-time learning sessions, and an interactive, scalable teaching experience.

## ⚙️ Tech Stack

* **Clerk** simplifies authentication, user management, and billing in one platform. It offers plug-and-play UI components, APIs, and admin tools to handle subscriptions, pricing pages, and access control based on user plans.
* **Next.js** is a React-based framework ideal for building full-stack web apps. It supports server-side rendering, static generation, and API routes for high-performance and scalable development.
* **Sentry** helps developers monitor app performance and fix issues faster by delivering live error tracking, detailed stack traces, and insightful performance metrics.
* **shadcn/ui** is a sleek, customizable UI component library built with Radix UI and Tailwind CSS, providing accessible, themeable components for fast and modern UI development.
* **Supabase** offers an open-source backend with instant APIs, real-time features, secure authentication, storage, and a PostgreSQL database, simplifying scalable app development.
* **Tailwind CSS** is a utility-first CSS framework that enables custom UI design using pre-defined classes directly in HTML, speeding up the styling process.
* **TypeScript** enhances JavaScript with static typing, improving code quality, developer productivity, and catching errors early in large-scale applications.
* **Vapi** is a voice AI tool for developers to create real-time conversational agents with features like speech-to-text, text-to-speech, multilingual support, and AI model integration.
* **Zod** is a lightweight schema validation library tailored for TypeScript, ensuring data correctness during development through easy-to-use validation rules.


## 🔋 Features

👉 AI Voice Tutors – Learn with interactive AI-powered voice agents tailored to specific subjects and skills.
👉 Secure Authentication – Enable sign-up/sign-in with Clerk, supporting Google and other social logins.
👉 Subscription & Billing – Seamlessly manage user plans, upgrades, and payments.
👉 Bookmarks & History – Users can save favorite tutors and revisit previous learning sessions.
👉 Reusable Codebase – Built with modular components for efficient and maintainable development.
👉 Custom Tutor Creation – Users can generate their own AI tutors by selecting topics, subjects, and communication styles.
👉 Responsive Design – Fully optimized UI for smooth performance across desktops, tablets, and mobile devices.
👉 Real-Time Database – Integrated with Supabase for live data syncing and secure storage.
👉 Polished UI/UX – Crafted with Tailwind CSS and shadcn/ui for a modern and intuitive user interface.
👉 Scalable Framework – Developed with Next.js for high performance and easy scalability.
👉 Advanced Search – Quickly find relevant tutors using powerful filters and a smart search bar.
👉 Robust Architecture – Designed for scalability, maintainability, and efficient code reuse.

---

## Quick Start

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/adrianhajdin/saas-app.git
cd saas-app

# Install dependencies
npm install
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

SENTRY_DSN=your_sentry_dsn

NEXT_PUBLIC_VAPI_KEY=your_vapi_key
