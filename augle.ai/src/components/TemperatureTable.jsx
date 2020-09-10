import React from 'react';

import { AbnormalTemp } from './Data';
import Table from './Table'
import TrAbnormal from './TrAbnormal';

const TemperatureTable = () => {
  return (
		<table className='table bg-white'>
			<Table th1='ID' th2='BTemp' th3='Name' th4='Contact' th5='Action' />
			<TrAbnormal AbnormalTemp={AbnormalTemp.slice(0,3)} />
		</table>
  );
};

export default TemperatureTable;