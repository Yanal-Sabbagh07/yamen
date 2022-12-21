import React from "react";

import HomePage from "./pages/home/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import Services from "./pages/services/index";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <HomePage />,
    nav: true,
  },

  {
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    title: "Services",
    path: "/Services",
    element: <Services />,
  },
  {
    title: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];
