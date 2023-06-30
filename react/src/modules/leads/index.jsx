import { Stack } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import CustomTable from "../../components/custom-table";
import { FONTSTYLES } from "../../styles/theme";

const Leads = () => {
	return (
		<Stack rowGap={4} style={{ marginTop: "5rem", padding: "2rem 1rem" }}>
			<StyledFlexContainer flexStart style={FONTSTYLES.heading}>
				Leads Dashboard
			</StyledFlexContainer>
			<CustomTable columns={[]} rows={[]} />
		</Stack>
	);
};

export default Leads;
