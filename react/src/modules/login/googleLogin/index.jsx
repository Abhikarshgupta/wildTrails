import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const gooogleClientID =
	"196812285925-dbq9inmgudqil50jer1ods8aa6cj4abi.apps.googleusercontent.com";

const generateNonce = () => {
	let text = "";
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 16; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};
const Index = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const urlHashParam = new URLSearchParams(window.location.hash.substring(1));
		const token = urlHashParam.get("id_token");
		if (token && token.length) {
			window.localStorage.setItem("user-id-token", token);
			window.localStorage.setItem("user-authenticated", true);
			navigate("/dashboard");
		}
	}, [navigate]);

	const handleGoogleLogin = () => {
		const nonce = generateNonce();
		const authURL =
			`https://accounts.google.com/o/oauth2/v2/auth?` +
			`response_type=id_token` +
			`&client_id=${gooogleClientID}` +
			`&redirect_uri=${encodeURIComponent(
				"https://abhikarshgupta.github.io/wildTrails/login"
			)}` +
			`&scope=${encodeURIComponent("email profile")}` +
			`&nonce=${nonce}`;
		window.location.href = authURL;
	};

	return (
		<Button
			variant='contained'
			color='success'
			style={{ height: "3rem" }}
			onClick={handleGoogleLogin}>
			Login With Google
		</Button>
	);
};

export default Index;
