import { useEffect } from "react";
import "./App.css";
import Routes from "./routes";
const gooogleClientID =
	"196812285925-dbq9inmgudqil50jer1ods8aa6cj4abi.apps.googleusercontent.com";

function App() {
	useEffect(() => {
		window?.google?.accounts?.id?.initialize({
			client_id: gooogleClientID,
		});
	}, []);
	return <Routes />;
}

export default App;
