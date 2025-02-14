import { createBrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Product from "./Components/Product"
import Categories from "./Components/Categories"
import App from "./App"
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/cars",
                element: <Product/>,
            },
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/categories",
                element: <Categories/>,
            }
        ]
    }
])