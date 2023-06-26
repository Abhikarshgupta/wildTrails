import { Button, Stack } from "@mui/material";
import React from "react";
import { StarIconSVG } from "../../assets";
import { StyledFlexContainer } from "../../styles/globalStyles";

const FEATURES = [
	"Free Import of Hotel Data/Rates",
	"Automatic Price Costing (Child policy supported)",
	"Cost breakup",
	"Itinerary Builder",
	"Itinerary PDF Builder",
	"Itinerary Paper Output",
	"Dynamic Map based on itinerary",
	"All type of seasons supported",
	"Itinerary comparisons with cost",
	"Share option via whatsapp & email",
	"Automatic booking voucher",
	"Multip Language itinerary support",
	"Mobile Version",
];

const AboutSection = () => {
	return (
		<>
			<Stack rowGap={2} alignItems='center' style={{ padding: "2rem" }}>
				<StyledFlexContainer>Pricing and Plans</StyledFlexContainer>
				<StyledFlexContainer>
					Special offer if you sign up before xyz
				</StyledFlexContainer>
				<StyledFlexContainer gap='2em'>
					<Stack
						style={{
							border: "1px solid lightgrey",
							padding: "0.5rem",
							borderRadius: "5px",
							minWidth: "30rem",
						}}>
						<StyledFlexContainer
							style={{ padding: "1rem", background: "#ff98003b" }}>
							VIRTUAL LITE
						</StyledFlexContainer>
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#ffd49f21" }}>
							1 User
						</StyledFlexContainer>
						{FEATURES.map((feature, index) => (
							<StyledFlexContainer
								style={{
									padding: "0.25rem",
									background: index % 2 === 0 ? "#ff98003b" : "#ffd49f21",
									paddingLeft: "4rem",
								}}
								key={index}
								gap='1rem'
								flexStart>
								<StarIconSVG fill='#f90' height='1rem' width='1rem' />
								{feature}
							</StyledFlexContainer>
						))}
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#ffd49f21" }}>
							Start your 60 days free trial. No cancellation fees. No credit
							card required!
						</StyledFlexContainer>
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#ff98003b" }}>
							<Button
								variant='contained'
								color='warning'
								style={{ background: "#f90" }}>
								Signup for Free!
							</Button>
						</StyledFlexContainer>
					</Stack>
					<Stack
						style={{
							border: "1px solid lightgrey",
							padding: "0.5rem",
							borderRadius: "5px",
							minWidth: "30rem",
						}}>
						<StyledFlexContainer
							style={{ padding: "1rem", background: "#4caf5087" }}>
							VIRTUAL ENTERPRISE
						</StyledFlexContainer>
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#4caf502e" }}>
							5 Users
						</StyledFlexContainer>
						{FEATURES.map((feature, index) => (
							<StyledFlexContainer
								style={{
									padding: "0.25rem",
									background: index % 2 === 0 ? "#4caf5087" : "#4caf502e",
									paddingLeft: "4rem",
								}}
								key={index}
								gap='1rem'
								flexStart>
								<StarIconSVG fill='#4caf50' height='1rem' width='1rem' />
								{feature}
							</StyledFlexContainer>
						))}
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#4caf502e" }}>
							Start your 60 days free trial. No cancellation fees. No credit
							card required!
						</StyledFlexContainer>
						<StyledFlexContainer
							style={{ padding: "0.5rem", background: "#4caf5087" }}>
							<Button
								variant='contained'
								color='warning'
								style={{ background: "#f90" }}>
								Signup for Free!
							</Button>
						</StyledFlexContainer>
					</Stack>
				</StyledFlexContainer>
			</Stack>
		</>
	);
};

export default AboutSection;
