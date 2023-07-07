/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
// import { StyledFlexContainer } from "../../../../styles/globalStyles";
import CustomModal from "../../../../components/custom-modal";
import CustomTextInput from "../../../../components/custom-textInput";
import { useState } from "react";
// import { StyledFlexContainer } from "src/styles/globalStyles";

const miniInventoryDetails = {
	customerName: "",
	customerEmail: "",
	mobileNumber: "",
};

const DownloadMiniItinerary = ({ open, onClose }) => {
	const [miniItineraryDetails, setMiniItineraryDetails] =
		useState(miniInventoryDetails);

	const handleUpdateminiItineraryDetails = (key, value) => {
		setMiniItineraryDetails((prev) => ({ ...prev, [key]: value }));
	};

	const handleClose = () => {
		onClose("DownloadMiniItineraryModal")();
	};
	// booking ref id can be changed?
	return (
		<CustomModal
			onClose={handleClose}
			open={open}
			title='Download Mini Itinerary'
			cancelText='Close'
			saveText='Download'>
			<Stack style={{ padding: "1rem" }}>
				<Grid container justifyContent='space-between'>
					<Grid item xs={5.5}>
						<CustomTextInput
							label='Customer Name'
							required
							value={miniItineraryDetails.customerName}
							inputType='text'
							onChange={(e) =>
								handleUpdateminiItineraryDetails("customerName", e.target.value)
							}
						/>
					</Grid>
					<Grid item xs={5.5}>
						<CustomTextInput
							label='Customer Email'
							required
							value={miniItineraryDetails.customerEmail}
							inputType='email'
							onChange={(e) =>
								handleUpdateminiItineraryDetails(
									"customerEmail",
									e.target.value
								)
							}
						/>
					</Grid>
				</Grid>
				<Grid container justifyContent='space-between'>
					<Grid item xs={5.5}>
						<CustomTextInput
							label='Mobile Number'
							required
							value={miniItineraryDetails.mobileNumber}
							inputType='number'
							onChange={(e) =>
								handleUpdateminiItineraryDetails("mobileNumber", e.target.value)
							}
						/>
					</Grid>
					<Grid item xs={5.5}>
						<CustomTextInput label='Booking Ref. ID' disabled value='1234' />
					</Grid>
				</Grid>
			</Stack>
		</CustomModal>
	);
};

export default DownloadMiniItinerary;
