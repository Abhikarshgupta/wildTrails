import { Navigate } from "react-router-dom";
const ProtectedRoutes = (props) => {
	const isUserAuthenticated = Boolean(
		window.localStorage.getItem("user-authenticated")
	);
	if (!isUserAuthenticated) return <Navigate to='/' replace={true} />;
	// eslint-disable-next-line react/prop-types
	return props.element;
};

export default ProtectedRoutes;
