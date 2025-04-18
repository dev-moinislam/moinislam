import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/portfolio",
                element: <Portfolio/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
        ]
    }
  ]);

export default router