import React from 'react';
import { Sidebar } from './SidebarData';

import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SideBar = () => {
	return (
		<ul id='menu-content' className='menu-content collapse out mt-2'>
			<span className='p-2 h4'>
				<BsChevronLeft />
			</span>
			<span className='font-weight-bolder pl-3 h4'>
				FaceTab <small>PRO</small>{' '}
			</span>
			{Sidebar.map((nav, index) => {
				return (
					<Link to={nav.link || '/'} key={index}>
						<li className='p-3'>
							<span>{nav.icon}</span>{' '}
							<span className='ml-3 text-warning'>
								{' '}
								{nav.nav}
							</span>
						</li>
					</Link>
				);
			})}
		</ul>
	);
};
export default SideBar;
