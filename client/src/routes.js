import { AuthRoute, HomeRoute, RegisterRoute, ProfilesRoute } from "./utils/consts";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilesPage from "./pages/ProfilesPage";


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
]