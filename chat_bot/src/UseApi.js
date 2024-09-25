import { be_ApiBase, authTokenKey } from './envVariables';
import { useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const UseApi = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies([authTokenKey]);

	const hitApiWith = useCallback(async (endpoint, method = 'GET', params = {}, headers = {}, body = null) => {
		setLoading(true);
		setError(null);

		const url = new URL(`${be_ApiBase}${endpoint}`);
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

		let headersContent = {
			'Content-Type': 'application/json',
			...headers,
		}
		if (cookies[authTokenKey])
			headersContent["Authorization"] = `Bearer ${cookies[authTokenKey]}`

		try {
			const response = await fetch(url, {
				method: method,
				headers: headersContent,
				body: body ? JSON.stringify(body) : null,
			});
			if (!response.ok) {
				if (response.status === 404) {
					throw new Error(`404 Not Found: ${url.toString()}`);
				} else {
					throw new Error(`Error: ${response.statusText}`);
				}
			} else {
				const result = await response.json();
				setData(result);
			}
		} catch (err) {
			toast(err.message);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, [cookies]);

	return { hitApiWith, loading, data, setData, error };
};

export default UseApi;