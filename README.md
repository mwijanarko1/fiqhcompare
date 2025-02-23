# FiqhCompare

FiqhCompare is a reference-based educational website designed to educate Muslims about comparative fiqh across the four major Islamic schools of thought: Hanafi, Maliki, Shafi'i, and Hanbali. The website focuses on topics related to worship (e.g., purification, prayer, fasting, zakat, hajj) and provides side-by-side comparisons of rulings in both English and Arabic.

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## About the Project

FiqhCompare aims to simplify the study of comparative fiqh by presenting rulings in a clear, structured, and accessible format. The website includes:

- Side-by-side comparison tables for rulings across madhhabs.
- Bilingual support (English and Arabic).
- An admin panel for content management.
- Search functionality with filters for topics and madhhabs.
- References to classical texts and authoritative sources.

The design reflects Islamic aesthetics, incorporating geometric patterns, calligraphy, and a calming color palette inspired by Islamic art.

---

## Features

### Public Website
- **Homepage:** Overview of the website’s purpose and navigation menu.
- **Topics Page:** Organized by main categories (e.g., Purification, Prayer) and subcategories (e.g., Obligatory Acts, Nullifiers).
- **Side-by-Side Comparisons:** Responsive tables comparing rulings for each madhhab.
- **Bilingual Support:** Toggle button to switch between English and Arabic.
- **Search Functionality:** Search bar with filters for topics and madhhabs.
- **References Section:** Dedicated page listing all sources used.

### Admin Panel
- Secure login using Firebase Authentication.
- Dashboard for managing content (topics, subtopics, rulings, references).
- Forms for adding/editing content with preview functionality.
- Version control to track changes and roll back if needed.
- Media manager for uploading and linking files (e.g., PDFs, images).

---

## Technologies Used

- **Frontend:** Next.js (React framework) for server-side rendering and static site generation.
- **Backend:** Firebase Firestore for database and Firebase Authentication for user management.
- **Styling:** Tailwind CSS for responsive and modern styling.
- **Hosting:** Vercel for deployment.
- **Other Tools:**
  - React Hook Form for form handling.
  - Material-UI or Chakra UI for pre-built admin dashboard components.
  - Firebase Storage for media uploads.

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account with Firestore and Authentication enabled
- Vercel account for deployment

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/fiqhcompare.git
   cd fiqhcompare