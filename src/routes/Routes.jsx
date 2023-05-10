import { createBrowserRouter } from "react-router-dom";

import { About, NotFound, Blog, Contact, Home, Post } from '../pages'
import { PublicLayouts } from '../layouts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/post',
        element: <Post />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
])
