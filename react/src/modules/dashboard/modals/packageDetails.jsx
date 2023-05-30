/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { StyledFlexContainer } from "../../../styles/globalStyles";

const PackageDetails = (props) => {
	return (
		<Dialog onClose={props.toggleDialogOpen} open={props.showDetailsPopup}>
			<DialogTitle>Below are your submitted Travel Details </DialogTitle>
			<DialogContent>
				<Stack rowGap={2}>
					<StyledFlexContainer flexStart>
						Region: {props.currentRegion}
					</StyledFlexContainer>
					<StyledFlexContainer flexStart>
						City: {props.currentCity}
					</StyledFlexContainer>
					<StyledFlexContainer flexStart>
						CheckIn Date: {new Date(props.checkInDate).toString()}
					</StyledFlexContainer>
					<StyledFlexContainer flexStart>
						Number of Nights:{" "}
						{props.nights === 1
							? `${props.nights} Night`
							: `${props.nights} Nights`}
					</StyledFlexContainer>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

export default PackageDetails;
