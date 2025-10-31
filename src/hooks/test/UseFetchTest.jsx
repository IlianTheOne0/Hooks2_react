import { useState } from "react";

import useFetch from "../useFetch";

function UseFetchTestFirst()
{
	const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

	if (loading) { return <div>Loading...</div>; }
	if (error) { return <div>Error: {error.message}</div>; }

	return (
		<div>
			<h1>UseFetch Test - First (fetch posts)</h1>

			<section>{JSON.stringify(data, null)}</section>
			<button onClick={() => refetch()}>Refetch Posts</button>
		</div>
	);
}

function UseFetchTestSecond()
{
	const [post, setPost] = useState(1);

	const { data, loading, error, refetch } = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=${2}&_start=${(post - 1) * 2}`);

	if (loading) { return <div>Loading...</div>; }
	if (error) { return <div>Error: {error.message}</div>; }

	return (
		<div>
			<h1>UseFetch Test - Second (fetch posts changing of url)</h1>

			<section>{JSON.stringify(data, null, 2)}</section>
			
			<button onClick={() => refetch()}>Refetch Posts</button>

			<button onClick={() => setPost(post + 1)}>Next</button>
			<button onClick={() => setPost(1)}>Reset</button>
			<button onClick={() => setPost(post - 1)}>Previous</button>
		</div>
	);
}

export { UseFetchTestFirst, UseFetchTestSecond };