# 🛍️ Product Listing Page (Next.js + Netlify)

This project is a dynamic product listing page built using the **Next.js** framework. It consumes the [Fake Store API](https://fakestoreapi.com/products) using **Axios**, implements **Redux** for state management (Add to Cart / Remove from Cart), and is fully responsive based on a Figma design. The application is hosted on **Netlify** and auto-updates on code push via GitHub.

## 🔗 Live Demo

👉 [View the deployed site on Netlify](https://your-netlify-deployment-url.netlify.app)

---

## 🎨 Figma Design

Design was implemented based on this Figma file:  
📐 [Figma UI Reference](https://www.figma.com/file/uWsNcQ6k60xf0yu34vH1pb/TT-PLP?node-id=0%3A1)

---

## 🚀 Features

- ✅ Fully responsive product listing layout
- 🔄 Dynamic product fetch using **Axios** from FakeStore API
- ➕ Add to Cart
- ➖ Remove from Cart
- 💾 Redux for global state management
- 🔐 Uses environment variable to securely manage the API base URL
- ☁️ Hosted on **Netlify**
- 🔁 Auto-deployment via **GitHub**

---

## 🛠️ Tech Stack

- **Next.js** (React Framework)
- **Axios** (API integration)
- **Redux Toolkit** (state management)
- **Figma** (UI Design)
- **Netlify** (Hosting)
- **Git & GitHub** (Version control & Deployment trigger)

---

## 📁 Folder Structure Overview

```bash
.

src/
├── app/
│ ├── accessories/
│ │ └── page.jsx
│ ├── bag/
│ │ └── page.jsx
│ ├── cart/
│ │ └── page.jsx
│ ├── gifting/
│ │ └── page.jsx
│ ├── jewelery/
│ │ └── page.jsx
│ ├── travel/
│ │ └── page.jsx
│ ├── globals.css
│ ├── layout.jsx
│ └── page.jsx
├── components/
│ ├── Header.jsx
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ └── Sidebar.jsx
├── slice/
│ └── productSlice.js
├── utils/
│ ├── ProviderWrapper.jsx
│ └── sidebarList.js
├── store.js
└── .env ...
```
