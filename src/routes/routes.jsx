import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Services from '../components/Services';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/Projects',
                element: <Projects/>
            },
            {
                path: '/Services',
                element: <Services/>
            }
        ]
    }
])

export default routes;
