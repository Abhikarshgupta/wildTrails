import { StyledFlexContainer } from "../../styles/globalStyles";
import styled from "styled-components";

export const StyledLogoContainer = styled(StyledFlexContainer)`
	height: 4rem;
	@media only screen and (max-width: 576px) {
		height: 3rem;
	}
`;
