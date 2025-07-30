import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Docentes } from "./pages/docentes";
import { Biblioteca } from "./pages/biblioteca";
import { Cursos } from "./pages/cursos";
import { Noticias } from "./pages/noticias";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 