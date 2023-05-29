import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./protectedRoute";
const Login = lazy(() => import("../modules/login/index"));
const Dashboard = lazy(() => import("../modules/dashboard/index"));
const Index = () => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route
					path='/dashboard'
					element={<ProtectedRoutes element={<Dashboard />} />}
				/>
				<Route path='*' element={<Login />} />
			</Routes>
		</Suspense>
	);
};

export default Index;
