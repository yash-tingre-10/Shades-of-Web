React Project

🚀 Introduction

This is a React-based project that integrates a dynamic image slider with an API-powered data fetch. The project utilizes Axios for API requests, Tailwind CSS for styling, and React Slick for an interactive slider experience.

📌 Features

Dynamic Image Slider: Uses react-slick to display a carousel of images.

API Integration: Fetches community data from an external API.

Custom Hooks: Implements a reusable useFetch hook for API requests.

Responsive Design: Optimized for desktop and mobile views.

Vignette Effect: Enhances images with a bottom vignette overlay.

🛠️ Technologies Used

React.js - Frontend Framework

Vite - Development Environment

Axios - API Requests

React Slick - Image Carousel

Tailwind CSS - Styling

React Icons - UI Enhancements

📦 Installation

Clone the repository:

git clone https://github.com/your-username/your-repo.git

Navigate to the project folder:

cd your-project-folder

Install dependencies:

npm install

🔧 Setup API Proxy (For Development)

To avoid CORS issues, configure vite.config.js:

server: {
  proxy: {
    '/api': {
      target: 'https://devsow.wpengine.com',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, '/wp-json/communities/all')
    }
  }
}

Then, update your API call:

const API_URL = "/api";
const { data, loading, error } = useFetch(API_URL, {
  headers: {
    Authorization: "Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
  }
});

🚀 Running the Project

Start the development server:

npm run dev

🏗️ Folder Structure

/src
│── components
│   │── SliderComponent.jsx
│   │── CustomHooks.js
│── assets
│── styles
│── App.jsx
│── main.jsx
│── vite.config.js

📖 Usage

Open the browser at http://localhost:5173/

The slider will display images with text fetched from the API.

On mobile, one full image and part of the next image are shown.

✅ Future Improvements

Add lazy loading for images.

Implement pagination for better performance.

Enhance UI animations with Framer Motion.

📜 License

This project is licensed under MIT License.

🔗 Connect with me: Your LinkedIn | Twitter

