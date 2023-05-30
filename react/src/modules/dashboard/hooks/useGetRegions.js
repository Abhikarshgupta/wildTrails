import { useEffect, useState } from "react";
import { getAPIRequest } from "../../../services";

const useGetRegions = () => {
	const [regions, setRegions] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const getAllRegions = async () => {
			try {
				const response = await getAPIRequest(
					"https://www.universal-tutorial.com/api/countries/"
				);
				if (response && response.length)
					setRegions(response.map((country) => country.country_name));
			} catch (error) {
				setError(error);
				setRegions(["India", "Africa", "Europe", "US"]);
			}
		};
		getAllRegions();
	}, []);
	return { regions, error };
};

export default useGetRegions;
