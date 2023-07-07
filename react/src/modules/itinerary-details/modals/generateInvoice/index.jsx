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

const initInvoiceDetails = {
	customerName: "",
	customerEmail: "",
	mobileNumber: "",
	customerAddress: "",
};
/* eslint-disable no-unused-vars */
const GenerateInvoice = (props) => {
	const {
		customerName,
		customerEmail,
		mobileNumber,
		whatsappNumber,
		website,
		taxPercentage,
		customerAddress,
		bankDetails,
	} = props;
	const [invoiceDetails, setInvoiceDetails] = useState(initInvoiceDetails);

	const handleUpdateInvoiceDetails = (key, value) => {
		setInvoiceDetails((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<Dialog
			onClose={props.toggleDialogOpen}
			open={props.open}
			fullWidth={true}
			maxWidth='sm'>
			<DialogTitle style={{ borderBottom: "1px solid grey" }}>
				Generate Invoice
			</DialogTitle>
			<DialogContent>
				<Stack rowGap={2} style={{ marginTop: "1rem" }}>
					<Grid container justifyContent='space-between'>
						<Grid item xs={12}>
							<CustomTextInput
								label='customer Name'
								required
								value={invoiceDetails.customerName}
								onChange={(e) =>
									handleUpdateInvoiceDetails("customerName", e.target.value)
								}
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent='space-between'>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Mobile Number'
								required
								value={invoiceDetails.mobileNumber}
								inputType='number'
								onChange={(e) =>
									handleUpdateInvoiceDetails("mobileNumber", e.target.value)
								}
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Customer Email'
								required
								value={invoiceDetails.customerEmail}
								inputType='email'
								onChange={(e) =>
									handleUpdateInvoiceDetails("customerEmail", e.target.value)
								}
							/>
						</Grid>
					</Grid>
					<CustomTextInput
						label='customer Address'
						placeholder='Full Address'
						required
						value={invoiceDetails.customerAddress}
						onChange={(e) =>
							handleUpdateInvoiceDetails("customerAddress", e.target.value)
						}
						multiline
						rows={2}
					/>
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
						Generate Invoice
					</Button>
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default GenerateInvoice;
