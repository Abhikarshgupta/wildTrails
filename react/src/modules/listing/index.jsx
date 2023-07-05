import { Grid, Paper, Stack } from "@mui/material";
import CustomButton from "../../components/custom-button";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { FONTSTYLES } from "../../styles/theme";
import { StyledListingHeader } from "./styled";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CustomItinerary from "./modals/customItinerary";
import ChooseDMC from "./modals/chooseDMC";
import ItineraryCard from "./itineraryCard";

const x = new Array(100).fill("it");
const ListingPage = () => {
	const [showModal, setShowModal] = useState({
		customItineraryModal: false,
		chooseDMCModal: false,
		failedItinerariesModal: false,
	});
	const handleToggleModal = (modal) => () => {
		setShowModal((prev) => ({ ...prev, [modal]: !prev[modal] }));
	};
	return (
		<Stack rowGap={4}>
			<StyledListingHeader style={FONTSTYLES.heading}>
				Leads Dashboard
			</StyledListingHeader>
			<Stack style={{ padding: "0 1rem" }} gap={2}>
				<Paper
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: " 0.5rem 1rem",
						alignItems: "center",
						flexWrap: "wrap",
						rowGap: "1rem",
					}}>
					<StyledFlexContainer
						style={{ ...FONTSTYLES.subHeading, color: "#fd7145" }}>
						0 X Packages Below
					</StyledFlexContainer>
					<StyledFlexContainer gap='1rem' flexWrap flexStart>
						<CustomButton
							text='Add Custom Itinerary'
							color='orange'
							startIcon={<AddIcon />}
							onClick={handleToggleModal("customItineraryModal")}
						/>
						<CustomButton
							text='Choose DMC'
							color='DMC'
							startIcon={<CheckCircleRoundedIcon />}
							onClick={handleToggleModal("chooseDMCModal")}
						/>
						<CustomButton
							text='Failed Itineraries'
							color='red'
							startIcon={<InfoRoundedIcon />}
							onClick={handleToggleModal("failedItinerariesModal")}
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
							<Stack rowGap={3}>
								{x.map((item, index) => (
									<ItineraryCard key={index} data={item} />
								))}
							</Stack>
						</Grid>
					</Grid>
				</StyledFlexContainer>
			</Stack>
			{showModal.customItineraryModal && (
				<CustomItinerary
					open={showModal.customItineraryModal}
					onClose={handleToggleModal}
				/>
			)}
			{showModal.chooseDMCModal && (
				<ChooseDMC
					open={showModal.chooseDMCModal}
					onClose={handleToggleModal}
				/>
			)}
		</Stack>
	);
};

export default ListingPage;
