import React from 'react';

const StatCard = ({ icon, bg, num, text1, text2, text3}) => {
	return (
		<div className='bg-white card-container mr-3 d-flex mt-3 mb-3'>
			<div
				className={`d-flex justify-content-center align-items-center icon-container ${bg}`}
			>
				{icon}
			</div>
			<div className='d-flex justify-content-between align-items-center w-100'>
				<div className='size ml-3 '>
					<div>{text1}</div>
					<div>{text2}</div>
					<div>{text3}</div>
				</div>
				<div className='font-weight-bolder mr-3 h3'>{num}</div>
			</div>
		</div>
	);
};

export default StatCard;
