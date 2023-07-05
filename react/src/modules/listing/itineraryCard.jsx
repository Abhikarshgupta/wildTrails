import { Grid, Paper } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";

const ItineraryCard = () => {
	return (
		<Paper
			style={{
				padding: "1rem",
				borderRadius: "5px",
			}}>
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
			</Grid>
			<StyledFlexContainer flexStart gap='2rem' flexWrap></StyledFlexContainer>
		</Paper>
	);
};

export default ItineraryCard;
