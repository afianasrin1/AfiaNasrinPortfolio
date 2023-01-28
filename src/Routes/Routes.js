import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home/Home";
import Root from "../Layout/Root";
import Details from "../components/ProjectsDetails/Details";
import Details1 from "../components/ProjectsDetails/Details1";
import Details2 from "../components/ProjectsDetails/Details2";


const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            { path: '/', element: <Home /> },
            {path:'/blog',element:<Blog/>},
            {path:'/details',element:<Details/>},
            {path:'/details1',element:<Details1/>},
            {path:'/details2',element:<Details2/>},
        ]}
    
])
export default router