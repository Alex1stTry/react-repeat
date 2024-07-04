import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {CarPage} from "./pages/CarPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                path: 'Cars', element: <CarPage/>
            }
        ]
    }
]);

export {
    router
}