import config from './assets/components/config.json';

import { EventListenerTestFirst, EventListenerTestSecond } from './hooks/test/EventListenerTest.jsx';

function App()
{
	if (config.debugMode)
	{
		console.log('Debug mode is ON');
		return (
			<section className='tests'>
				<h1>Hooks tests</h1>
				<div style={{marginLeft: "50px"}}>
					<EventListenerTestFirst/>
					<hr/>
					<EventListenerTestSecond/>
				</div>
			</section>
		)
	}
}

export default App;