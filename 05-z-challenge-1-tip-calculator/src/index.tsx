import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(<App />);
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}