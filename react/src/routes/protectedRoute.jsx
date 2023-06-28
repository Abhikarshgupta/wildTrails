/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import HeaderNavbar from "../components/header-navbar";
const ProtectedRoutes = (props) => {
	const isUserAuthenticated = Boolean(
		window.localStorage.getItem("user-authenticated")
	);
	if (!isUserAuthenticated) return <Navigate to='/' replace={true} />;
	return (
		<>
			<HeaderNavbar />
			{props.element}
		</>
	);
};

export default ProtectedRoutes;
