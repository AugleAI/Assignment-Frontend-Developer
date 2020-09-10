import React from 'react'

import StatCard from './StatCard';

const Employee = ({StatData}) => {
  return (
		<div className='container'>
			<div className='row justify-content-center'>
				{StatData.map((data, index) => {
					return (
						<StatCard
							key={index}
							icon={data.icon}
							text1={data.text1}
							text2={data.text2}
							text3={data.text3 || ''}
							bg={data.bg}
							num={data.num}
						/>
					);
				})}
			</div>
		</div>
  );
}

export default Employee;