/* eslint-disable react/prop-types */
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { THEME } from "../../styles/theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CustomButton from "../custom-button";

const CustomModal = ({
	open,
	onClose,
	children,
	handleSave,
	title = "",
	cancelText = "Cancel",
	saveText = "Save",
}) => {
	return (
		<Dialog onClose={onClose} open={open} fullWidth={true} maxWidth='xs'>
			<DialogTitle style={{ borderBottom: `1px solid ${THEME.border}` }}>
				<StyledFlexContainer flexSpaceBetween>
					{title}
					<IconButton>
						<CloseOutlinedIcon onClick={onClose} />
					</IconButton>
				</StyledFlexContainer>
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions style={{ borderTop: `1px solid ${THEME.border}` }}>
				<StyledFlexContainer gap='1rem' style={{ padding: "0 1rem 0.5rem" }}>
					<CustomButton color='red' text={cancelText} onClick={onClose} />
					{handleSave && (
						<CustomButton color='green' text={saveText} onClick={handleSave} />
					)}
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default CustomModal;
