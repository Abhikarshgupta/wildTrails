import { Route, Routes } from "react-router-dom";
const Index = () => {
	return (
		<Routes>
			<Route path='/' element={<></>} errorElement={<></>} />
			<Route path='/dashboard' element={<></>} />
		</Routes>
	);
};

export default Index;
