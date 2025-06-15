# 🛍️ TANN TRIM (Next.js + Netlify)

This project is a dynamic product listing page built using the **Next.js** framework. It consumes the [Fake Store API](https://fakestoreapi.com/products) using **Axios**, implements **Redux** for state management (Add to Cart / Remove from Cart), and is fully responsive based on a Figma design. The application is hosted on **Netlify** and auto-updates on code push via GitHub.

---

## 🔗 Live Demo

👉 [View the deployed site on Netlify](https://willowy-parfait-4e0a5a.netlify.app)

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
│   ├── accessories/
│   │   └── page.jsx
│   ├── bag/
│   │   └── page.jsx
│   ├── cart/
│   │   └── page.jsx
│   ├── gifting/
│   │   └── page.jsx
│   ├── jewelery/
│   │   └── page.jsx
│   ├── travel/
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Sidebar.jsx
├── slice/
│   └── productSlice.js
├── utils/
│   ├── ProviderWrapper.jsx
│   └── sidebarList.js
├── store.js
└── .env
```

---

## ⚙️ Project Setup & Run Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rishiirajanand/tann-trim.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory and add:

```env
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com/products
```

### 4️⃣ Run the project locally

```bash
npm run dev
```

App will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment on Netlify

1. **Connect your GitHub repo to Netlify**
2. **Build Settings:**

   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

3. **Environment variables:**  
   Add the same `NEXT_PUBLIC_API_BASE_URL` in Netlify's environment settings.

4. **Deploy!** Netlify will handle continuous deployment on every `git push`.

---

## 📬 Contact

Feel free to reach out for any feedback, suggestions, or collaborations:

**Rishi Raj Anand**  
📧 Email: [rishirajanand5@gmail.com](rishirajanand5@gmail.com)
