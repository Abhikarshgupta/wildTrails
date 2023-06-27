/* eslint-disable react/prop-types */
import { Button, ButtonGroup } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";

const IncrementDecrement = ({ count, handleIncrement, handleDecrement }) => {
	return (
		<ButtonGroup size='small' aria-label='small outlined button group'>
			<Button
				onClick={handleDecrement}
				variant='outlined'
				size='small'
				style={{ border: "1px solid lightgrey" }}>
				-
			</Button>
			<StyledFlexContainer
				style={{
					width: "2.5em",
					border: "1px solid lightgrey",
					background: "lightgrey",
					height: "2em",
				}}>
				{count}
			</StyledFlexContainer>
			<Button
				onClick={handleIncrement}
				variant='outlined'
				size='small'
				style={{ border: "1px solid lightgrey" }}>
				+
			</Button>
		</ButtonGroup>
	);
};

export default IncrementDecrement;
