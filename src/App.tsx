import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
	return (
		<>
			<Provider store={store}>
				<Home />
			</Provider>
			<Footer />
		</>
	);
}

export default App;
