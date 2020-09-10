import React from 'react';

import { ManualAttendence } from './Data';
import Table from './Table';
import TrAttendance from './TrAttendance';

const Attendance = () => {
	return (
		<div className='home'>
			<table className='table'>
				<Table
					th1='Image'
					th2='BTemp'
					th3='Date'
					th4='Time'
					th5='Action'
				/>
				<TrAttendance ManualAttendence={ManualAttendence} />
			</table>
		</div>
	);
};

export default Attendance;
