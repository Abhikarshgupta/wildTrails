import {
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Tooltip,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { StyledFlexContainer } from "../../styles/globalStyles";
import InvoiceModal from "../invoice-modal";
import MarkupModal from "../markup-modal";
const wildTrailsLogo = new URL("./wildTrailsLogo.png", import.meta.url).href;

const HeaderNavbar = () => {
	const isUserAuthenticated = Boolean(
		window.localStorage.getItem("user-authenticated")
	);
	const [showInvoiceDialog, setShowInvoiceDialog] = useState(false);
	const [showMarkupDialog, setShowMarkupDialog] = useState(false);

	const handleToggleInvoiceDialog = () => {
		setShowInvoiceDialog((prev) => !prev);
	};
	const handleToggleMarkupDialog = () => {
		setShowMarkupDialog((prev) => !prev);
	};

	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	return (
		<AppBar sx={{ backgroundColor: "#000000b3" }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
					<StyledFlexContainer>
						<a href='https://sitc.travel/' title='SafariIn3Clicks'>
							<img src={wildTrailsLogo} alt='wildTrailsLogo' height='70rem' />
						</a>
					</StyledFlexContainer>
					{isUserAuthenticated && (
						<StyledFlexContainer gap='1rem'>
							<Button
								variant='contained'
								color='error'
								size='small'
								onClick={handleToggleInvoiceDialog}>
								Invoice
							</Button>
							<Button
								variant='contained'
								color='error'
								size='small'
								onClick={handleToggleMarkupDialog}>
								Markup
							</Button>
							<Button
								variant='contained'
								color='error'
								size='small'
								onClick={handleLogout}>
								Logout
							</Button>
							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title='User Profile'>
									<IconButton sx={{ p: 0 }} size='small'>
										<Avatar>AG</Avatar>
									</IconButton>
								</Tooltip>
							</Box>
						</StyledFlexContainer>
					)}
				</Toolbar>
			</Container>
			{showInvoiceDialog && (
				<InvoiceModal
					toggleDialogOpen={handleToggleInvoiceDialog}
					open={showInvoiceDialog}
				/>
			)}
			{showMarkupDialog && (
				<MarkupModal
					toggleDialogOpen={handleToggleMarkupDialog}
					open={showMarkupDialog}
				/>
			)}
		</AppBar>
	);
};

export default HeaderNavbar;
