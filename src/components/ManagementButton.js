import React from 'react';

const ManagementButton = ({ onManagementUserClick }) => {
	return(
		<li className="management-button">
			<a href="#" className="management-button" onClick={(event) => onManagementUserClick(event)}>Management</a>
		</li>
	)
}

export default ManagementButton