import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([

    {
        path: "/",
        index: true,
        element: <About />
    },
    {
        path: "/projects",
        element: <Project />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);