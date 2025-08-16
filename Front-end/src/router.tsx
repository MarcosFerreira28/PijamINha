import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Card from "./Components/Card/Card";

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
                element: <Card />,
            }
        ]
    }
])


export default router;