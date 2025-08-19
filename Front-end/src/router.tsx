import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Favoritos from "./pages/Favoritos/Favoritos";
import Individual from "./pages/Individual/Individual";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/carrinho",
                element:<Carrinho/>
            },
            {
                path:"/favoritos",
                element:<Favoritos/>
            },
            {
                path:"/individual",
                element:<Individual/>
            }
        ]
    }
])


export default router;