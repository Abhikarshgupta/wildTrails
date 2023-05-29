import { Navigate } from "react-router-dom";
const ProtectedRoutes = (props) => {
	const emailId = window.localStorage.getItem("email-id");
	if (!emailId) return <Navigate to='/' replace={true} />;
	// eslint-disable-next-line react/prop-types
	return props.element;
};

export default ProtectedRoutes;
