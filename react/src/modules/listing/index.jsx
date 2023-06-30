import { Grid, Paper, Stack } from "@mui/material";
import CustomButton from "../../components/custom-button";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { FONTSTYLES } from "../../styles/theme";
import { StyledListingHeader } from "./styled";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";

const ListingPage = () => {
	return (
		<Stack rowGap={4}>
			<StyledListingHeader style={FONTSTYLES.heading}>
				Leads Dashboard
			</StyledListingHeader>
			<Stack style={{ padding: "0 10rem" }} gap={2}>
				<Paper
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: " 0.5rem 1rem",
						alignItems: "center",
					}}>
					<StyledFlexContainer
						style={{ ...FONTSTYLES.subHeading, color: "#fd7145" }}>
						0 X Packages Below
					</StyledFlexContainer>
					<StyledFlexContainer gap='1rem'>
						<CustomButton
							text='Add Custom Itinerary'
							color='orange'
							startIcon={<AddIcon />}
						/>
						<CustomButton
							text='Choose DMC'
							color='DMC'
							startIcon={<CheckCircleRoundedIcon />}
						/>
						<CustomButton
							text='Failed Itineraries'
							color='red'
							startIcon={<InfoRoundedIcon />}
						/>
					</StyledFlexContainer>
				</Paper>
				<StyledFlexContainer style={{ marginBottom: "2rem" }}>
					<Grid container justifyContent='space-between'>
						<Grid item xs={3}>
							<Paper
								style={{
									padding: "1rem",
									position: "sticky",
									height: "400px",
									top: "5rem",
								}}>
								asdf
							</Paper>
						</Grid>
						<Grid item xs={8}>
							<Paper
								style={{
									padding: "1rem",
									// position: "sticky",
									height: "1700px",
								}}>
								asdfasdf
							</Paper>
						</Grid>
					</Grid>
				</StyledFlexContainer>
			</Stack>
		</Stack>
	);
};

export default ListingPage;
