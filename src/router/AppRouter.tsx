import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <BaseLayout />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
