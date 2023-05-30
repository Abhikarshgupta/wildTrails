import {
	Autocomplete,
	Button,
	FormControl,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { StyledDashboardFormContainer, StyledDashboardRoot } from "./styled";
import { useState } from "react";
import useGetRegions from "./hooks/useGetRegions";
import useGetCities from "./hooks/useGetCities";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PackageDetails from "./modals/packageDetails";

const NIGHT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Index = () => {
	const { regions, error: errorRegions } = useGetRegions();
	const { cities, error: errorCities } = useGetCities();

	const [currentRegion, setCurrentRegion] = useState("");
	const [currentRegionInputValue, setCurrentRegionInputValue] = useState("");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityInputValue] = useState("");
	const [checkInDate, setCheckInDate] = useState(null);
	const [nights, setNights] = useState(1);
	const [showDetailsPopup, setShowDetailsPopup] = useState(false);

	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	const handleChangeNight = (event) => setNights(event.target.value);
	const toggleDialogOpen = () => setShowDetailsPopup((prev) => !prev);
	const handleSearchPackages = () => {
		toggleDialogOpen();
	};
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
						<StyledFlexContainer column>
							{errorRegions.length && (
								<StyledFlexContainer style={{ color: "red" }}>
									Failed To Fetch Regions
								</StyledFlexContainer>
							)}
							{!errorRegions.length && (
								<StyledFlexContainer style={{ color: "#fff" }}>
									Select Region
								</StyledFlexContainer>
							)}
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
						</StyledFlexContainer>
						<StyledFlexContainer column>
							{errorCities.length && (
								<StyledFlexContainer style={{ color: "red" }}>
									Failed To Fetch Cities
								</StyledFlexContainer>
							)}
							{!errorCities.length && (
								<StyledFlexContainer style={{ color: "#fff" }}>
									Select City
								</StyledFlexContainer>
							)}
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
								options={cities}
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
					</StyledFlexContainer>
					<StyledFlexContainer flexSpaceBetween>
						<Stack rowGap={1}>
							<StyledFlexContainer style={{ color: "#fff" }} flexStart>
								CheckIn
							</StyledFlexContainer>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									sx={{ background: "#fff", borderRadius: "0.5rem" }}
									minDate={new Date()}
									value={checkInDate}
									onChange={(date) => setCheckInDate(date)}
								/>
							</LocalizationProvider>
						</Stack>
						<Stack rowGap={1}>
							<StyledFlexContainer style={{ color: "#fff" }} flexStart>
								Number Of Nights
							</StyledFlexContainer>
							<FormControl sx={{ minWidth: 200 }}>
								<Select
									value={nights}
									onChange={handleChangeNight}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
									sx={{ background: "#fff", borderRadius: "0.5rem" }}>
									{NIGHT_OPTIONS.map((option) => (
										<MenuItem key={option} value={option}>
											{option === 1 ? `${option} Night` : `${option} Nights`}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Stack>
					</StyledFlexContainer>
					<StyledFlexContainer>
						<Button
							variant='contained'
							color='warning'
							onClick={handleSearchPackages}>
							Search Packages
						</Button>
					</StyledFlexContainer>
				</StyledDashboardFormContainer>
			</StyledFlexContainer>
			{showDetailsPopup && (
				<PackageDetails
					toggleDialogOpen={toggleDialogOpen}
					showDetailsPopup={showDetailsPopup}
					currentRegion={currentRegion}
					currentCity={currentCity}
					checkInDate={checkInDate}
					nights={nights}
				/>
			)}
		</StyledDashboardRoot>
	);
};

export default Index;
