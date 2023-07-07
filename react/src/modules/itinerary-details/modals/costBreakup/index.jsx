/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
import { StyledFlexContainer } from "../../../../styles/globalStyles";
import CustomModal from "../../../../components/custom-modal";
// import { StyledFlexContainer } from "src/styles/globalStyles";

const CostBreakup = ({ open, onClose, costs }) => {
	console.log({ costs });
	const handleClose = () => {
		onClose("CostBreakupModal")();
	};

	return (
		<CustomModal
			onClose={handleClose}
			open={open}
			title='Cost Breakup Details'
			cancelText='Close'>
			<Stack style={{ padding: "1rem" }}>
				<Grid container>
					<Grid item xs={6}>
						<StyledFlexContainer flexStart>Description</StyledFlexContainer>
					</Grid>
					<Grid item xs={6}>
						<StyledFlexContainer flexEnd>INR</StyledFlexContainer>
					</Grid>
					{Object.entries(costs).map(([description, cost]) => {
						console.log({ description, cost });
						return (
							<>
								<Grid item xs={6}>
									<StyledFlexContainer flexStart>
										{description}
									</StyledFlexContainer>
								</Grid>
								<Grid item xs={6}>
									<StyledFlexContainer flexEnd>{cost}</StyledFlexContainer>
								</Grid>
							</>
						);
					})}
				</Grid>
			</Stack>
		</CustomModal>
	);
};

export default CostBreakup;
