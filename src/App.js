import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message,
			type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			document.body.style.color = 'white';
			showAlert('Blue Mode has been enabled', 'success');
			// document.title = 'TextUtils - Dark Mode';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
			showAlert('Light Mode has been enabled', 'success');
			// document.title = 'TextUtils - Light Mode';
		}
	};

	const changegreen = () => {
		document.body.style.backgroundColor = '#35C649';
		document.body.style.color = 'white';
		showAlert('Color changed to green', 'success');
		// document.title = 'TextUtils - Green Mode';
	};
	const changeyellow = () => {
		document.body.style.backgroundColor = '#CAB911';
		document.body.style.color = 'white';
		showAlert('Color changed to yellow', 'success');
	};
	const changered = () => {
		document.body.style.backgroundColor = '#C15031';
		document.body.style.color = 'white';
		showAlert('Color changed to red', 'success');
	};

	return (
		<>
			<Router>
				<Navbar
					title='TextUtils'
					aboutText='About Us'
					mode={mode}
					toggleMode={toggleMode}
					changegreen={changegreen}
					changered={changered}
					changeyellow={changeyellow}
				/>
				<Alert alert={alert} />
				<div className='container my-3'>
					<Routes>
						<Route exact path='/about' element={<About mode={mode} />}></Route>
						<Route
							exact
							path='/'
							element={
								<TextForm
									showAlert={showAlert}
									heading='Try TextUtils - Word and Character Counter, Remove extra spaces'
									mode={mode}
								/>
							}
						></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
