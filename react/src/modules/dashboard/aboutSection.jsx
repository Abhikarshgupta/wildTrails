import { Button, Grid, Stack } from "@mui/material";
import { memo } from "react";
import { THEME } from "../../styles/theme";
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
			<Stack rowGap={4} alignItems='center' style={{ padding: "2rem" }}>
				<StyledFlexContainer>Pricing and Plans</StyledFlexContainer>
				<StyledFlexContainer>
					Special offer if you sign up before xyz
				</StyledFlexContainer>
				<StyledFlexContainer gap='2em' flexWrap>
					<Stack
						style={{
							border: "1px solid lightgrey",
							padding: "0.5rem",
							borderRadius: "5px",
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
				<Grid container>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Stack rowGap={4}>
							<StyledFlexContainer flexStart fullWidth>
								How does it work?
							</StyledFlexContainer>
							<StyledFlexContainer
								flexStart
								fullWidth
								style={{ marginLeft: "1rem" }}>
								<ol type='1'>
									<li>
										In case you are a new user, please register your details
									</li>
									<li>
										On successful registration, please get in touch with us
										(East Africa:{" "}
										<a
											href='mailto:sales01@hodariafrica.com'
											style={{ color: THEME.warningHeavy }}>
											sales01@hodariafrica.com
										</a>{" "}
										or Whatsapp Mobile:{" "}
										<a
											href='https://wa.me/254708115622'
											style={{ color: THEME.warningHeavy }}>
											+254 708115622
										</a>{" "}
										/{" "}
										<a
											href='tel://+254746872870'
											style={{ color: THEME.warningHeavy }}>
											+254 746872870
										</a>{" "}
										& India :{" "}
										<a
											href='mailto:geeta@safariin3clicks.com'
											style={{ color: THEME.warningHeavy }}>
											geeta@safariin3clicks.com
										</a>
										, Whatsapp Number:
										<a
											href='https://wa.me/919953845495'
											style={{ color: THEME.warningHeavy }}>
											+919953845495{" "}
										</a>
										) for the rate-card access to the key in your prices
									</li>
									<li>
										Once access is provided, Go to the home page & click on
										"Access my Rate table" followed by "Update my rate table"
									</li>
									<li>
										That’s it. Now you are all set. Your Safari-in-3clicks
										portal is fully functional to use!!
									</li>
								</ol>
							</StyledFlexContainer>
							<StyledFlexContainer flexStart fullWidth>
								What does it do?
							</StyledFlexContainer>
							<StyledFlexContainer>
								It generates your safari itineraries in just 3 clicks. Just
								enter your rate card (just once) (see "How does it work"), then
								you key in the number of nights, number of people, and check-in
								date and click on generate itineraries and it will generate all
								possible itineraries with costing. All you have to do is pick
								the right itinerary and click "generate pdf" of that itinerary
								and then share it with your client. The itinerary pdf has all
								details including cost, cost-breakup (optional), detailed
								itinerary with images, and all activities.
							</StyledFlexContainer>
							<StyledFlexContainer flexStart fullWidth>
								Who are the ideal users for this software?
							</StyledFlexContainer>
							<StyledFlexContainer flexStart fullWidth>
								If you are a travel agent and serving your clients in generating
								safari itineraries for Africa. [Currently supporting only Kenya
								and Tanzania; Other African countries are coming soon and also
								India]
							</StyledFlexContainer>
							<StyledFlexContainer flexStart fullWidth>
								Contact Info:
							</StyledFlexContainer>
							<StyledFlexContainer
								flexStart
								fullWidth
								flexWrap
								style={{ background: "#f8f0e3", padding: "1rem" }}>
								<b style={{ marginRight: "0.2rem" }}>East Africa : </b>
								<a
									href='mailto:sales01@hodariafrica.com'
									style={{ color: THEME.warningHeavy }}>
									sales01@hodariafrica.com
								</a>
								<span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
									or Whatsapp Mobile:
								</span>
								<a
									href='https://wa.me/254708115622'
									style={{ color: THEME.warningHeavy }}>
									+254 708115622
								</a>{" "}
								/{" "}
								<a
									href='https://wa.me/254746872870'
									style={{ color: THEME.warningHeavy }}>
									+254 746872870
								</a>
							</StyledFlexContainer>
							<StyledFlexContainer
								flexStart
								fullWidth
								flexWrap
								style={{ background: "#f8f0e3", padding: "1rem" }}>
								<b style={{ marginRight: "0.2rem" }}>India: </b>
								<a
									href='mailto:saleskenya@safariin3clicks.com'
									style={{ color: THEME.warningHeavy }}>
									geeta@safariin3clicks.com
								</a>
								<span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
									or Whatsapp Mobile:
								</span>
								<a
									href='https://wa.me/919953845495'
									style={{ color: THEME.warningHeavy }}>
									+919953845495
								</a>
							</StyledFlexContainer>
						</Stack>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
			</Stack>
		</>
	);
};

const MemoizedAbout = memo(AboutSection);
export default MemoizedAbout;
