/* eslint-disable no-mixed-spaces-and-tabs */
const travellerDisplayNameMap = {
	adults: "Adult",
	kids: "Kid",
	infants: "Infant",
	rooms: "Room",
};
export const parseTravellerDetails = (travellerDetails) =>
	Object.values(travellerDetails).reduce(
		(travellerCounts, roomDetails) => {
			const { adults, kids, infants } = roomDetails;
			travellerCounts.adults += adults;
			travellerCounts.kids += kids;
			travellerCounts.infants += infants;
			travellerCounts.rooms += 1;
			return travellerCounts;
		},
		{ adults: 0, kids: 0, infants: 0, rooms: 0 }
	);

export const generateTextForParsedTravellerDetails = (travellerData) => {
	return Object.entries(travellerData).map(([name, count], index) => {
		return count > 0
			? `${count} ${travellerDisplayNameMap[name]}${count > 1 ? "s" : ""}${
					index !== Object.keys(travellerData).length - 1 ? "," : ""
			  } `
			: "";
	});
};

export const generateSearchParams = (inputParams = []) => {
	if (!inputParams || !inputParams.length) return "";
	let searchParam = "?";

	for (let i = 0; i < inputParams.length; i++) {
		Object.entries(inputParams[i]).forEach(([key, value]) => {
			if (typeof value !== "object") {
				searchParam += `${key}=${value.toString()}`;
			} else {
				Object.entries(value).forEach(([key, value]) => {
					searchParam += `${key}=${value.toString()}&`;
				});
			}
			if (i !== inputParams.length - 1) {
				searchParam += "&";
			}
		});
	}
	if (searchParam.at(-1) === "&") {
		return searchParam.substring(0, searchParam.length - 1);
	}
	return searchParam;
};
