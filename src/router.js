import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UserPage/>, loader: () => userService.getAll()
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, children: [
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path:'/posts/:id', element:<PostDetailsPage/>
            }

        ]
    }
])

export {
    router
}