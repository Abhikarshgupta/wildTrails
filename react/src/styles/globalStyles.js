import styled, { css } from "styled-components";

export const StyledFlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: fit-content;
	${({ flexStart }) =>
		flexStart &&
		css`
			justify-content: flex-start;
		`}
`;
