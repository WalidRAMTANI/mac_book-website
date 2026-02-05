# 💻 MacBook Pro Showcase

![Banner](./public/banner.png)

A premium, high-performance product landing page inspired by Apple's iconic design language. This project showcases the MacBook Pro (M4) using cutting-edge web technologies including **React**, **Three.js** (for 3D rendering), and **GSAP** (for cinematic animations).

## ✨ Key Features

- **3D Product Viewer**: Interactive 3D model of the MacBook Pro using `@react-three/fiber` and `@react-three/drei`.
- **Cinematic Animations**: Smooth, scroll-triggered transitions and effects powered by **GSAP** and **ScrollTrigger**.
- **Dynamic Showcase**: Video-masked sections and immersive high-resolution graphics.
- **Performance Optimized**: Built with **Vite** for lightning-fast development and optimized production builds.
- **Responsive Design**: Fully adaptive layout for mobile, tablet, and desktop using **Tailwind CSS**.
- **Apple Aesthetics**: Sophisticated typography, glassmorphism, and a minimalist dark theme.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) with [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Animation**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WalidRAMTANI/mac_book-website.git
   cd mac_book-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
├── components/         # React components (Hero, Showcase, 3D Models)
│   ├── model/          # 3D Model logic and assets
│   └── three/          # Custom Three.js hooks/helpers
├── constants/          # Static data and configuration
├── public/             # Static assets (3D models, videos, images)
├── src/
│   ├── App.jsx         # Main application entry point
│   ├── index.css       # Global styles and Tailwind directives
│   └── main.jsx        # React DOM initialization
├── store/              # Zustand state stores
└── vite.config.js      # Vite configuration
```

## 📜 License

This project is for educational purposes. All product designs and trademarks are property of Apple Inc.

---

Built with ❤️ by [Walid RAMTANI](https://github.com/WalidRAMTANI)
