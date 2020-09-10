import React from 'react';

import { ManualAttendence } from './Data';
import Table from './Table';
import TrAttendance from './TrAttendance';

const AttendanceTable = () => {
	return (
		<table className='table bg-white p-3' style={{ width: '100%' }}>
			<Table th1='Image' th2='BTemp' th3='Date' th4='Time' th5='Action' />
			<TrAttendance ManualAttendence={ManualAttendence.slice(0,2)} />
		</table>
	);
};

export default AttendanceTable;
