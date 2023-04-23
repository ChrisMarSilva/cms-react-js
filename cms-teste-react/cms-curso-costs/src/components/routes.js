import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './../App'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Company from '../pages/Company'
import Project from '../pages/Project'
import NewProject from '../pages/NewProject'
import Projects from '../pages/Projects'

const router = createBrowserRouter([
    {
        path: "/", element: <App />,
        children: [
            { path: "/", element: <Home />, },
            { path: "/projects", element: <Projects />, },
            { path: "/company", element: <Company />, },
            { path: "/contact", element: <Contact />, },
            { path: "/newproject", element: <NewProject />, },
            { path: "/project/:id", element: <Project />, },
        ],
    },
])

export default function Routes() {
    return <RouterProvider router={router} />
}