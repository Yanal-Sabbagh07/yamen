import React from "react";

import Header from "./pages/home/Header";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import Services from "./pages/services/index";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <Header />,
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
