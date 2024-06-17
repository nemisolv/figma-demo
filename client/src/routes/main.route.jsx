import MainLayout from "@layouts/MainLayout";
import { lazy } from "react";

const Home = lazy(() => import("@pages/Home")); 

const mainRoutes = {
    path: '',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Home />,
        }
    ]
}


export default mainRoutes;