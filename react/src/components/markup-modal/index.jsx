/* eslint-disable react/prop-types */
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Stack,
} from "@mui/material";
import { useState } from "react";
import { StyledFlexContainer } from "../../styles/globalStyles";
import CustomTextInput from "../custom-textInput";

const MarkupModal = (props) => {
	const [markupDetails, setMarkupDetails] = useState({
		userName: "",
		marginPercentage: "",
	});

	const handleUpdateMarkupDetails = (key, value) => {
		setMarkupDetails((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<Dialog onClose={props.toggleDialogOpen} open={props.open}>
			<DialogTitle style={{ borderBottom: "1px solid grey" }}>
				Update Invoice Details
			</DialogTitle>
			<DialogContent>
				<Stack rowGap={2} style={{ minWidth: "30rem", marginTop: "1rem" }}>
					<Grid container justifyContent='space-between'>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='User Name'
								required
								value={markupDetails.userName}
								disabled
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Margin %'
								required
								value={markupDetails.marginPercentage}
								inputType='number'
								onChange={(e) =>
									handleUpdateMarkupDetails("marginPercentage", e.target.value)
								}
							/>
						</Grid>
					</Grid>
				</Stack>
			</DialogContent>
			<DialogActions>
				<StyledFlexContainer gap='1rem' style={{ padding: "0 1rem 0.5rem" }}>
					<Button
						variant='contained'
						color='error'
						size='small'
						onClick={props.toggleDialogOpen}>
						Cancel
					</Button>
					<Button variant='contained' color='success' size='small'>
						Save
					</Button>
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default MarkupModal;
