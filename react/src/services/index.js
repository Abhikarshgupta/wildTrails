export const METHOD_TYPE = {
	GET: "get",
	POST: "post",
	DELETE: "delete",
	UPDATE: "update",
};

const APILayerService = async (method, url, body) => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Referrer-Policy", "origin");
	const requestOptions = {
		method,
		headers,
	};
	if (method !== METHOD_TYPE.GET) {
		requestOptions.body = JSON.stringify(body);
	}
	console.log({ requestOptions });
	try {
		const response = await fetch(url, requestOptions);
		console.log({ response });
	} catch (error) {
		console.log({ error });
		return await Promise.reject(JSON.stringify(error));
	}
};

export const getAPIRequest = async (url) =>
	APILayerService(METHOD_TYPE.GET, url);

export const postAPIRequest = async (url, body) =>
	APILayerService(METHOD_TYPE.POST, url, body);
