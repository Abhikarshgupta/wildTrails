import { useEffect, useState } from "react";
import { getAPIRequest } from "../../../services";

const useGetCities = (currentRegion) => {
	const [cities, setCities] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const getAllCities = async () => {
			try {
				const response = await getAPIRequest(
					`https://www.universal-tutorial.com/api/states/${currentRegion}`
				);
				if (response && response.length)
					setCities(response.map((city) => city.state_name));
			} catch (error) {
				setError(error);
				setCities([]);
			}
		};
		if (currentRegion) getAllCities();
	}, [currentRegion]);
	return { cities, error };
};

export default useGetCities;
