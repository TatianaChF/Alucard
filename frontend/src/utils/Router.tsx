import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Registration } from "../components/Registration/Registration";
import { Authorization } from "../components/Authorization/Authorization";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Registration />
            },
            {
                path: "authorization",
                element: <Authorization />
            }
        ]
    }
])