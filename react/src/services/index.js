export const METHOD_TYPE = {
	GET: "get",
	POST: "post",
	DELETE: "delete",
	UPDATE: "update",
};
const apiToken = `3As6Al_xzrq5V3HJQcPHzEjcpoUbCSeEvIlnWprSYqHibHXpYMRRbiyBkCF_6FqXT0s`;
const userEmail = `abg71297+apitoken@gmail.com`;

const getAccessToken = async () => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append("api-token", apiToken);
	headers.append("user-email", userEmail);
	const requestOptions = {
		method: "get",
		headers,
	};
	try {
		const res = await fetch(
			"https://www.universal-tutorial.com/api/getaccesstoken",
			requestOptions
		);
		const responseText = await res.text();
		if (res.status) return Promise.resolve(JSON.parse(responseText));
	} catch (error) {
		return Promise.reject(JSON.parse(error));
	}
};

const APILayerService = async (method, url, body) => {
	const { auth_token } = await getAccessToken();
	if (!auth_token) {
		return Promise.reject("Not Authorised");
	}
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append("Authorization", `Bearer ${auth_token}`);
	headers.append("Accept", "application/json");

	const requestOptions = {
		method,
		headers,
	};
	if (method !== METHOD_TYPE.GET) {
		requestOptions.body = JSON.stringify(body);
	}
	try {
		const response = await fetch(url, requestOptions);
		const responseText = await response.text();
		if (response.status) return Promise.resolve(JSON.parse(responseText));
	} catch (error) {
		return await Promise.reject(JSON.stringify(error));
	}
};

export const getAPIRequest = async (url) =>
	APILayerService(METHOD_TYPE.GET, url);

export const postAPIRequest = async (url, body) =>
	APILayerService(METHOD_TYPE.POST, url, body);
