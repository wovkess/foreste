import { AuthRoute, HomeRoute, RegisterRoute } from "./utils/consts";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";

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
        }
]