import React, { useEffect, useState } from 'react';
import { Provider } from "./context";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Kanto from "./views/Kanto";
import Johto from "./views/Johto";
import Hoenn from "./views/Hoenn";
import Sinnoh from "./views/Sinnoh";
import Hisui from "./views/Hisui";
import Unova from "./views/Unova";
import Kalos from "./views/Kalos";
import Alola from "./views/Alola";
import Galar from "./views/Galar";
import Paldea from "./views/Paldea";
import Error from "./views/Error";
import MainPanel from './components/MainPanel';

function App() {
  const location = useLocation();
  const normalizedPath = location.pathname.toLowerCase();
  const [isValidRoute, setIsValidRoute] = useState(normalizedPath !== "/error");
  const [showMainPanel, setShowMainPanel] = useState(false);

  useEffect(() => {
    // Normaliza la ruta antes de comparar
    const normalizedPath = location.pathname.toLowerCase();

    // Verificar si la ruta es válida aquí
    const isValidRoute = normalizedPath !== "/error";
    setIsValidRoute(isValidRoute);

    // Establecer el estado para mostrar MainPanel después de que la verificación sea completa
    setShowMainPanel(true);
  }, [location]);

  return (
    <>
      <Provider>
        <Routes>
          <Route path="/Kanto" element={<Kanto />} />
          <Route path="/" element={<Kanto />} />
          <Route path="/Johto" element={<Johto />} />
          <Route path="/Hoenn" element={<Hoenn />} />
          <Route path="/Sinnoh" element={<Sinnoh />} />
          <Route path="/Hisui" element={<Hisui />} />
          <Route path="/Unova" element={<Unova />} />
          <Route path="/Kalos" element={<Kalos />} />
          <Route path="/Alola" element={<Alola />} />
          <Route path="/Galar" element={<Galar />} />
          <Route path="/Paldea" element={<Paldea />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={isValidRoute && <Navigate to="/error" />} />
        </Routes>
        {isValidRoute && showMainPanel && <MainPanel />}
      </Provider>
    </>
  );
}

export default App;
