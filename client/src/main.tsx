import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Handle GitHub Pages SPA redirect
(function() {
  const query = window.location.search;
  if (query.includes('?p=')) {
    const redirect = query.split('?p=')[1];
    if (redirect) {
      window.history.replaceState(null, '', redirect);
    }
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
