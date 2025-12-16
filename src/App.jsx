
// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Import Layout Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Import Page Components
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import GESPage from "./pages/GESPage.jsx";
import ImmersionProgrammePage from "./pages/ImmersionProgrammePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";

// A Layout component to wrap pages with the Header and Footer
const GlobalLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100dvh" }}>
        {/* The Outlet renders the currently matched child Route element */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    // Use Router once at the top level
    <Router>
      <Routes>
    
      </Routes>
    </Router>
  );
}

export default App;
