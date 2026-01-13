import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../about/AboutPage";
import { ProfilePage } from "../profile/ProfilePage";
import { LoginPage } from "../auth/LoginPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    //! el * es ppara decir si no es ninguna ruta anterior esta se mostrara
    //! se usa el navigate ppara indicarle que vaya al path indicado en este caso es "/" y redirecciona al aboutPage
    {
        path: "*",
        element: <Navigate to="/"/>,
    },
]);