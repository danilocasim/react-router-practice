import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.querySelector("main")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
