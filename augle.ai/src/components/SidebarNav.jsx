import React from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const SidebarNav = () => {
	return (
		<div className='nav-side-menu'>
			<div className='brand'>
				<Link to='/'>
					<span className='augle text-primary'>AUGLE</span>
					<span className='ai text-danger'>AI</span>
				</Link>
			</div>
			<i
				className='fa fa-bars fa-2x toggle-btn'
				data-toggle='collapse'
				data-target='#menu-content'
			></i>

			<div className='menu-list'>
				<SideBar />
			</div>
		</div>
	);
};

export default SidebarNav;
