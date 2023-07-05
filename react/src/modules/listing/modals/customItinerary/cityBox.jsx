/* eslint-disable react/prop-types */
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import CustomTextInput from "../../../../components/custom-textInput";
import { StyledFlexContainer } from "../../../../styles/globalStyles";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveIcon from "@mui/icons-material/Remove";
import { THEME } from "../../../../styles/theme";
const CityBox = ({ cityData, updateCityData, index, handleRemoveCity }) => {
	// const [noOfNights, setNoOfNights] = useState("1");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityValue] = useState("");

	const handleSetNumberOfNights = (e) => {
		const currentNum = Number(e.target.value);
		if (currentNum > 0) {
			updateCityData(index, {
				...cityData,
				cityData: { ...cityData.cityData, noOfNights: currentNum },
			});
		}
	};
	return (
		<StyledFlexContainer gap='2rem'>
			<DragIndicatorIcon />
			<Autocomplete
				value={currentCity}
				onChange={(event, newValue) => {
					setCurrentCity(newValue);
				}}
				inputValue={currentCityInputValue}
				onInputChange={(event, newInputValue) => {
					setCurrentCityValue(newInputValue);
				}}
				id='controllable-states-demo'
				options={[]}
				sx={{
					width: "15rem",
					maxWidth: "100%",
					background: "#fff",
					borderRadius: "0.5rem",
				}}
				size='small'
				renderInput={(params) => (
					<TextField {...params} placeholder='Select City' />
				)}
			/>
			<CustomTextInput
				inputType='number'
				placeholder='No. of nights'
				value={cityData?.cityData?.noOfNights}
				onChange={handleSetNumberOfNights}
			/>
			<StyledFlexContainer
				style={{
					borderRadius: "3px",
					background: THEME.danger,
					color: "#fff",
				}}>
				<IconButton onClick={handleRemoveCity(index)} sx={{ color: "inherit" }}>
					<RemoveIcon />
				</IconButton>
			</StyledFlexContainer>
		</StyledFlexContainer>
	);
};

export default CityBox;
