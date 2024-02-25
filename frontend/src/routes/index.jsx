import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { SocialMediaLayout } from "../layouts";

import { LoadingScreen, Login, Signup } from "../components";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />} >
            <Component {...props} />
        </Suspense>
    )
}

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            element: <AuthLayout />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'signup', element: <Signup /> }
            ]
        },
        {
            path: '/',
            element:<SocialMediaLayout />,
            children: [
                { path: '', element: <FeedPage />},
                { path: 'my-profile', element: <MyProfile />},
                { path: '*', element: <Navigate to="/404" replace />}
            ]
        },
        { path: '404', element: <_404 />},
    ])
}


const AuthLayout = Loadable(lazy(() => import("../layouts/AuthLayout")));
const FeedPage = Loadable(lazy(() => import("../pages/FeedPage")));
const MyProfile = Loadable(lazy(() => import("../pages/My_Profile")));
const _404 = Loadable(lazy(() => import("../pages/_404")))

