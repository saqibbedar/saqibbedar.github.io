import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProjectProvider from "@/context/ProjectContext.jsx";
import { GlobalSearchProvider } from "@/context/GlobalSearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalSearchProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </GlobalSearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
