import React from 'react';

const TrAttendance = ({ ManualAttendence }) => {
	return (
		<tbody className='resTable text-size'>
			{ManualAttendence.map((data, index) => {
				return (
					<tr key={index}>
						<td>{data.Image}</td>
						<td>{data.BodyTemp}</td>
						<td>{data.Date}</td>
						<td>{data.Time}</td>
						<td>{data.Action}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TrAttendance;
