import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Favoritos from "./pages/Favoritos/Favoritos";

import Pijaminhas from "./pages/Pijaminhas/Pijaminhas";
import Individual from "./pages/Individual/Individual";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import InfoLoader from "./Functions/InfoLoader";



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
            },
            {
                path:"/individual/:pijamaId",
                element:<Individual/>,
                loader: InfoLoader
            },
            {
                path: "/pijaminhas",
                element:<Pijaminhas/>
            }
        ]
    }
])


export default router;