import type { ReactElement } from "react"
import LandingPage from "./pages/landing-page/LandingPage";
import AboutusPage from "./pages/about/AboutusPage";
import HrAnalytics from "./pages/hr-analytics/HrAnalytics";
import RecruitmentOnboardingPage from "./pages/recruitment/RecruitmentOnboardingPage";
import EventsPage from "./pages/events/EventsPage";
import EmployeeEngagementPage from "./pages/employee-enagement/EmployeeEngagementPage";
import HrCompliancePage from "./pages/hr_compliance/HrCompliancePage";
import PricingPage from "./pages/pricing/PricingPage";

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
    },
    {
        path: '/hr_analytics',
        element: <HrAnalytics/>
    },
    {
        path: '/recruitment',
        element: <RecruitmentOnboardingPage/>
    },
    {
        path: '/events',
        element: <EventsPage/>
    },
    {
        path: '/employee_engagement',
        element: <EmployeeEngagementPage/>
    },
    {
        path: 'compliance',
        element: <HrCompliancePage/>
    },
    {
        path: '/pricing',
        element: <PricingPage/>
    }
]

export default routes; 