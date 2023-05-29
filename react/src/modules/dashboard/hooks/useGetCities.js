import { useEffect, useState } from "react";
import { postAPIRequest } from "../../../services";

const useGetCities = () => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		const getAllCities = async () => {
			try {
				const response = await postAPIRequest(
					"http://52.77.84.127:3306/africapackages/v5/GetStartCitiesforHP",
					{
						emailid: "manju.paybills@gmail.com",
						apikey: "sitcdfge6789gagan",
						region: "india",
					}
				);
				console.log({ response });
				setCities([]);
			} catch (error) {
				console.log({ error });
			}
		};
		getAllCities();
	}, []);
	return { cities };
};

export default useGetCities;
