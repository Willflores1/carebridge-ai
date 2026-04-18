# CareBridge AI

CareBridge AI is a healthcare support web application designed to help users navigate the healthcare process with more confidence. The platform focuses on three core areas: appointment reminders, care navigation, and follow-up guidance. The goal is to make healthcare information feel more organized, accessible, and easier to act on.

## Project Overview

Many patients struggle with keeping track of appointments, understanding next steps after visits, and knowing where to go for the right type of care. CareBridge AI was created as a prototype business application to address that gap.

The application provides a clean healthcare-focused user experience and demonstrates how business needs, frontend design, backend logic, database integration, analytics, and email communication can work together in one system.

## Features

- Custom branded homepage and business pages
- About, Services, Features, FAQ, and Contact pages
- User authentication with sign up and sign in
- Welcome email integration
- Appointment reminder email demonstration
- Privacy Policy and Terms of Service pages
- Google Analytics 4 integration for user tracking
- Prisma database schema and database connectivity
- Docker support for local development
- GitHub Actions CI workflow for automated build checks

## Business Idea

CareBridge AI is intended to support patients who need help managing the healthcare journey. It is especially aimed at users who may feel overwhelmed by appointments, follow-up instructions, and care coordination.

### Problem
Healthcare systems can be confusing to navigate. Patients may forget appointments, miss important follow-up steps, or feel uncertain about where to go for care.

### Solution
CareBridge AI provides a digital support experience centered around reminders, navigation help, and follow-up guidance.

### Target Audience
- Patients managing multiple appointments
- Individuals who want clearer healthcare guidance
- Users who benefit from reminders and structured next steps

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Authentication:** NextAuth
- **Database ORM:** Prisma
- **Database Tools:** Prisma Schema, DBeaver
- **Email Integration:** Resend
- **Analytics:** Google Analytics 4
- **Containerization:** Docker, Docker Compose
- **CI:** GitHub Actions
- **Language:** TypeScript

## Project Structure

```bash
app/                # Pages and routes
components/         # Reusable UI components
prisma/             # Prisma schema and seed files
public/             # Static assets
scripts/            # Utility scripts
.github/workflows/  # GitHub Actions workflow
````

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Willflores1/carebridge-ai.git
cd carebridge-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root and configure the required values.

Example variables may include:

```env
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
RESEND_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GA_MEASUREMENT_ID=
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Docker

This project includes Docker support for local containerized development.

To start the application with Docker Compose:

```bash
docker-compose up --build
```

## GitHub Actions

A GitHub Actions CI workflow is included to automatically verify that the project installs and builds successfully on push and pull request.

## Key Demonstrated Components

This project was developed as a business application capstone and demonstrates:

* frontend customization and branding
* route-based navigation in Next.js
* authentication flow
* transactional email integration
* healthcare-oriented business framing
* analytics integration
* database modeling with Prisma
* Docker-based environment setup
* CI workflow setup with GitHub Actions

## AI Tools Used

AI tools were used during development to support both design and implementation.

* **Antigravity** was used to help generate and customize the site’s visual structure and branding direction
* **ChatGPT** was used for coding help, troubleshooting, and implementation support

AI was helpful for speeding up development and solving technical issues, but manual fixes were still needed to correct mistakes, refine content, and ensure the final project matched the intended business idea.

## Future Improvements

If developed further, CareBridge AI could be expanded with:

* personalized reminder scheduling tied to user accounts
* richer patient dashboards
* dynamic care recommendation flows
* provider search and filtering
* stronger production-ready email and notification workflows
* deeper analytics reporting

## Author

William Flores

Business Application of AI Capstone Project

````

## A couple small edits I’d also make
Since you already changed the package name, I’d also make sure the README does **not** mention:
- Capstone Project Manager
- sample credentials
- project/task/milestone management language
- any template wording from the starter

## Best next move
After replacing the README, commit it with something like:

```bash
git add README.md
git commit -m "Update README for CareBridge AI project"
git push
````
