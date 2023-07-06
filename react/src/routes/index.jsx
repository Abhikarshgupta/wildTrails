import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./protectedRoute";
const Login = lazy(() => import("../modules/login/index"));
const Dashboard = lazy(() => import("../modules/dashboard/index"));
const Leads = lazy(() => import("../modules/leads/index"));
const Listing = lazy(() => import("../modules/listing/index"));
const ItineraryDetails = lazy(() =>
	import("../modules/itinerary-details/index")
);
const Index = () => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route
					path='/dashboard'
					element={<ProtectedRoutes element={<Dashboard />} />}
				/>
				<Route
					path='/leads'
					element={<ProtectedRoutes element={<Leads />} />}
				/>
				<Route
					path='/listing'
					element={<ProtectedRoutes element={<Listing />} />}
				/>
				<Route
					path='/itinerary/:id'
					element={<ProtectedRoutes element={<ItineraryDetails />} />}
				/>
				<Route path='*' element={<Login />} />
			</Routes>
		</Suspense>
	);
};

export default Index;
