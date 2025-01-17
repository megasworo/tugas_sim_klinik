import { Routes, Route, Navigate } from "react-router";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

