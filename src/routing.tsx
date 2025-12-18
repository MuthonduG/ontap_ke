import type { ReactElement } from "react"
import LandingPage from "./pages/landing-page/LandingPage";
import AboutusPage from "./pages/about/AboutusPage";

type RouteType = {
    path: string;
    element: ReactElement;
}

export const routes: RouteType[] = [
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/about',
        element: <AboutusPage/>
    }
]

export default routes; 