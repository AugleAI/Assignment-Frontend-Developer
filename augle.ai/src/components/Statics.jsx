import React from 'react';

import { StatData } from './SidebarData';
import Employee from './Employee';

const Statics = () => {
	return <Employee StatData={StatData.slice(0, 4)} />;
};

export default Statics;
