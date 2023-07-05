/* eslint-disable react/prop-types */
import {
	Autocomplete,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Paper,
	Stack,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { StyledFlexContainer } from "../../../../styles/globalStyles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { THEME } from "../../../../styles/theme";
import CustomButton from "../../../../components/custom-button";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CityBox from "./cityBox";
import AddIcon from "@mui/icons-material/Add";
import { useRef } from "react";

const items = [
	{
		id: "city-1",
		cityData: {
			cityName: "",
			noOfNights: 1,
		},
	},
];

const cityObj = {
	id: "",
	cityData: {
		cityName: "",
		noOfNights: 1,
	},
};

const getItemStyle = (isDragging, draggableStyle) => ({
	userSelect: "none",
	background: isDragging ? "lightgreen" : "#fff",
	padding: "0.5rem 1rem",
	border: `1px solid ${THEME.border}`,
	margin: "0 0 1rem 0",
	// styles we need to apply on draggables
	...draggableStyle,
});

const CustomItinerary = ({ open, onClose }) => {
	const cityIdRef = useRef(1);
	const [itineraryData, setItineraryData] = useState(items);

	const handleDragEnd = (result) => {
		console.log({ result });
		if (!result.destination) return;
		console.log("here");
		const { source, destination } = result;
		const updatedItems = Array.from(itineraryData);
		const [movedItem] = updatedItems.splice(source.index, 1);
		updatedItems.splice(destination.index, 0, movedItem);

		setItineraryData(updatedItems);
	};

	const handleUpdateCityData = (index, data) => {
		// setItineraryData((prev) => ({ ...prev, [id]: data }));
		console.log({ index, data });
		console.log({ itineraryData });
		const newItineraryData = itineraryData.map((item, currIndex) =>
			currIndex === index ? data : item
		);
		setItineraryData(newItineraryData);
	};
	console.log({ itineraryData });
	const handleAddCity = () => {
		setItineraryData((prev) => [
			...prev,
			{ ...cityObj, id: `city-${cityIdRef.current + 1}` },
		]);
		cityIdRef.current += 1;
	};

	const handleRemoveCity = (index) => (event) => {
		console.log({ index, event });
		setItineraryData((prev) =>
			prev.filter((city, currIndex) => currIndex !== index)
		);
	};
	return (
		<Dialog onClose={onClose("customItineraryModal")} open={open}>
			<DialogTitle>
				<StyledFlexContainer flexSpaceBetween>
					Add Custom Itinerary
					<IconButton onClick={onClose("customItineraryModal")}>
						<CloseOutlinedIcon />
					</IconButton>
				</StyledFlexContainer>
			</DialogTitle>
			<DialogContent>
				<Stack rowGap={2}>
					<StyledFlexContainer>
						<Autocomplete
							// value={currentCity}
							// onChange={(event, newValue) => {
							// 	setCurrentCity(newValue);
							// }}
							// inputValue={currentCityInputValue}
							// onInputChange={(event, newInputValue) => {
							// 	setCurrentCityValue(newInputValue);
							// }}
							id='controllable-states-demo'
							options={[]}
							sx={{
								width: "100%",
								background: "#fff",
								borderRadius: "0.5rem",
							}}
							size='small'
							renderInput={(params) => (
								<TextField {...params} placeholder='Select Start City' />
							)}
						/>
					</StyledFlexContainer>
					<DragDropContext onDragEnd={handleDragEnd}>
						<Droppable droppableId='droppable'>
							{(provided) => (
								<Stack {...provided.droppableProps} ref={provided.innerRef}>
									{itineraryData.map((value, index) => (
										<Draggable
											key={value.id}
											draggableId={value.id}
											index={index}>
											{(provided, snapshot) => (
												<Paper
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													elevation={0}
													style={getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}>
													<CityBox
														cityData={value}
														index={index}
														updateCityData={handleUpdateCityData}
														handleRemoveCity={handleRemoveCity}
													/>
													{value.id}
												</Paper>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</Stack>
							)}
						</Droppable>
					</DragDropContext>
					<StyledFlexContainer flexStart>
						<CustomButton
							text='Add City'
							startIcon={<AddIcon />}
							color='orange'
							onClick={handleAddCity}
						/>
					</StyledFlexContainer>
				</Stack>
			</DialogContent>
			<DialogActions style={{ borderTop: `1px solid ${THEME.border}` }}>
				<StyledFlexContainer gap='1rem' style={{ padding: "0 1rem 0.5rem" }}>
					<CustomButton
						color='red'
						text='Cancel'
						onClick={onClose("customItineraryModal")}
					/>
					<CustomButton
						color='green'
						text='Save'
						onClick={onClose("customItineraryModal")}
					/>
				</StyledFlexContainer>
			</DialogActions>
		</Dialog>
	);
};

export default CustomItinerary;
