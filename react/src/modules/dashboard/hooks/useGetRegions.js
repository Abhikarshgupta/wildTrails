import { useEffect, useState } from "react";
import { postAPIRequest } from "../../../services";

const useGetRegions = () => {
	const [regions, setRegions] = useState([]);

	useEffect(() => {
		const getAllRegions = async () => {
			try {
				const response = await postAPIRequest(
					"http://52.77.84.127:3306/africapackages/v5/GetRegionsforHP",
					{
						emailid: "manju.paybills@gmail.com",
						apikey: "sitcdfge6789gagan",
					}
				);
				console.log({ response });
				setRegions([]);
			} catch (error) {
				console.log({ error });
			}
		};
		getAllRegions();
	}, []);
	return { regions };
};

export default useGetRegions;
