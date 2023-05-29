import styled, { css } from "styled-components";

export const StyledFlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: fit-content;
	${({ column }) =>
		column &&
		css`
			flex-direction: column;
		`}
	${({ flexStart }) =>
		flexStart &&
		css`
			justify-content: flex-start;
		`}
    ${({ flexAlignStart }) =>
		flexAlignStart &&
		css`
			align-items: flex-start;
		`}
    ${({ flexEnd }) =>
		flexEnd &&
		css`
			justify-content: flex-end;
		`}
        ${({ flexSpaceBetween }) =>
		flexSpaceBetween &&
		css`
			justify-content: space-between;
		`}
    ${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`;
