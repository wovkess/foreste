import { AuthRoute, HomeRoute, RegisterRoute, ProfilesRoute, ProductsRoute, AboutRoute } from "./utils/consts";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilesPage from "./pages/ProfilesPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
export const publicRoutes = [
        {
                path: AuthRoute,
                Element: AuthPage
        },
        {
                path: HomeRoute,
                Element: HomePage
        },
        {
                path: RegisterRoute,
                Element: RegisterPage
        },
        {
                path: ProfilesRoute,
                Element: ProfilesPage
        },
        {
                path: ProductsRoute,
                Element: ProductsPage
        },
        {
                path: AboutRoute,
                Element: AboutPage
        },
]