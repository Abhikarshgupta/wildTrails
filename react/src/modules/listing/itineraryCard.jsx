import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledFlexContainer } from "../../styles/globalStyles";

const ItineraryCard = () => {
	const navigate = useNavigate();
	const handleItemClick = () => {
		navigate("/itinerary/id");
	};
	return (
		<Paper
			style={{
				padding: "1rem",
				borderRadius: "5px",
				cursor: "pointer",
			}}
			onClick={handleItemClick}>
			<Grid container>
				<Grid item xs={12} sm={2}>
					<StyledFlexContainer
						style={{
							background: "green",
							height: "8rem",
							borderRadius: "5px",
						}}></StyledFlexContainer>
				</Grid>
				<Grid item xs={12} sm={7}>
					<StyledFlexContainer>asdf;jalsdf</StyledFlexContainer>
				</Grid>
				<Grid item xs={12} sm={3}>
					<StyledFlexContainer style={{ borderLeft: "1px solid grey" }}>
						details
					</StyledFlexContainer>
				</Grid>
			</Grid>
			<StyledFlexContainer flexStart gap='2rem' flexWrap></StyledFlexContainer>
		</Paper>
	);
};

export default ItineraryCard;
