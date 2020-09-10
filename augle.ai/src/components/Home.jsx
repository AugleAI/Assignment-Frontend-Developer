import React from 'react';
import Statics from './Statics';
import CafeDetails from './CafeDetails';
import AttendanceTable from './AttendanceTable';
import TemperatureTable from './TemperatureTable';

import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='bg-dark p-3 home'>
			<h4 className='text-success'>CAFE DETAILS</h4>
			<CafeDetails />
			<div className='d-flex justify-content-between'>
				<h4 className='mt-4 text-success'>EMPLOYEES STATISTICS</h4>
				<Link to='/Employees' className='mt-4 text-success'>
					ALL
				</Link>
			</div>
			<Statics />
			<div className='row'>
				<div className='col-sm-12 col-md-12 col-lg-6'>
					<div className='d-flex justify-content-between'>
						<h4 className='mt-4 text-success'>MANUAL ATTENDANCE</h4>
						<Link
							to='/attendance'
							className='mt-4 text-success'
						>
							ALL
						</Link>
					</div>
					<AttendanceTable />
				</div>
				<div className='col-sm-12 col-md-12 col-lg-6'>
					<div className='d-flex justify-content-between'>
						<h4 className='mt-4 text-success'>
							ABNORAMAL TEMPERAURE
						</h4>
						<Link
							to='/abnormal'
							className='mt-4 text-success'
						>
							ALL
						</Link>
					</div>

					<TemperatureTable />
				</div>
			</div>
		</div>
	);
};

export default Home;
