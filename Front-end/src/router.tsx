import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Card from "./Components/Card/Card";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";

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
                path: "/home",
                element: <Home />
            },
            {
                path: "/cadastro",
                element: <Cadastro />
            },
            {
                path: "/feedback",
                // element: pagina para fazer um feedback
            }
        ]
    }
])


export default router;