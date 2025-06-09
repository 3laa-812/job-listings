# 💼 Job Listings with Filterable Categories

A responsive job board built with **React** that displays job postings and allows filtering by role, level, languages, and tools. Inspired by frontend challenges and built to showcase clean UI and dynamic filtering logic.

🌐 Live Demo: *Coming Soon*  
📦 GitHub Repo: [https://github.com/3laa-812/job-listings](https://github.com/3laa-812/job-listings)

---

## 🚀 Features

- ✅ Dynamic job card rendering from local JSON
- 🎯 Filter by **Role**, **Level**, **Languages**, and **Tools**
- 🖱️ Click tags to add filters
- ❌ Remove individual filters or clear all
- 📱 Responsive layout (mobile-friendly)
- 🎨 Styled with **Tailwind CSS**

---

## 🛠️ Tech Stack

| Tool          | Purpose                        |
|---------------|--------------------------------|
| React         | Front-end framework            |
| Tailwind CSS  | Utility-first CSS styling      |
| Vite / CRA    | Fast development environment   |
| JSON          | Static local data for jobs     |

---

## 📂 Project Structure
```
job-listings/
├── public/
│ └── images/ # Company logos
├── src/
│ ├── assets/ # Static assets (e.g. SVGs)
│ ├── components/ # Reusable UI components
│ │ ├── FilterBar.tsx
│ │ ├── Header.tsx
│ │ └── JobCard.tsx
│ ├── pages/ # Page views
│ │ └── Home.tsx
│ ├── data.json # Static job data
│ ├── types.ts # TypeScript interfaces
│ ├── App.tsx # Main app wrapper
│ ├── App.css # Global styles
│ └── main.tsx # Entry point
├── index.html
└── README.md
```
---

## 🛠️ Tech Stack

| Tool / Library   | Description                    |
|------------------|--------------------------------|
| React            | JavaScript UI library          |
| Tailwind CSS     | Utility-first CSS framework    |
| Vite / CRA       | (Depends on setup) Dev server  |
| JSON             | Local data source for listings |

---

## 🧩 How Filtering Works

- Each job contains:
  - Role (e.g. `Frontend`)
  - Level (e.g. `Junior`)
  - Languages (e.g. `JavaScript`)
  - Tools (e.g. `React`, `Sass`)
- Clicking any tag adds it to the active filter list.
- Jobs are displayed only if **they match all selected filters**.
- "Clear All" button resets the filter state.
---

## 👤 Author
Made with ❤️ by 3laa
