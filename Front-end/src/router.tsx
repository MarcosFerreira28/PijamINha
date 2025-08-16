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
                element: <Card 
                            name="Pijama feminino longo - estampa poá daksdajs ndna jsndjs najn dsjan jdn ajn"
                            price={79.99}
                            image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg"
                            favorite={true}
                            on_sale={true}
                            sale_percent={10}
                        />,
            }
        ]
    }
])


export default router;