/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import CustomModal from "../../../../components/custom-modal";
// import { StyledFlexContainer } from "src/styles/globalStyles";

const ChooseDMC = ({ open, onClose }) => {
	const listOfNames = ["abhikarsh", "gooogle.com", "makemytryip.com"];

	const handleClose = () => {
		onClose("chooseDMCModal")();
	};

	const handleToggleCheckbox = (name) => (event) => {
		console.log({ name, event });
	};
	return (
		<CustomModal
			onClose={handleClose}
			open={open}
			title='Choose DMC'
			saveText='Submit'>
			<Stack rowGap={2} style={{ padding: "1rem" }}>
				<FormGroup>
					{listOfNames.map((name) => (
						<FormControlLabel
							key={name}
							control={
								<Checkbox
									checked={true}
									onChange={handleToggleCheckbox(name)}
									inputProps={{ "aria-label": "controlled" }}
									size='small'
								/>
							}
							label={name}
						/>
					))}
				</FormGroup>
			</Stack>
		</CustomModal>
	);
};

export default ChooseDMC;
