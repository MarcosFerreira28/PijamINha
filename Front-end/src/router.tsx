import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Fav from "./pages/Fav/Fav";


const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Login />,
    // },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path:"/carrinho",
                element:<Carrinho/>
            }
            ,{
                path:"/fav",
                element:<Fav/>
            }
        ]
    }
])


export default router;