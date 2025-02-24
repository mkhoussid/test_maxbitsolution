import * as React from 'react';
import { useUnit } from 'effector-react';

import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { ICocktailInfo } from './interfaces/ICocktailInfo';
import './styles.css';
import { $cocktailInfo } from './effector/cocktails/models';
import { BrowserRouter as Router } from 'react-router';

export default function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Sidebar />
				<Content />
			</div>
		</Router>
	);
}
