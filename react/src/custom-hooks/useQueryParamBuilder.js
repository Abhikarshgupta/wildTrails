import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useQueryParamBuilder = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { search } = useLocation();

	// either we will add or remove.
	// TODO - update to an object params and add annotation.
	const buildQueryParams = (
		inputArray = [],
		inputParameter = "",
		resetOtherParams = false,
		paramsToReset = []
	) => {
		const currentQueryForInputParameter = new URLSearchParams(search).get(
			inputParameter
		);
		// if it is not present, means we are adding new.
		if (!currentQueryForInputParameter) {
			if (!inputArray.length) {
				return;
			}
			// TODO- abstract this utility
			let params = String(inputArray[0].value);
			for (let i = 1; i < inputArray.length; i++) {
				params += "+" + inputArray[i].value;
			}
			const encodedParams = encodeURIComponent(params);
			const urlParams = new URLSearchParams(search);
			urlParams.set(inputParameter, encodedParams);
			navigate({
				pathname: location.pathname,
				search: urlParams.toString(),
			});
			return;
		}
		// it is present.
		// either we will add more, or we will remove. so we will replace and not worry.
		const currentParams = new URLSearchParams(search);
		if (resetOtherParams) {
			paramsToReset.forEach((param) => currentParams.delete(param));
		}
		if (!inputArray.length) {
			currentParams.delete(inputParameter);
			navigate({
				pathname: location.pathname,
				search: currentParams.toString(),
			});
			return;
		}

		let params = String(inputArray[0].value);
		for (let i = 1; i < inputArray.length; i++) {
			params += "+" + inputArray[i].value;
		}
		const encodedParams = encodeURIComponent(params);
		currentParams.delete(inputParameter);
		currentParams.set(inputParameter, encodedParams);

		navigate({
			pathname: location.pathname,
			search: currentParams.toString(),
		});
	};

	const getQueryParams = useCallback(() => {
		const urlParams = new URLSearchParams(search);
		const queryParamsObj = {};
		for (const [key, value] of urlParams.entries()) {
			const decodedQueryParams = decodeURIComponent(value);
			queryParamsObj[key] = decodedQueryParams.split("+");
		}
		return queryParamsObj;
	}, [search]);

	return { buildQueryParams, getQueryParams };
};

export default useQueryParamBuilder;
