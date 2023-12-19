import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Root from "./Root.tsx";
import About from "./pages/About.tsx";
import ThemeProvider from "./providers/Theme.provider.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
