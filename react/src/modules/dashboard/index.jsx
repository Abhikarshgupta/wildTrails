import { Autocomplete, Button, TextField } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { StyledDashboardFormContainer, StyledDashboardRoot } from "./styled";
import { useState } from "react";
import useGetRegions from "./hooks/useGetRegions";
import useGetCities from "./hooks/useGetCities";

const Index = () => {
	const { regions } = useGetRegions();
	const { cities } = useGetCities();
	console.log({ cities });
	console.log({ regions });
	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	const [currentRegion, setCurrentRegion] = useState("");
	const [currentRegionInputValue, setCurrentRegionInputValue] = useState("");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityInputValue] = useState("");

	return (
		<StyledDashboardRoot rowGap={20}>
			<StyledFlexContainer flexEnd fullWidth style={{ padding: "1rem" }}>
				<Button
					variant='contained'
					color='error'
					size='small'
					onClick={handleLogout}>
					Logout
				</Button>
			</StyledFlexContainer>
			<StyledFlexContainer fullWidth>
				<StyledDashboardFormContainer
					rowGap={4}
					style={{ padding: "2rem 1rem" }}>
					<StyledFlexContainer style={{ color: "#fff" }}>
						Book your Jungle Experiences along with Safaris & Local Activities
					</StyledFlexContainer>
					<StyledFlexContainer flexSpaceBetween>
						<Autocomplete
							value={currentRegion}
							onChange={(event, newValue) => {
								setCurrentRegion(newValue);
							}}
							inputValue={currentRegionInputValue}
							onInputChange={(event, newInputValue) => {
								setCurrentRegionInputValue(newInputValue);
							}}
							id='controllable-states-demo'
							options={regions}
							sx={{
								width: "20rem",
								background: "#fff",
								borderRadius: "0.5rem",
							}}
							renderInput={(params) => (
								<TextField {...params} placeholder='Select Region' />
							)}
						/>
						<Autocomplete
							value={currentCity}
							onChange={(event, newValue) => {
								setCurrentCity(newValue);
							}}
							inputValue={currentCityInputValue}
							onInputChange={(event, newInputValue) => {
								setCurrentCityInputValue(newInputValue);
							}}
							id='controllable-states-demo'
							options={[]}
							sx={{
								width: "20rem",
								background: "#fff",
								borderRadius: "0.5rem",
							}}
							disabled={!currentRegion}
							renderInput={(params) => (
								<TextField {...params} placeholder='Select City' />
							)}
						/>
					</StyledFlexContainer>
				</StyledDashboardFormContainer>
			</StyledFlexContainer>
		</StyledDashboardRoot>
	);
};

export default Index;
