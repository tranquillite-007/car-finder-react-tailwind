# Car Rental App - React.js

## 📌 Project Overview

A responsive Car Rental application built with React.js that allows users to:

- Search and filter cars by brand, price, fuel type, and seating capacity
- View detailed car specifications
- Save favorites to a wishlist (persisted via localStorage)
- Toggle between light/dark modes
- Paginate through results (10 cars per page)

## 🚀 Features

### 🔍 Search & Filtering

- Dynamic search by car name/brand
- Multi-filter capability:
  - Price range slider
  - Fuel type (Petrol/Diesel/Electric/Hybrid)
  - Seating capacity (2-8 seats)
  - Sort by price (Low-High/High-Low)

### 💾 Wishlist Management

- Add/remove cars with heart icons
- localStorage persistence
- Dedicated wishlist view page

### 🎨 UI/UX

- Responsive grid layout (mobile-friendly)
- Tailwind CSS styling
- Dark mode toggle
- Loading states and error handling

## 📂 Project Structure

car-rental/  
├── public/  
│ └── index.html  
├── src/  
│ ├── assets/  
│ │ └── cars/  
│ ├── components/  
│ │ ├── CarCard.jsx  
│ │ ├── FilterSection.jsx  
│ │ ├── Header.jsx  
│ │ ├── Pagination.jsx  
│ │ ├── SearchBar.jsx  
│ │ └── WishlistButton.jsx  
│ ├── pages/  
│ │ ├── CarDetails.jsx  
│ │ ├── Home.jsx  
│ │ └── Wishlist.jsx  
│ ├── utils/  
│ │ ├── api.js  
│ │ ├── constants.js  
│ │ └── mockData.js  
│ ├── App.js  
│ ├── index.js  
│ └── index.css  
├── tailwind.config.js  
├── postcss.config.js  
└── package.json

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## 🛠 Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 🖼️ Screenshots

<div align="center">
  <h3>Light and Dark Mode Interface</h3>
  <img src="./screenshots/light-mode.png" alt="Light Mode" width="45%"/>
  <img src="./screenshots/dark-mode.png" alt="Dark Mode" width="45%"/>
  
  <h3>Key Features</h3>
  <img src="./screenshots/search-filter-l.png" alt="search-filter-l" width="30%"/>
  <img src="./screenshots/search-filter-d.png" alt="search-filter-d" width="30%"/>
  <img src="./screenshots/car-detail-l.png" alt="car-detail-l" width="30%"/>
  <img src="./screenshots/car-detail-d.png" alt="car-detail-d" width="30%"/>
</div>
