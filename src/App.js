import config from './assets/components/config.json';

import { UseFetchTestFirst, UseFetchTestSecond } from './hooks/test/UseFetchTest';

function App()
{
	if (config.debugMode)
	{
		console.log('Debug mode is ON');
		return (
			<section className='tests'>
				<h1>Hooks tests</h1>
				<div style={{marginLeft: "50px"}}>
					<UseFetchTestFirst/>
					<hr/>
					<UseFetchTestSecond/>
				</div>
			</section>
		)
	}
}

export default App;