import React from 'react';
import { BiBuilding } from 'react-icons/bi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

const date = new Date().toLocaleDateString('en-US', {
	weekday: 'long',
	day: 'numeric',
	month: 'long',
});

const time = new Date().toLocaleTimeString('en-US', {
	hour: '2-digit',
	minute: '2-digit',
});

const Top = () => {
	return (
		<div className='d-flex justify-content-between p-3 hide-class home'>
			<div className='d-flex'>
				
				<div className='mt-1 d-flex hide-class'>
					<div className='panvel'>CAFE PANVEL</div>
					<div className='ml-2 mt-1'>
						<BiBuilding size='1.5rem' color='red' />
					</div>
				</div>
			</div>
			<div className='d-flex align-items-center'>
				<div className='hide-class'>
					<AiFillQuestionCircle size='1.2rem' />
				</div>
				<div className='ml-4 hide-class'>
					<IoIosNotifications size='1.5rem' />
				</div>
				<div className='ml-4 hide-class'>
					<FaUserCircle size='2rem' />
				</div>
				<span className='border-line ml-4 hide-class'></span>
				<div className='ml-4 mr-3 hide-class'>
					<div>{time}</div>
					<div>{date}</div>
				</div>
			</div>
		</div>
	);
};
export default Top;
