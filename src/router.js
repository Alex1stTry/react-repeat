import {createBrowserRouter, Navigate} from "react-router-dom";
import {CharacterPage, EpisodesPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path:'characters/:ids',element:<CharacterPage/>
            }
        ]
    }
])

export {
    router
}