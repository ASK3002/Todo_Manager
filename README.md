
```markdown
# 📝 Todo Manager App

A simple, efficient, and clean React Todo application with:

- ✅ Add, Edit, Delete, Mark as Completed
- 📊 Live Efficiency Tracking (e.g., 2 / 4 tasks completed)
- 💾 Persistent storage with `localStorage`
- 🌙 Dark mode compatible (via Tailwind's `class` strategy)

---

## 📸 Demo

![Todo Manager Screenshot](screenshot.png) <!-- Replace with actual screenshot path -->

---

## 🚀 Features

- 📌 Add new todos via a form
- ✏️ Edit todos inline with toggle
- 🗑️ Delete any todo
- ✅ Mark todo as completed
- 📈 See live task efficiency (completed / total + %)
- 🌙 Dark mode ready
- 💾 Data persistence using localStorage
- ⚡ Instant UI updates with React Hooks
- 🔄 Clean imports via `index.js` (barrel files)

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **Tailwind CSS**
- **Context API**
- **localStorage**
- **Vite** (for fast dev)

---

## 📂 Folder Structure

```

📁 src
├── 📁 components
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── index.js         ← exports all components
├── 📁 contexts
│   ├── TodoContext.jsx
│   └── index.js         ← exports context/provider
├── App.jsx
├── App.css
├── main.jsx
└── index.html

````

✅ This allows clean imports like:

```js
import { TodoForm, TodoItem } from './components';
import { TodoProvider } from './contexts';
````

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/todo-manager-react.git
cd todo-manager-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## ✨ Example

> Write a todo → press **Enter** or click **Add**
> Click ✏️ to edit, 📁 to save
> Check ✅ to mark done
> Watch the efficiency meter update below

---

## 🔧 Enhancements Ideas

* [ ] Add task categories (Work, Study, Home)
* [ ] Add theme toggle (light/dark)
* [ ] Sync with Firebase for cross-device storage
* [ ] Add animations (Framer Motion)

---

## 🧑‍🎓 Author

Made with ❤️ by [Ayush Singh Kaushik](https://ayushkaushik.dev)

---

## 📄 License

MIT License © 2025 Ayush Singh Kaushik

```

---

✅ You can now paste this directly into your project as `README.md`. Let me know if you'd like:
- Shields/badges for GitHub, Netlify, etc.
- A `.gif` demo section
- Deployment guide (Vercel/Netlify)

I'm happy to help polish it even further!
```
