import { useEffect, useState } from "react";

import useEventListener from "../useEventListener.js";

function EventListenerTestFirst()
{
	const [clickCount, setClickCount] = useState(0);
	const [countMode, setCountMode] = useState(true);

	const incrementClickCount = () => setClickCount(previous => previous + 1);
	const decrementClickCount = () => setClickCount(previous => previous - 1);

	const toggleMode = () => setCountMode(previous => !previous);

	useEventListener
	(
		window,
		'click',
		countMode ? incrementClickCount : decrementClickCount,
		{ passive: true }
	);


	return (
		<div>
			<h2>Event Listener Test - First (click count)</h2>

			<p>Click count: {clickCount}</p>
			<button onClick={toggleMode}>Toggle Mode (Current: {countMode ? 'Increment' : 'Decrement'})</button>
		</div>
	)
}

function EventListenerTestSecond()
{	
	const [lastPressedKey, setLastPressedKey] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEventListener(
		window,
		'keydown',
		(event) =>
		{
			if (toggle) { setLastPressedKey(event.key); }
		}
	);

	return (
		<div>
			<h2>Event Listener Test - Second (last pressed key)</h2>

			<p>Last pressed key: {lastPressedKey || "N/A"}</p>
			<p>Toggle state: {toggle.toString()}</p>
			<button onClick={() => setToggle((previous) => !previous)}>Toggle</button>
		</div>
	)
}

export { EventListenerTestFirst, EventListenerTestSecond };