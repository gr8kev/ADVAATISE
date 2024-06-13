import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About";
import Signin from "./pages/Signin/Signin";
import Form from "./pages/Form/Form";
import Portfolios from "./pages/Portfolios/Portfolios";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Preloader from "./Components/PreLoader/Preloader";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadResources = async () => {
      try {
        const preloads = [
          import("./pages/Home/Home"),
          import("./pages/Services/Services"),
          import("./pages/Contacts/Contacts"),
          import("./pages/About"),
          import("./pages/Signin/Signin"),
          import("./pages/Form/Form"),
          import("./pages/Portfolios/Portfolios"),
          import("./pages/ForgotPassword/ForgotPassword"),
        ];
        await Promise.all(preloads);
        setLoading(false);
      } catch (error) {
        console.error("Error preloading resources:", error);
        setLoading(false); // Set loading to false even if there's an error to prevent infinite loader
      }
    };

    preloadResources();
  }, []);

  const hideHeaderFooter = [
    "/signin",
    "/form",
    "/projectform",
    "/forgotpassword",
  ].includes(location.pathname.toLowerCase());

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      {!hideHeaderFooter && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/form" element={<Form />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);

export default WrappedApp;
