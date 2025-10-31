import { useState, useEffect, useCallback } from "react";

function useFetch(url, options)
{
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback
	(
		async (signal) =>
		{
			setLoading(true);
			setError(null);

			try
			{
				const response = await fetch(url, { ...options, signal });
				if (!response.ok) { console.log(response.statusText); }

				const result = await response.json();
				setData(result);
			}
			catch (error)
			{
				if (error.name !== 'AbortError') { setError(error); }
			}
			finally { setLoading(false); }
		}, [url, options]
	);

	useEffect
	(
		() =>
		{
			const abortController = new AbortController();
			const signal = abortController.signal;

			fetchData(signal);

			return () => { abortController.abort(); };
		}, [url, fetchData]
	)

	return { data, loading, error, refetch: fetchData };
}

export default useFetch;