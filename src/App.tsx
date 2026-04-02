import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <Link to="/" style={styles.link}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about" style={styles.link}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="/services" style={styles.link}>
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "1rem",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "2rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
  },
};

export default App;
