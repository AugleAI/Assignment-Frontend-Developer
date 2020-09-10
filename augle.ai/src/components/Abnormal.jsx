import React from 'react';

import { AbnormalTemp } from './Data';
import Table from './Table'
import TrAbnormal from './TrAbnormal';

const Abnormal = () => {
  return (
		<div className='home'>
			<table className='table bg-white'>
				<Table
					th1='ID'
					th2='BTemp'
					th3='Name'
					th4='Contact'
					th5='Action'
				/>
				<TrAbnormal AbnormalTemp={AbnormalTemp} />
			</table>
		</div>
  );
};

export default Abnormal;