import "./index.css";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProjectProvider from "@/context/ProjectContext.jsx";
import { GlobalSearchProvider } from "@/context/GlobalSearchContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <GlobalSearchProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </GlobalSearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
