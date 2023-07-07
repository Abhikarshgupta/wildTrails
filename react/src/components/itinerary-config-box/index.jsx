import {
	Autocomplete,
	Button,
	FormControl,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FONTSTYLES } from "../../styles/theme";
import useGetCities from "../../modules/dashboard/hooks/useGetCities";
import useGetRegions from "../../modules/dashboard/hooks/useGetRegions";
import { StyledFlexContainer, StyledStack } from "../../styles/globalStyles";
import CustomTravellerPopOver from "../custom-traveller-popover";
const NIGHT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const roomData = {
	adults: 2,
	kids: 0,
	infants: 0,
};

const ItineraryConfigBox = () => {
	const navigate = useNavigate();
	const { regions, error: errorRegions } = useGetRegions();

	const [currentRegion, setCurrentRegion] = useState("");
	const [currentRegionInputValue, setCurrentRegionInputValue] = useState("");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityInputValue] = useState("");
	const [checkInDate, setCheckInDate] = useState(new Date());
	const [nights, setNights] = useState(1);
	// const [showDetailsPopup, setShowDetailsPopup] = useState(false);

	const { cities, error: errorCities } = useGetCities(currentRegion);
	const [travellerDetails, setTravellerDetails] = useState({
		0: roomData,
	});

	const handleChangeNight = (event) => setNights(event.target.value);
	// const toggleDialogOpen = () => setShowDetailsPopup((prev) => !prev);
	const handleSearchPackages = () => {
		// toggleDialogOpen();
		navigate("/listing");
	};

	return (
		<StyledFlexContainer
			id='ItineraryConfigBox'
			flexWrap
			style={{
				padding: "1rem",
				gap: "1rem",
				alignItems: "flex-end",
				background: "#fff",
				borderRadius: "0.5rem",
			}}>
			<StyledStack rowGap={1} style={{ minWidth: "10rem" }}>
				{errorRegions.length ? (
					<StyledFlexContainer style={{ color: "red" }}>
						Failed To Fetch Regions
					</StyledFlexContainer>
				) : null}
				{!errorRegions.length && (
					<StyledFlexContainer flexStart style={FONTSTYLES.label}>
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
			<StyledStack rowGap={1} style={{ minWidth: "10rem" }}>
				{errorCities.length ? (
					<StyledFlexContainer style={{ color: "red" }}>
						Failed To Fetch Cities
					</StyledFlexContainer>
				) : null}
				{!errorCities.length && (
					<StyledFlexContainer flexStart style={FONTSTYLES.label}>
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
			<StyledStack rowGap={1}>
				<StyledFlexContainer style={FONTSTYLES.label} flexStart>
					CheckIn
				</StyledFlexContainer>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						sx={{
							background: "#fff",
							borderRadius: "0.5rem",
							maxWidth: "100%",
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
				<StyledFlexContainer style={FONTSTYLES.label} flexStart>
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
				<StyledFlexContainer style={FONTSTYLES.label} flexStart>
					Travellers
				</StyledFlexContainer>
				<CustomTravellerPopOver
					travellerDetails={travellerDetails}
					setTravellerDetails={setTravellerDetails}
				/>
			</StyledStack>
			<StyledFlexContainer flexEnd>
				<Button
					variant='contained'
					color='warning'
					onClick={handleSearchPackages}
					style={{ background: "#f90" }}
					fullWidth>
					Search
				</Button>
			</StyledFlexContainer>
		</StyledFlexContainer>
	);
};

export default ItineraryConfigBox;
