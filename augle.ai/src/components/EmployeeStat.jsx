import React from 'react';

import { StatData } from './SidebarData';
import Employee from './Employee';

function EmployeeStat() {
	return (
		<div className='bg-dark home'>
			<div className='row justify-content-center'>
				<Employee StatData={StatData} />
			</div>
		</div>
	);
}

export default EmployeeStat;
