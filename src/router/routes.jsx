import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Taverna from "../pages/Taverna";
import CerealKiller from "../pages/CerealKiller";
import PaginaCarrinho from "../pages/PaginaCarrinho";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/taverna", element: <Taverna />},
    {path: "/cereal", element: <CerealKiller />},
    {path: "/carrinho", element: <PaginaCarrinho />},
])

export default router;
