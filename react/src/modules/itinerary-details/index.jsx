import { Box, Grid, Paper, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const tabValueToContainerMap = {
	0: "ItineraryOverview",
	1: "ItineraryResorts",
	2: "ItineraryCabs",
	3: "ItineraryDetails",
	4: "HowToGetThere",
	5: "COVID19",
};
const ItineraryDetails = () => {
	const [tabValue, setTabValue] = useState(0);

	const handleToggleTab = (event, newValue) => {
		setTabValue(newValue);
		const requiredElement = document.getElementById(
			tabValueToContainerMap[newValue]
		);
		console.log({ requiredElement });
		requiredElement?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start",
		});
	};

	return (
		<Stack style={{ marginTop: "4rem" }} rowGap={4}>
			<Grid container>
				<Grid item xs={0} sm={1}></Grid>
				<Grid item xs={12} sm={10}>
					<Stack rowGap={2}>
						<Box
							style={{ position: "sticky", background: "#fff", top: "3rem" }}>
							<Box>
								<Tabs
									value={tabValue}
									onChange={handleToggleTab}
									variant='scrollable'
									scrollButtons='auto'
									aria-label='scrollable auto
					tabs example'>
									<Tab label='Overview' value={0} />
									<Tab label='Resorts' value={1} />
									<Tab label='Cabs' value={2} />
									<Tab label='Itinerary' value={3} />
									<Tab label='How to get there?' value={4} />
									<Tab label='COVID-19' value={5} />
								</Tabs>
							</Box>
							<Paper>this is itinerary details</Paper>
							<Paper>searchBox</Paper>
						</Box>
						<Stack rowGap={2} marginBottom={2}>
							<Paper style={{ height: "1000px" }}> current package data</Paper>
							<Paper id='ItineraryOverview' style={{ height: "1000px" }}>
								Overview box with map, description, Route vertical stepper
							</Paper>
							<Box id='ItineraryResorts'>
								<Stack style={{ height: "1000px", marginTop: "4rem" }}>
									Resorts Accordions with margins
								</Stack>
							</Box>
							<Paper id='ItineraryCabs' style={{ height: "1000px" }}>
								Itinerary Cabs aasdf config cab modal + display
							</Paper>
							<Paper id='ItineraryDetails' style={{ height: "1000px" }}>
								edit itinerary + info + inclusion and exclusions this needs a
								wysiwyg editor
							</Paper>
							<Box id='HowToGetThere'>
								<Stack style={{ height: "1000px", marginTop: "4rem" }}>
									How to get there accordion
								</Stack>
							</Box>
							<Box id='COVID19'>
								<Stack style={{ height: "1000px", marginTop: "4rem" }}>
									Covid 19 restrictions accordion
								</Stack>
							</Box>
							<Box>Terms and conditions modal</Box>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={0} sm={1}></Grid>
			</Grid>
		</Stack>
	);
};

export default ItineraryDetails;
