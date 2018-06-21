import React from 'react';

const EmployeeButton = ({ onEmployeeUserClick }) => {
	return(
		<li className="employee-button">
			<a href="#" className="employee-button" onClick={(event) => onEmployeeUserClick(event)}>Employee</a>
		</li>
	)
}

export default EmployeeButton