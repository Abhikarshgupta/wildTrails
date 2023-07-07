import { StyledFlexContainer } from "../../styles/globalStyles";
import styled from "styled-components";

export const StyledListingHeader = styled(StyledFlexContainer)`
	background: url("https://wildtrails.in/wp-content/themes/wildtrails/img/pages-banner/blog-banner.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
	min-height: 15rem;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		min-height: 40rem;
	}
`;
