import { Popover, Stack } from "@mui/material";
import React, { useState } from "react";
import { StyledFlexContainer } from "../../styles/globalStyles";
import SingleRoomContainer from "./singleRoomContainer";

const roomData = {
	adults: 2,
	kids: 0,
	infants: 0,
};

const travellerDisplayNameMap = {
	adults: "Adult",
	kids: "Kid",
	infants: "Infant",
	rooms: "Room",
};

const generateTextForParsedTravellerDetails = (travellerData) => {
	return Object.entries(travellerData).map(([name, count], index) => {
		return count > 0
			? `${count} ${travellerDisplayNameMap[name]}${count > 1 ? "s" : ""}${
					index !== Object.keys(travellerData).length - 1 ? "," : ""
			  } `
			: "";
	});
};
const CustomTravellerPopOver = ({ travellerDetails, setTravellerDetails }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleTravellerDetails = (roomId, newRoomData) => {
		setTravellerDetails((prev) => ({ ...prev, [roomId]: newRoomData }));
	};

	const handleAddExtraRoom = () => {
		setTravellerDetails((prev) => ({
			...prev,
			[Object.keys(prev).length]: roomData,
		}));
	};

	const handleRemoveRoom = (roomId) => {
		const travellerDetailsCopy = { ...travellerDetails };
		delete travellerDetailsCopy[roomId];

		setTravellerDetails(travellerDetailsCopy);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const parsedTravellerDetails = Object.values(travellerDetails).reduce(
		(travellerCounts, roomDetails) => {
			const { adults, kids, infants } = roomDetails;
			travellerCounts.adults += adults;
			travellerCounts.kids += kids;
			travellerCounts.infants += infants;
			travellerCounts.rooms += 1;
			return travellerCounts;
		},
		{ adults: 0, kids: 0, infants: 0, rooms: 0 }
	);

	return (
		<>
			<StyledFlexContainer
				onClick={handleClick}
				pointer
				style={{
					background: "#fff",
					borderRadius: "5px",
					minWidth: "20em",
					minHeight: "2.4em",
				}}>
				{generateTextForParsedTravellerDetails(parsedTravellerDetails)}
			</StyledFlexContainer>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				style={{ marginTop: "1em" }}>
				<Stack
					style={{
						maxHeight: "15em",
						overflowY: "auto",
						width: "20em",
						padding: "0.5em",
					}}>
					{Object.entries(travellerDetails).map(
						([roomId, roomDetails], index) => (
							<SingleRoomContainer
								roomNumber={index}
								handleUpdateRoomDetails={handleTravellerDetails}
								currentRoomDetails={roomDetails}
								showAddRoom={index === Object.keys(travellerDetails).length - 1}
								handleAddRoom={handleAddExtraRoom}
								handleRemoveRoom={handleRemoveRoom}
								showRemoveRoom={index !== 0}
								roomId={Number(roomId)}
							/>
						)
					)}
				</Stack>
			</Popover>
		</>
	);
};

export default CustomTravellerPopOver;
