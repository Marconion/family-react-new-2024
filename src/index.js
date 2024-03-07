import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./components/Theme";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { GalleryPage } from "./components/GalleryPage";
import { PonudaPage } from "./components/PonudaPage";
import { Onama } from "./components/Onama";
import { Kontakt } from "./components/Kontakt";
// import NotFoundPage from "./components/NotFoundPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/galerija",
    element: <GalleryPage />,
  },
  {
    path: "/ponuda",
    element: <PonudaPage />,
  },
  {
    path: "/onama",
    element: <Onama />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
  // errorElement: <NotFoundPage />,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
