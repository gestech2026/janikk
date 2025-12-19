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
import ScrollToTop from "./ScrollToTop.jsx";
import StudentRegistration from "./pages/StudentRegistration.jsx";
import ExibitorsRegistration from "./pages/ExibitorsRegistration.jsx";
import GWHMPage from "./pages/GWHMPage.jsx";

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
      <ScrollToTop />
      <Routes>
        {/*
          The GlobalLayout component acts as a parent for all routes,
          ensuring the Header and Footer are displayed on every page.
        */}
        <Route path="/" element={<GlobalLayout />}>
          {/* Define your page routes as children */}
          <Route index element={<HomePage />} />{" "}
          {/* index renders at the parent path "/" */}
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="ges" element={<GESPage />} />
          <Route path="immersion" element={<ImmersionProgrammePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          ExibitorsRegistration.jsx
          <Route path="studentregister" element={<StudentRegistration />} />
          <Route path="exibitorsregister" element={<ExibitorsRegistration />} />
          <Route path="gwhmregister" element={<GWHMPage />} />
          {/* Fallback route for 404 - Optional but recommended */}
          <Route
            path="*"
            element={
              <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
