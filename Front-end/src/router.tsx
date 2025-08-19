import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Favoritos from "./pages/Favoritos/Favoritos";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";


const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/cadastro",
                element: <Cadastro />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path:"/carrinho",
                element:<Carrinho/>
            },
            {
                path:"/favoritos",
                element:<Favoritos/>
            }
        ]
    }
])


export default router;