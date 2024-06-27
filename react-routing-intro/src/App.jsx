import "./App.css";
// App.jsx
// ... previous imports stay unchanged

import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/Homepage"; // <== IMPORT
import AboutPage from "./pages/AboutPage"; // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage"; // <== IMPORT
import ErrorPage from "./pages/ErrorPage"; // <== IMPORT

import { Routes, Route } from "react-router-dom"; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />

      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
