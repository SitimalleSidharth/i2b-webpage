import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // We will install this next
import App from "./App.jsx";
import './index.css';

// REMOVED: The generic mobile check. 
// We will let CSS and Framer Motion handle performance naturally.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <div id="app-root" className="relative overflow-x-clip">
          <App />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);