import { Divider, Stack } from "@mui/material";
import { StyledLoginRoot } from "./styled";
import { StyledFlexContainer } from "../../styles/globalStyles";
import EmailLogin from "./emailLogin";
import GoogleLogin from "./googleLogin";
const Index = () => {
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
					<EmailLogin />
					<StyledFlexContainer>
						<Divider>OR</Divider>
					</StyledFlexContainer>
					<Stack>
						<GoogleLogin />
					</Stack>
				</Stack>
			</div>
		</StyledLoginRoot>
	);
};

export default Index;
