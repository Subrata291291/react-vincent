import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'remixicon/fonts/remixicon.css';

// Your custom CSS
import './assets/css/style.css';
import './assets/css/loader.css';
import './assets/css/animations.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* ✅ WRAP HERE */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)