import React from 'react';

const Table = ({ th1, th2, th3, th4, th5 }) => {
	return (
		<thead className='resTable text-size'>
			<tr>
				<th scope='col'>{th1}</th>
				<th scope='col'>{th2}</th>
				<th scope='col'>{th3}</th>
				<th scope='col'>{th4}</th>
				<th scope='col'>{th5}</th>
			</tr>
		</thead>
	);
};

export default Table;
