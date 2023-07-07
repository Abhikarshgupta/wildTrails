/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import CustomModal from "../../../../../components/custom-modal";
// import { StyledFlexContainer } from "../../styles/globalStyles";
import CustomTextInput from "../custom-textInput";

const initInvoiceDetails = {
	customerName: "",
	packagePlan: "",
	voucherNumber: "",
};
/* eslint-disable no-unused-vars */
const AddCab = (props) => {
	const {
		customerName,
		customerEmail,
		voucherNumber,
		whatsappNumber,
		website,
		taxPercentage,
		packagePlan,
		bankDetails,
		handleClose,
	} = props;
	const [invoiceDetails, setInvoiceDetails] = useState(initInvoiceDetails);

	const handleUpdateInvoiceDetails = (key, value) => {
		setInvoiceDetails((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<CustomModal
			onClose={handleClose}
			open={open}
			title='Download Mini Itinerary'
			cancelText='Close'
			saveText='Download Voucher'>
			<Stack rowGap={2} style={{ marginTop: "1rem" }}>
				<Grid container justifyContent='space-between'>
					<Grid item xs={5.5}>
						<CustomTextInput
							label='customer Name'
							required
							value={invoiceDetails.customerName}
							onChange={(e) =>
								handleUpdateInvoiceDetails("customerName", e.target.value)
							}
						/>
					</Grid>
					<Grid item xs={5.5}>
						<CustomTextInput
							label='HKS Voucher No.'
							required
							value={invoiceDetails.voucherNumber}
							inputType='number'
							onChange={(e) =>
								handleUpdateInvoiceDetails("voucherNumber", e.target.value)
							}
						/>
					</Grid>
				</Grid>
				<CustomTextInput
					label='Package Plan'
					placeholder='(Example :  JPAI(accommodation + all meals + Jeep safari + guide trekking + taxes))'
					required
					value={invoiceDetails.packagePlan}
					onChange={(e) =>
						handleUpdateInvoiceDetails("packagePlan", e.target.value)
					}
					multiline
					rows={2}
				/>
			</Stack>
		</CustomModal>
	);
};

export default AddCab;
