import { useEffect } from "react";
import "./App.css";
import { UpArrowCircleSVG } from "./assets";
import Routes from "./routes";
const gooogleClientID =
	"196812285925-dbq9inmgudqil50jer1ods8aa6cj4abi.apps.googleusercontent.com";

function App() {
	useEffect(() => {
		window?.google?.accounts?.id?.initialize({
			client_id: gooogleClientID,
		});
		const handleScrollTop = () => {
			const scrollBtn = document.getElementById("scrollTopBtn");
			if (
				document.body.scrollTop > 50 ||
				document.documentElement.scrollTop > 50
			) {
				scrollBtn.style.display = "flex";
			} else {
				scrollBtn.style.display = "none";
			}
		};
		window.addEventListener("scroll", handleScrollTop);
	}, []);
	const handleScrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<>
			<Routes />{" "}
			<button
				id='scrollTopBtn'
				style={{
					display: "none",
					justifyContent: "center",
					alignItems: "center",
					position: "fixed",
					bottom: "20px",
					right: "30px",
					zIndex: "99",
					border: "none",
					backgroundColor: "lightGrey",
					color: "white",
					cursor: "pointer",
					borderRadius: "50%",
					height: "45px",
					width: "45px",
				}}
				onClick={handleScrollToTop}>
				<UpArrowCircleSVG height='30px' width='30px' fill='#fff' />
			</button>
		</>
	);
}

export default App;
