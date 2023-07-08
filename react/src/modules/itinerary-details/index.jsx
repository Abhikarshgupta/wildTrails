import {
	Box,
	Grid,
	Paper,
	Stack,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ItineraryConfigBox from "../../components/itinerary-config-box";
import CostBreakup from "./modals/costBreakup";
import Resorts from "./resorts";

const tabValueToContainerMap = {
	"-1": "ItineraryConfig",
	0: "ItineraryOverview",
	1: "ItineraryResorts",
	2: "ItineraryCabs",
	3: "ItineraryDetails",
	4: "HowToGetThere",
	5: "COVID19",
};
const steps = [
	{
		label: "Select campaign settings",
		description: `For each ad campaign that you create, you can control how much
				you're willing to spend on clicks and conversions, which networks
				and geographical locations you want your ads to show on, and more.`,
	},
	{
		label: "Create an ad group",
		description:
			"An ad group contains one or more ads which target a shared set of keywords.",
	},
	{
		label: "Create an ad",
		description: `Try out different ad text to see what brings in the most customers,
				and learn how to enhance your ads using features like ad extensions.
				If you run into any problems with your ads, find out how to tell if
				they're running and how to resolve approval issues.`,
	},
];

const topHeaderHeight = 80;
const ItineraryDetails = () => {
	const [tabValue, setTabValue] = useState(-1);
	const [showCostBreakupModal, setShowCostBreakupModal] = useState(false);

	const handleToggleTab = (event, newValue) => {
		setTabValue(newValue);
		const element = document.getElementById(tabValueToContainerMap[newValue]);
		const headerEl = document.getElementById("HeaderBox");
		const offsetPosition =
			element.offsetTop - headerEl?.offsetHeight - topHeaderHeight;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};
	const handleToggleCostBreakupModal = () => {
		setShowCostBreakupModal((prev) => !prev);
	};

	useEffect(() => {
		const element = document.getElementById("ItineraryConfig");
		const headerEl = document.getElementById("HeaderBox");
		const offsetPosition =
			element.offsetTop - headerEl?.offsetHeight - topHeaderHeight - 20;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}, []);

	return (
		<Stack style={{}} rowGap={4}>
			<Grid container>
				<Grid item xs={0} sm={1}></Grid>
				<Grid item xs={12} sm={10}>
					<Stack rowGap={2}>
						<Box
							id='HeaderBox'
							style={{
								position: "sticky",
								background: "#fff",
								top: "4rem",
								zIndex: "1",
							}}>
							<Box>
								<Tabs
									value={tabValue}
									onChange={handleToggleTab}
									variant='scrollable'
									scrollButtons='auto'
									aria-label='scrollable autotabs example'>
									<Tab label='Itinerary' value={-1} />
									<Tab label='Overview' value={0} />
									<Tab label='Resorts' value={1} />
									<Tab label='Cabs' value={2} />
									<Tab label='Itinerary' value={3} />
									<Tab label='How to get there?' value={4} />
									<Tab label='COVID-19' value={5} />
								</Tabs>
							</Box>
							<Paper>
								<Grid container>
									<Grid item xs={12} sm={6}>
										itinerary title with route
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										onClick={handleToggleCostBreakupModal}>
										itinereary cost + breakup
									</Grid>
									<Grid item xs={12} sm={2}>
										CTA buttons
									</Grid>
								</Grid>

								<ItineraryConfigBox />
							</Paper>
						</Box>
						<Stack rowGap={2} marginBottom={2}>
							<Paper
								id='ItineraryConfig'
								style={{ height: "1000px", marginTop: "4rem" }}>
								current package data image + trip details
							</Paper>
							<Paper id='ItineraryOverview' style={{ height: "1000px" }}>
								Overview box with map, description, Route vertical stepper
								<Stepper activeStep={-1} orientation='vertical'>
									{steps.map((step) => (
										<Step key={step.label}>
											<StepLabel>{step.label}</StepLabel>
											<StepContent>
												<Typography>{step.description}</Typography>
											</StepContent>
										</Step>
									))}
								</Stepper>
							</Paper>
							<Box id='ItineraryResorts'>
								<Resorts />
							</Box>
							<Paper id='ItineraryCabs' style={{ height: "1000px" }}>
								Itinerary Cabs aasdf config cab modal + display
							</Paper>
							<Paper id='ItineraryDetails' style={{ height: "1000px" }}>
								edit itinerary + info + inclusion and exclusions this needs a
								wysiwyg editor
							</Paper>
							<Box id='HowToGetThere'>
								<Stack style={{ height: "1000px" }}>
									How to get there accordion
								</Stack>
							</Box>
							<Box id='COVID19'>
								<Stack style={{ height: "1000px" }}>
									Covid 19 restrictions accordion
								</Stack>
							</Box>
							<Box>Terms and conditions modal</Box>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={0} sm={1}></Grid>
			</Grid>
			{showCostBreakupModal && (
				<CostBreakup
					open={showCostBreakupModal}
					onClose={handleToggleCostBreakupModal}
					costs={tabValueToContainerMap}
				/>
			)}
		</Stack>
	);
};

export default ItineraryDetails;
