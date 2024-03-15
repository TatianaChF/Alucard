import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Registration } from "../components/Registration/Registration";
import { Authorization } from "../components/Authorization/Authorization";
import { Home } from "../components/Home/Home";
import { Personal } from "../components/Personal/Personal";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "registration",
                element: <Registration />
            },
            {
                path: "authorization",
                element: <Authorization />
            },
            {
                path: "personal",
                element: <Personal />
            }
        ]
    }
])