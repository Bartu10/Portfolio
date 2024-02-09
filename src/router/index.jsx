
import Layout from "../components/layout"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Project from "../pages/Project"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          // path: '/',
          index: true,
          element: <About />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/project',
          element: <Project />,
        }
      ],
    },
  ])
