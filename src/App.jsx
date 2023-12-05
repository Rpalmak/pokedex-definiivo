import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
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



function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/Kanto" element={<Kanto />} />
        <Route path="/Johto" element={<Johto />} />
        <Route path="/Hoenn" element={<Hoenn />} />
        <Route path="/Sinnoh" element={<Sinnoh />} />
        <Route path="/Hisui" element={<Hisui />} />
        <Route path="/Unova" element={<Unova />} />
        <Route path="/Kalos" element={<Kalos />} />
        <Route path="/Alola" element={<Alola />} />
        <Route path="/Galar" element={<Galar />} />
        <Route path="/paldea" element={<Paldea />} />
      </Routes>
    </>
  );
}

export default App;
