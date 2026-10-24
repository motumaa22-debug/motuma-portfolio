# Motuma Abebe — Developer Portfolio Website

A clean, responsive, production-ready personal portfolio website for **Motuma Abebe**, a Computer Science student at Jimma Institute of Technology preparing for software development internships, junior software engineer roles, and AI application development.

---

## 🚀 Overview & Features

- **Modern Minimal UI/UX:** Dark navy theme with sky blue / amber accents, crisp typography, clean cards, and smooth scroll navigation.
- **Theme Persistence:** Dark / Light mode toggle saved to `localStorage` across visits.
- **Data-Driven Architecture:** All profile info, skills, and projects live in centralized data files (`src/data/`), making updates effortless.
- **Project Showcase with Categorization:** Filter projects by *All*, *In progress*, *Completed*, *Academic*, and *Internship experience*.
- **Accurate Presentation:** Clearly distinguishes student status, coursework, completed projects, and internship activities at Dangote Cement Ethiopia without exaggeration.
- **Zero-Backend Contact Workflow:** Built-in form validation with reliable `mailto:` fallback to send messages directly without requiring paid backends.
- **Accessible & SEO Ready:** Semantic HTML5, accessible icons, ARIA labels, Open Graph preview tags, and custom favicon.
- **100% Free Hosting Ready:** Optimized static build configured for instant zero-cost deployment on Vercel or Netlify.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Version Control:** Git & GitHub
- **Deployment:** Vercel / Netlify

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                # Browser favicon
│   ├── icons.svg                  # SVG icons bundle
│   └── resume/
│       ├── README.md              # Instructions for resume placement
│       └── Motuma_Resume.pdf      # Downloadable PDF resume
├── src/
│   ├── assets/                    # Static assets & images
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.jsx             # Sticky responsive navigation with mobile drawer
│   │   ├── Footer.jsx             # Site footer with dynamic year & quick links
│   │   ├── SectionHeading.jsx     # Consistent section headings with accents
│   │   ├── ProjectCard.jsx        # Project card with tags, GitHub & Demo links
│   │   ├── SkillGroup.jsx         # Categorized skill badges
│   │   └── ContactForm.jsx        # Client-validated contact form
│   ├── sections/                  # Single-page sections
│   │   ├── Hero.jsx               # Hero banner with code visual element
│   │   ├── About.jsx              # Personal story, goals, and core focus
│   │   ├── Skills.jsx             # Categorized technical abilities
│   │   ├── Projects.jsx           # Featured project grid with status filters
│   │   ├── Education.jsx          # Academic degree details (JiT)
│   │   ├── Experience.jsx         # Internship at Dangote Cement Ethiopia
│   │   └── Contact.jsx            # Contact details and interactive form
│   ├── data/                      # Centralized data files
│   │   ├── profile.js             # Personal details, links, institution, email
│   │   ├── projects.js            # Array of projects with stack & repos
│   │   └── skills.js              # Organized skill categories & proficiency
│   ├── App.jsx                    # Root component with theme state
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind styles and light/dark mode overrides
├── .env.example                   # Template for optional external form endpoints
├── .gitignore                     # Git ignore rules for node_modules & dist
├── index.html                     # HTML entry point with SEO & Open Graph meta
├── package.json                   # Dependencies and scripts
└── vite.config.js                 # Vite build configuration
```

---

## ⚙️ Prerequisites

- **Node.js:** version `18.0` or higher (recommended: LTS 20+)
- **npm:** version `9.0` or higher

Check your installation:
```powershell
node -v
npm -v
```

---

## 💻 Running Locally

### 1. Navigate to the project directory
```powershell
cd C:\Users\motuma\Downloads\portfolio
```

### 2. Install dependencies (if not already installed)
```powershell
npm install
```

### 3. Start the development server
```powershell
npm run dev
```

Open your browser at the displayed local URL (typically **`http://localhost:5173/`**).

---

## 📦 Building for Production

To create an optimized, minified production bundle:
```powershell
npm run build
```
The output files will be created in the `dist/` directory.

### Preview the production build locally:
```powershell
npm run preview
```
Visit the printed URL (typically **`http://localhost:4173/`**) to test the exact production build.

---

## ✏️ How to Personalize & Update Content

### 1. Update Profile Details
Open `src/data/profile.js`:
```javascript
export const profile = {
  name: 'Motuma Abebe',
  title: 'Computer Science Student | Aspiring Software Engineer',
  location: 'Ethiopia',
  github: 'https://github.com/motumaa22-debug',
  linkedin: 'https://www.linkedin.com/in/motuma-abeba-7308a0363',
  email: 'motumaa22@gmail.com',
  resumeUrl: '/resume/Motuma_Resume.pdf',
  institution: 'Jimma Institute of Technology',
  graduation: 'Expected Graduation: 2027',
};
```

### 2. Add or Edit Projects
Open `src/data/projects.js` and add an object to the `projects` array:
```javascript
{
  title: 'Your Project Title',
  description: 'Concise description of the system and its architecture.',
  technologies: ['React', 'PHP', 'MySQL'],
  status: 'Completed', // or 'In progress', 'Academic'
  github: 'https://github.com/motumaa22-debug/your-repo',
  demo: null, // or 'https://your-demo-url.com'
}
```

### 3. Replace the Resume PDF
Copy your updated PDF resume to:
```
public/resume/Motuma_Resume.pdf
```
Ensure the filename matches `Motuma_Resume.pdf` (or update `resumeUrl` in `src/data/profile.js`).

---

## 🌐 Deployment Guide (Free Hosting)

### Option A: Deploy on Vercel (Recommended)

1. **Push your code to GitHub:**
   ```powershell
   cd C:\Users\motuma\Downloads\portfolio
   git init
   git add .
   git commit -m "feat: complete production portfolio website"
   git branch -M main
   git remote add origin https://github.com/motumaa22-debug/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** → **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite** and sets:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your portfolio will be live on an `https://*.vercel.app` URL within 1 minute.

### Option B: Deploy on Netlify

1. Push your repository to GitHub (same as Step 1 above).
2. Go to [netlify.com](https://netlify.com) and log in.
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select GitHub and choose your `portfolio` repository.
5. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy Site**.

---

## 🔧 Troubleshooting Tips

- **"This site can't be reached / localhost refused to connect":**
  Ensure the development server is actively running in your terminal (`npm run dev`). If you closed the terminal or stopped the process, run `npm run dev` again and open the exact port shown (e.g. `http://localhost:5173/`).
- **Port Conflict (`Port 5173 is in use`):**
  Vite will automatically pick the next available port (e.g. `5174` or `5175`). Check the terminal output for the exact URL.
- **Styles not updating:**
  Hard-refresh your browser (`Ctrl + F5` or `Ctrl + Shift + R`) to clear browser cache.
