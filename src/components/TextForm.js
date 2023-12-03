import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
	const handleUpClick = () => {
		// console.log('Your uppercase clicked');
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert('All letters has been capitalized.', 'success');
	};

	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert('All letters has been lower case.', 'success');
	};

	const handleClearClick = () => {
		let newText = '';
		setText(newText);
		props.showAlert('You cleared all the texts.', 'danger');
	};

	const handleCopyClick = () => {
		navigator.clipboard.writeText(text);
		props.showAlert('Copied to clipboard.', 'success');
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
		props.showAlert('Remove all the extra spaces.', 'success');
	};

	const handleOnChange = (event) => {
		// console.log('On changed');
		setText(event.target.value);
	};

	const [text, setText] = useState('');
	return (
		<>
			<div className='container'>
				<h1 className='mb-2'>{props.heading}</h1>
				<div className='mb-3'>
					<textarea
						className='form-control'
						value={text}
						onChange={handleOnChange}
						placeholder='Enter text here...'
						id='myBox'
						rows='10'
						style={{
							backgroundColor: props.mode === 'dark' ? '#3c5c7c' : 'white',
							color: props.mode === 'dark' ? 'white' : 'black',
						}}
					/>
				</div>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-1 my-1'
					onClick={handleUpClick}
				>
					Convert to Uppercase
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-1 my-1'
					onClick={handleLowClick}
				>
					Convert to Lowercase
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-1 my-1'
					onClick={handleClearClick}
				>
					Clear Text
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-1 my-1'
					onClick={handleCopyClick}
				>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-1 my-1'
					onClick={handleExtraSpaces}
				>
					Remove extra spaces
				</button>
			</div>
			<div className='contaier my-3'></div>
			<h2>Your text summary</h2>
			<p>
				{text.split(' ').filter((element) => {
					return element !== 0;
				}).length - 1}{' '}
				words and {text.length} characters
			</p>
			<p>
				{0.008 *
					text.split(' ').filter((element) => {
						return element !== 0;
					}).length -
					0.008}{' '}
				minutes read
			</p>
			<h2>Preview</h2>
			<p>
				{text.length > 0
					? text
					: 'Enter something in textbox to preview it here!'}
			</p>
		</>
	);
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
