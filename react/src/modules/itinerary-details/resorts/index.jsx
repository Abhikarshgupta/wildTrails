/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Stack } from "@mui/system";

const CustomAccordion = ({
	expanded,
	onChange,
	id,
	summaryData,
	detailsData,
}) => {
	return (
		<Accordion
			expanded={expanded}
			onChange={onChange(id)}
			disableGutters
			sx={{ background: "#3d703d", color: "#fff" }}>
			<AccordionSummary
				expandIcon={<AddBoxIcon sx={{ fill: "#fff" }} />}
				aria-controls='panel1bh-content'
				id='panel1bh-header'
				sx={{ maxHeight: "2.4rem", minHeight: "2rem" }}>
				<Typography sx={{ width: "33%", flexShrink: 0 }}>
					{summaryData}
				</Typography>
				<Typography>I am an accordion</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{detailsData}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

const accordionData = [
	{
		id: "acc1",
		summaryData: "asdf",
		detailsData: "qwer",
	},
	{
		id: "acc2",
		summaryData: "asdfacc2",
		detailsData: "qweracc2",
	},
	{
		id: "acc3",
		summaryData: "asdfacc3",
		detailsData: "qweracc3",
	},
	{
		id: "acc4",
		summaryData: "asdfacc4",
		detailsData: "qweracc4",
	},
];

const Resorts = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Stack style={{ height: "1000px" }} rowGap={2}>
			{accordionData.map((accordion) => (
				<CustomAccordion
					key={accordion.id}
					id={accordion.id}
					expanded={expanded === accordion.id}
					onChange={handleChange}
					summaryData={accordion.summaryData}
					detailsData={accordion.detailsData}
				/>
			))}
		</Stack>
	);
};

export default Resorts;
