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
	companyName: "",
	businessEmail: "",
	mobileNumber: "",
	whatsappNumber: "",
	website: "",
	taxPercentage: "",
	officeAddress: "",
	bankDetails: "",
};
/* eslint-disable no-unused-vars */
const InvoiceModal = (props) => {
	const {
		companyName,
		businessEmail,
		mobileNumber,
		whatsappNumber,
		website,
		taxPercentage,
		officeAddress,
		bankDetails,
	} = props;
	const [invoiceDetails, setInvoiceDetails] = useState(initInvoiceDetails);

	const handleUpdateInvoiceDetails = (key, value) => {
		setInvoiceDetails((prev) => ({ ...prev, [key]: value }));
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
								label='Company Name'
								required
								value={invoiceDetails.companyName}
								onChange={(e) =>
									handleUpdateInvoiceDetails("companyName", e.target.value)
								}
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Business Email'
								required
								value={invoiceDetails.businessEmail}
								inputType='email'
								onChange={(e) =>
									handleUpdateInvoiceDetails("businessEmail", e.target.value)
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
								label='Whatsapp Number'
								required
								value={invoiceDetails.whatsappNumber}
								inputType='number'
								onChange={(e) =>
									handleUpdateInvoiceDetails("whatsappNumber", e.target.value)
								}
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent='space-between'>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Website'
								required
								value={invoiceDetails.website}
								onChange={(e) =>
									handleUpdateInvoiceDetails("website", e.target.value)
								}
							/>
						</Grid>
						<Grid item xs={5.5}>
							<CustomTextInput
								label='Tax %'
								required
								value={invoiceDetails.taxPercentage}
								inputType='number'
								onChange={(e) =>
									handleUpdateInvoiceDetails("taxPercentage", e.target.value)
								}
							/>
						</Grid>
					</Grid>
					<CustomTextInput
						label='Office Address'
						placeholder='Full Address'
						required
						value={invoiceDetails.officeAddress}
						onChange={(e) =>
							handleUpdateInvoiceDetails("officeAddress", e.target.value)
						}
						multiline
						rows={2}
					/>
					<CustomTextInput
						label='Bank Details'
						placeholder='Bank Information'
						required
						value={invoiceDetails.bankDetails}
						onChange={(e) =>
							handleUpdateInvoiceDetails("bankDetails", e.target.value)
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
						Save
					</Button>
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default InvoiceModal;
