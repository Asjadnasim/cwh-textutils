import React from 'react';

export default function About(props) {
	let myStyle = {
		color: props.mode === 'dark' ? 'white' : 'black',
		backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
	};
	// const [myStyle, setMyStyle] = useState({
	// 	color: 'white',
	// 	backgroundColor: '#042743',
	// });

	// const [btnText, setBtnText] = useState('Enable Dark Mode');

	// const toggleStyle = () => {
	// 	if (myStyle.color === 'white') {
	// 		setMyStyle({
	// 			color: 'black',
	// 			backgroundColor: 'white',
	// 		});

	// 		setBtnText('Enable Dark Mode');
	// 	} else {
	// 		setMyStyle({
	// 			color: 'white',
	// 			backgroundColor: '#042743',
	// 			border: '1px solid white',
	// 		});

	// 		setBtnText('Enable Light Mode');
	// 	}
	// };

	return (
		<div
			className='container'
			style={{
				color: props.mode === 'dark' ? 'white' : 'black',
			}}
		>
			<h1 className='my-3'>About Us</h1>
			<div className='accordion' id='accordionExample' style={myStyle}>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'
							style={myStyle}
						>
							<strong>Analyze your text</strong>
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse show'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
								ad, eius pariatur nesciunt at ipsam!
							</p>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
							style={myStyle}
						>
							<strong>Free to use </strong>
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
								ducimus magni nesciunt accusamus. Sapiente dolor quis dolorem.
								Sint sapiente deserunt debitis dolores hic, neque nulla,
								repellat unde consectetur, ab officiis. Magnam consequatur
								molestiae doloribus quos fuga exercitationem eum eaque
								repellendus accusamus quasi? Quia sapiente, corporis voluptates
								perferendis odio commodi nemo.
							</p>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
							style={myStyle}
						>
							<strong>Browser Compatiable</strong>
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur eius dolor soluta amet aperiam minus, dolorum
								reiciendis numquam. Maxime odit doloremque quas repudiandae
								atque! Quisquam nam modi laudantium earum libero recusandae,
								consequuntur aperiam beatae eos sint aliquam id ad magni odit
								minima aut tempora error?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
