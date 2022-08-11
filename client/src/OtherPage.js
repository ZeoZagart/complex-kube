import React from 'react';
import { Link } from 'react-router-dom';

let otherPage = () => {
	return (
		<div>
			This is other page
			<Link to="/">Go back home</Link>
		</div>
	);
};

export default otherPage;