# ✨ ProductPulse

**ProductPulse** is a beautifully designed, high-performance React application that lets users discover and search through a curated list of products seamlessly. Built with modern web development practices, it features a glassmorphic UI, fluid animations, and highly optimized search functionality.

---

## 🚀 Features

- **Premium UI/UX:** A stunning interface featuring glassmorphism, completely custom CSS mesh gradients, and smooth micro-animations.
- **Lightning-Fast Search:** Highly optimized client-side searching utilizing React's `useMemo` to ensure lag-free typing and immediate result filtering.
- **Performance Optimized:** Includes lazy loading for images and highly efficient mapping mechanisms to render product cards without impacting DOM performance.
- **Responsive Design:** A fully fluid and adaptive grid system that scales elegantly from mobile to desktop screens.
- **Robust Error Handling:** Beautiful integrated loading states and intuitive error-recovery mechanisms.
- **Powered by FakeStore API:** Fetches real-time, random product data to demonstrate robust asynchronous state management.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** Custom Modern Vanilla CSS Variables & System Tokens (Zero-CSS frameworks!)
- **Data Fetching:** [Axios](https://axios-http.com/)

---

## 📦 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository (or extract the project):**
   ```bash
   git clone https://github.com/your-username/ProductPulse.git
   cd ProductPulse
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173/` in your browser.

---

## 📝 Project Architecture

```
ProductPulse/
├── src/
│   ├── components/         # Modular UI Components (Header, ItemCard, SearchBar, etc.)
│   ├── App.jsx             # Main Application Logic & State Management
│   ├── main.jsx            # Application Entry Point
│   └── index.css           # Core Design System, Variables & Global Styles
├── package.json            # Dependencies & Scripts
└── vite.config.js          # Vite Configuration
```

---

## 🎨 Design System Highlights

ProductPulse was explicitly engineered omitting utility-heavy frameworks like Tailwind in favor of a strictly semantic, modular Vanilla CSS foundation:

- **Tokens:** Centralized CSS Variables for branding (`:root`).
- **Dynamic Backgrounds:** Drifting CSS Mesh Gradients.
- **Glassmorphism:** Leverages `backdrop-filter: blur(10px)` consistently across containers.

---

## ⚙️ Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Creates an optimized production build.
- `npm run preview` - Previews the locally built production bundle.
- `npm run lint` - Runs ESLint to check for code issues.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
