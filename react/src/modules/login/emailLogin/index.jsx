import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFlexContainer } from "../../../styles/globalStyles";

const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const Index = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const handleChangeEmail = (event) => setEmail(event.target.value);

	const handleEmailLogin = () => {
		if (!email || !emailValidation.test(email)) {
			setError(true);
			return;
		}
		window.localStorage.setItem("email-id", email.trim());
		window.localStorage.setItem("user-authenticated", true);
		navigate("/dashboard");
	};
	return (
		<Stack rowGap={2}>
			<StyledFlexContainer flexStart>Email Address</StyledFlexContainer>
			<TextField
				value={email}
				onChange={handleChangeEmail}
				variant='outlined'
				size='small'
				label=' '
				InputLabelProps={{ shrink: false }}
				style={{ height: "3rem" }}
				error={error && (!email || !emailValidation.test(email))}
				placeholder='Enter your email address'
			/>
			<Button
				color='info'
				variant='contained'
				size='small'
				onClick={handleEmailLogin}
				style={{ height: "3rem" }}>
				Login With Email
			</Button>
		</Stack>
	);
};

export default Index;
