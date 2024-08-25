import { createBrowserRouter } from "react-router-dom";

// page
import NotFound from './pages/not_found.jsx'
import Root from "./pages/root.jsx";
import CustomerPage from "./pages/menu/customer.jsx";
import DashboardPage from "./pages/menu/dashboard.jsx";
import StockPage from "./pages/menu/stock.jsx";
import RestaurantPage from "./pages/menu/restaurant.jsx";
import DesignPage from "./pages/menu/design.jsx";
import ReportPage from "./pages/menu/report.jsx";
import RoleAdminPage from "./pages/menu/role_admin.jsx";
import SettingPage from "./pages/menu/settings.jsx";
import StockIntregationPage from "./pages/integration/stock.jsx";
import SupplyPage from "./pages/integration/supply.jsx";
import ROUTES from "./utils/route.js";
import CustomerIndexPage from "./pages/menu/customer/index.jsx";
import CustomerPromoPage from "./pages/menu/customer/promo.jsx";
import CustomerVoucherPage from "./pages/menu/customer/voucher.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: ROUTES.menu.dashboard,
                element: <DashboardPage />
            },
            {
                path: ROUTES.menu.stock,
                element: <StockPage />
            },
            {
                path: ROUTES.menu.customer.path,
                element: <CustomerPage />,
                children: [
                    {
                        path: ROUTES.menu.customer.index,
                        element: <CustomerIndexPage />
                    },
                    {
                        path: ROUTES.menu.customer.promo,
                        element: <CustomerPromoPage />
                    },
                    {
                        path: ROUTES.menu.customer.voucher,
                        element: <CustomerVoucherPage />
                    },
                ]
            },
            {
                path: ROUTES.menu.restaurant,
                element: <RestaurantPage />
            },
            {
                path: ROUTES.menu.design,
                element: <DesignPage />
            },
            {
                path: ROUTES.menu.report,
                element: <ReportPage />
            },
            {
                path: ROUTES.menu.roleAdmin,
                element: <RoleAdminPage />
            },
            {
                path: ROUTES.menu.settings,
                element: <SettingPage />
            },
            {
                path: ROUTES.inregation.stock,
                element: <StockIntregationPage />
            },
            {
                path: ROUTES.inregation.supply,
                element: <SupplyPage />
            },
        ]
    },
])

export default router;