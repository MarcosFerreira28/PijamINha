import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Card from "./Components/Card/Card";
import Home from "./pages/Home/Home";

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
            }
        ]
    }
])


export default router;