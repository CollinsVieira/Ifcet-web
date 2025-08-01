import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Docentes } from "./pages/docentes";
import { Biblioteca } from "./pages/biblioteca";
import { CursosPage } from "./pages/cursos";
import { Noticias } from "./pages/noticias";
import { TestSticky } from "./pages/test-sticky";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/test-sticky" element={<TestSticky />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 