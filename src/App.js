import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { Provider } from "react-redux";
import store from "store";
import Nosotros from "containers/pages/Nosotros";
import Blog from "containers/pages/Blog";
import Contacto from "containers/pages/Contacto";
import Inicio from "containers/pages/Inicio";
import Servicios from "containers/pages/Servicios";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Visualizacion de errores */}
          <Route path="*" element={<Error404 />} />

          {/* Pantalla de Inicio */}
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
