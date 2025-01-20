import { Routes, Route, Navigate } from "react-router";
import Login from "./Pages/auth/Login";
import RawatJalan from "./Pages/Dashboard/RawatJalan";
import RegisterPasien from "./Pages/Dashboard/RegisterPasien";
import Farmasi from "./Pages/Dashboard/Farmasi";
import ManFarmasi from "./Pages/Dashboard/ManFarmasi";
import ManKepegawaian from "./Pages/Dashboard/ManajemenKepegawaian";
import ManInv from "./Pages/Dashboard/ManInv";
import ManTarif from "./Pages/Dashboard/ManTarif";
import Klinik from "./Pages/Dashboard/Klinik";
import Settings from "./Pages/Dashboard/Settings";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rawat-jalan" element={<RawatJalan />} />
          <Route path="/register-pasien" element={<RegisterPasien />} />
          <Route path="/farmasi" element={<Farmasi />} />
          <Route path="/man-kepegawaian" element={<ManKepegawaian />} />
          <Route path="/man-farmasi" element={<ManFarmasi />} />
          <Route path="/man-inv" element={<ManInv />} />
          <Route path="/man-tarif" element={<ManTarif />} />
          <Route path="/klinik" element={<Klinik />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </>
  );
}

export default App;
