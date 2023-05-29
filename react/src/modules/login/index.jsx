import { Button, Divider, Stack, TextField } from "@mui/material";
import { StyledLoginRoot } from "./styled";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const handleChangeEmail = (event) => setEmail(event.target.value);

	const handleEmailLogin = () => {
		if (!email) {
			setError(true);
			return;
		}
		window.localStorage.setItem("email-id", email.trim());
		navigate("/dashboard");
	};
	return (
		<StyledLoginRoot>
			<div
				style={{
					width: "30rem",
					height: "25rem",
					background: "#fff",
					padding: "2rem",
				}}>
				<Stack rowGap={4}>
					<StyledFlexContainer>login account</StyledFlexContainer>
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
							error={error && !email}
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
					<StyledFlexContainer>
						<Divider>OR</Divider>
					</StyledFlexContainer>
					<Stack>
						<Button
							variant='contained'
							color='success'
							style={{ height: "3rem" }}>
							Login With Google
						</Button>
					</Stack>
				</Stack>
			</div>
		</StyledLoginRoot>
	);
};

export default Index;
