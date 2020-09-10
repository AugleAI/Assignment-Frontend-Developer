import React from 'react'

function TrAbnormal({ AbnormalTemp }) {
	return (
		<tbody className='resTable text-size'>
			{AbnormalTemp.map((data, index) => {
				return (
					<tr key={index}>
						<td>{data.ID}</td>
						<td>{data.bTemp}</td>
						<td>{data.Name}</td>
						<td>{data.Contact}</td>
						<td>{data.Action}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TrAbnormal
