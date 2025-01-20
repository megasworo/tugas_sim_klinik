import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";
import { NavbarProvider } from "./store/NavbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <App/>
      </NavbarProvider>
    </BrowserRouter>
  </StrictMode>
);
