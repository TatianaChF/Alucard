import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Registration } from "../components/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Registration />
            }
        ]
    }
])