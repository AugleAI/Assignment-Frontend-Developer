import React from 'react';

import { GoLocation } from 'react-icons/go';
import { BsPeopleCircle } from 'react-icons/bs';
import { MdLocalPostOffice } from 'react-icons/md';

const CafeDetails = () => {
	return (
		<div
			className='bg-white p-3 container'
			style={{ borderRadius: '20px' }}
		>
			<div className='row'>
				<div className='col-sm-12 col-md-6 col-lg-3'>
					<div>
						<img
							src='/placeholder.png'
							height='100%'
							width='100%'
							style={{ borderRadius: '20px' }}
							alt='Placeholder'
						/>
					</div>
				</div>
				<div className='col-sm-12 col-md-6 col-lg-9'>
					<div className=' p-1'>
						<div className='p-2'>
							<span>
								<MdLocalPostOffice size='1.4rem' color='red' />
							</span>
							<span className='ml-2'>
								<span className='font-weight-bolder h5'>
									ID:
								</span>{' '}
								<span className='size'>ID2000383</span>
							</span>
						</div>
						<div className='p-2'>
							<span>
								<BsPeopleCircle size='1.4rem' color='red' />
							</span>
							<span className='ml-2'>
								<span className='font-weight-bolder h5'>
									Manager:
								</span>{' '}
								<span className='size'> Admin FaceTab</span>
							</span>
						</div>
						<div className='p-2'>
							<span>
								<GoLocation size='1.4rem' color='red' />
							</span>
							<span className='ml-2'>
								<span className='font-weight-bolder h5'>
									Location:
								</span>{' '}
								<span className='size'>
									Chincholi Bhandar Road, Gulab Estate,
									Trichy, Uttar Pradesh
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CafeDetails;
