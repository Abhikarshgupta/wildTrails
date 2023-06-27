/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import IncrementDecrement from "./incrementDecrement";

const SingleRoomContainer = ({
	roomNumber = 0,
	currentRoomDetails = { adults: 0, kids: 0, infants: 0 },
	handleUpdateRoomDetails = () => {},
	showAddRoom = false,
	handleAddRoom = () => {},
	handleRemoveRoom = () => {},
	showRemoveRoom = false,
	roomId,
}) => {
	const { adults, kids, infants } = currentRoomDetails;
	const handleIncrement = (travellerType) => {
		handleUpdateRoomDetails(roomId, {
			...currentRoomDetails,
			[travellerType]: currentRoomDetails[travellerType] + 1,
		});
	};
	const handleDecrement = (travellerType) => {
		// don't delete last adult
		if (
			roomId === 0 &&
			travellerType === "adults" &&
			currentRoomDetails["adults"] === 1
		) {
			return;
		}
		handleUpdateRoomDetails(roomId, {
			...currentRoomDetails,
			[travellerType]: Math.max(currentRoomDetails[travellerType] - 1, 0),
		});
	};
	return (
		<>
			<Stack
				rowGap={1}
				style={{
					borderBottom: "1px dotted lightgrey",
					padding: "0.5em 0",
				}}>
				<StyledFlexContainer flexStart gap='1em'>
					<p>Room {roomNumber + 1} </p>
					{showRemoveRoom && (
						<StyledFlexContainer
							pointer
							flexStart
							onClick={() => handleRemoveRoom(roomId)}
							style={{ color: "red" }}>
							Remove
						</StyledFlexContainer>
					)}
				</StyledFlexContainer>
				<StyledFlexContainer flexSpaceBetween>
					<Stack>
						<p>Adults</p> <p>(13 yrs and above)</p>
					</Stack>
					<StyledFlexContainer>
						<IncrementDecrement
							count={adults}
							handleDecrement={() => handleDecrement("adults")}
							handleIncrement={() => handleIncrement("adults")}
						/>
					</StyledFlexContainer>
				</StyledFlexContainer>
				<StyledFlexContainer flexSpaceBetween>
					<Stack>
						<p>Kids</p> <p>(6yrs - 13yrs)</p>
					</Stack>
					<StyledFlexContainer>
						<IncrementDecrement
							count={kids}
							handleDecrement={() => handleDecrement("kids")}
							handleIncrement={() => handleIncrement("kids")}
						/>
					</StyledFlexContainer>
				</StyledFlexContainer>
				<StyledFlexContainer flexSpaceBetween>
					<Stack>
						<p>Infants</p> <p>(0yrs - 6yrs)</p>
					</Stack>
					<StyledFlexContainer>
						<IncrementDecrement
							count={infants}
							handleDecrement={() => handleDecrement("infants")}
							handleIncrement={() => handleIncrement("infants")}
						/>
					</StyledFlexContainer>
				</StyledFlexContainer>
			</Stack>
			{showAddRoom && (
				<StyledFlexContainer
					pointer
					flexStart
					onClick={handleAddRoom}
					style={{ marginTop: "0.5em", color: "blue" }}>
					+ Add Room
				</StyledFlexContainer>
			)}
		</>
	);
};

export default SingleRoomContainer;
