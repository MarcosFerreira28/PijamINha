import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Login />,
    // },
    {
        path: "/",
        element: <RootLayout />,
        children: [
        ]
    }
])


export default router;