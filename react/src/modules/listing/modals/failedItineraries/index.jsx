/* eslint-disable react/prop-types */
import { Paper, Stack } from "@mui/material";
import CustomModal from "../../../../components/custom-modal";
// import { StyledFlexContainer } from "src/styles/globalStyles";

const FailedItineraries = ({ open, onClose }) => {
	const listOfNames = ["abhikarsh", "gooogle.com", "makemytryip.com"];

	const handleClose = () => {
		onClose("failedItinerariesModal")();
	};

	return (
		<CustomModal
			onClose={handleClose}
			open={open}
			title='Failed Itineraries'
			cancelText='Close'>
			<Stack rowGap={2} style={{ padding: "1rem" }}>
				{listOfNames.map((name) => (
					<Paper key={name}>{name}</Paper>
				))}
			</Stack>
		</CustomModal>
	);
};

export default FailedItineraries;
