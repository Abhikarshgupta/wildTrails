/* eslint-disable react/prop-types */
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Stack,
} from "@mui/material";
import { useState } from "react";
import { StyledFlexContainer } from "../../styles/globalStyles";
import CustomTextInput from "../custom-textInput";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { THEME } from "../../styles/theme";
import CustomButton from "../custom-button";
const MarkupModal = (props) => {
	const [markupDetails, setMarkupDetails] = useState({
		userName: "",
		role: "",
		customerMarginPercentage: 0,
		agentMarginPercentage: 0,
		agentMarkdownJLRPercentage: 0,
		cabDiscount: 0,
	});

	const handleUpdateMarkupDetails = (key, value) => {
		setMarkupDetails((prev) => ({ ...prev, [key]: value }));
	};

	console.log({ markupDetails });
	return (
		<Dialog onClose={props.toggleDialogOpen} open={props.open}>
			<DialogTitle style={{ borderBottom: `1px solid ${THEME.border}` }}>
				<StyledFlexContainer flexSpaceBetween>
					Update Invoice Details
					<IconButton onClick={props.toggleDialogOpen}>
						<CloseOutlinedIcon />
					</IconButton>
				</StyledFlexContainer>
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
								label='Role'
								required
								value={markupDetails.role}
								disabled
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent='space-between'>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Customer Margin (%)'
								required
								value={markupDetails.customerMarginPercentage}
								inputType='number'
								onChange={(e) =>
									handleUpdateMarkupDetails(
										"customerMarginPercentage",
										e.target.value
									)
								}
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Agent Margin (%)'
								required
								value={markupDetails.agentMarginPercentage}
								inputType='number'
								onChange={(e) =>
									handleUpdateMarkupDetails(
										"agentMarginPercentage",
										e.target.value
									)
								}
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent='space-between'>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Agent Markdown JLR (%)'
								required
								value={markupDetails.agentMarkdownJLRPercentage}
								inputType='number'
								onChange={(e) =>
									handleUpdateMarkupDetails(
										"agentMarkdownJLRPercentage",
										e.target.value
									)
								}
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Cab Discount (₹)'
								required
								value={markupDetails.cabDiscount}
								inputType='number'
								onChange={(e) =>
									handleUpdateMarkupDetails("cabDiscount", e.target.value)
								}
							/>
						</Grid>
					</Grid>
				</Stack>
			</DialogContent>
			<DialogActions style={{ borderTop: `1px solid ${THEME.border}` }}>
				<StyledFlexContainer gap='1rem' style={{ padding: "0 1rem 0.5rem" }}>
					<CustomButton
						color='red'
						text='Cancel'
						onClick={props.toggleDialogOpen}
					/>
					<CustomButton
						color='green'
						text='Save'
						onClick={props.toggleDialogOpen}
					/>
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default MarkupModal;
