import {
	Autocomplete,
	Button,
	FormControl,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { StyledFlexContainer, StyledStack } from "../../styles/globalStyles";
import { StyledDashboardFormContainer, StyledDashboardRoot } from "./styled";
import { useState } from "react";
import useGetRegions from "./hooks/useGetRegions";
import useGetCities from "./hooks/useGetCities";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PackageDetails from "./modals/packageDetails";
import CustomTravellerPopOver from "../../components/custom-traveller-popover";
import AboutSection from "./aboutSection";
import { useNavigate } from "react-router-dom";

const NIGHT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const roomData = {
	adults: 2,
	kids: 0,
	infants: 0,
};

const Index = () => {
	const navigate = useNavigate();
	const { regions, error: errorRegions } = useGetRegions();

	const [currentRegion, setCurrentRegion] = useState("");
	const [currentRegionInputValue, setCurrentRegionInputValue] = useState("");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityInputValue] = useState("");
	const [checkInDate, setCheckInDate] = useState(new Date());
	const [nights, setNights] = useState(1);
	const [showDetailsPopup, setShowDetailsPopup] = useState(false);

	const { cities, error: errorCities } = useGetCities(currentRegion);
	const [travellerDetails, setTravellerDetails] = useState({
		0: roomData,
	});

	const handleChangeNight = (event) => setNights(event.target.value);
	const toggleDialogOpen = () => setShowDetailsPopup((prev) => !prev);
	const handleSearchPackages = () => {
		// toggleDialogOpen();
		navigate("/listing");
	};

	// eslint-disable-next-line no-unused-vars
	const validateFormData = (() => {
		return (
			!currentRegion ||
			!currentRegion.length ||
			!currentCity ||
			!currentCity.length ||
			!checkInDate
		);
	})();

	return (
		<>
			<StyledDashboardRoot rowGap={10}>
				<StyledFlexContainer fullWidth style={{ marginTop: "15%" }}>
					<StyledDashboardFormContainer
						rowGap={2}
						style={{ padding: "2rem 1rem" }}>
						<StyledFlexContainer style={{ color: "#fff" }}>
							Book your Jungle Experiences along with Safaris & Local Activities
						</StyledFlexContainer>
						<StyledFlexContainer flexSpaceBetween flexWrap>
							<StyledStack rowGap={1}>
								{errorRegions.length ? (
									<StyledFlexContainer style={{ color: "red" }}>
										Failed To Fetch Regions
									</StyledFlexContainer>
								) : null}
								{!errorRegions.length && (
									<StyledFlexContainer flexStart style={{ color: "#fff" }}>
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
										width: "15rem",
										maxWidth: "100%",
										background: "#fff",
										borderRadius: "0.5rem",
									}}
									size='small'
									renderInput={(params) => (
										<TextField {...params} placeholder='Select Region' />
									)}
								/>
							</StyledStack>
							<StyledStack rowGap={1}>
								{errorCities.length ? (
									<StyledFlexContainer style={{ color: "red" }}>
										Failed To Fetch Cities
									</StyledFlexContainer>
								) : null}
								{!errorCities.length && (
									<StyledFlexContainer flexStart style={{ color: "#fff" }}>
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
										width: "15rem",
										maxWidth: "100%",
										background: "#fff",
										borderRadius: "0.5rem",
									}}
									size='small'
									disabled={!currentRegion}
									renderInput={(params) => (
										<TextField {...params} placeholder='Select City' />
									)}
								/>
							</StyledStack>
						</StyledFlexContainer>
						<StyledFlexContainer
							flexStart
							flexWrap
							style={{ rowGap: "1rem", columnGap: "3.5rem" }}>
							<StyledStack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									CheckIn
								</StyledFlexContainer>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										sx={{
											background: "#fff",
											borderRadius: "0.5rem",
											maxWidth: "100%",
											width: "15rem",
										}}
										minDate={new Date()}
										value={checkInDate}
										onChange={(date) => setCheckInDate(date)}
										slotProps={{ textField: { size: "small" } }}
										format='dd-MMM-yyyy'
									/>
								</LocalizationProvider>
							</StyledStack>
							<StyledStack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									Number Of Nights
								</StyledFlexContainer>
								<FormControl sx={{ minWidth: 200 }}>
									<Select
										value={nights}
										onChange={handleChangeNight}
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}
										sx={{
											background: "#fff",
											borderRadius: "0.5rem",
											maxWidth: "100%",
											width: "15rem",
										}}
										size='small'>
										{NIGHT_OPTIONS.map((option) => (
											<MenuItem key={option} value={option}>
												{option === 1 ? `${option} Night` : `${option} Nights`}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</StyledStack>
							<StyledStack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									Travellers
								</StyledFlexContainer>
								<CustomTravellerPopOver
									travellerDetails={travellerDetails}
									setTravellerDetails={setTravellerDetails}
								/>
							</StyledStack>
						</StyledFlexContainer>
						<StyledFlexContainer flexEnd>
							<Button
								variant='contained'
								color='warning'
								onClick={handleSearchPackages}
								style={{ background: "#f90" }}
								fullWidth>
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
			<AboutSection />
		</>
	);
};

export default Index;
