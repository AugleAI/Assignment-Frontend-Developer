import React from 'react'

import { BiEnvelope } from 'react-icons/bi'

const pic = <img src='/avatar.png' alt='img' height='50px' width='50px' />
const button = <div>
  <button className='btn btn-outline-success btn-sm'>Mark</button>
  <button className='btn btn-outline-danger btn-sm'>Reject</button>
</div>

const enve = <BiEnvelope size='1.3rem' />

export const ManualAttendence = [
  { Image: pic, BodyTemp: '102', Date: 'sep 10', Time: '9:50', Action: button },
  { Image: pic, BodyTemp: '103', Date: 'sep 10', Time: '9:51', Action: button },
  { Image: pic, BodyTemp: '101', Date: 'sep 10', Time: '9:52', Action: button },
  { Image: pic, BodyTemp: '100', Date: 'sep 10', Time: '9:53', Action: button },
  { Image: pic, BodyTemp: '102', Date: 'sep 10', Time: '9:54', Action: button },
  { Image: pic, BodyTemp: '101', Date: 'sep 10', Time: '9:55', Action: button },
  { Image: pic, BodyTemp: '102', Date: 'sep 10', Time: '9:56', Action: button },
  { Image: pic, BodyTemp: '103', Date: 'sep 10', Time: '9:57', Action: button },
  { Image: pic, BodyTemp: '100', Date: 'sep 10', Time: '9:58', Action: button },
  { Image: pic, BodyTemp: '99', Date: 'sep 10', Time: '10:00', Action: button },
  { Image: pic, BodyTemp: '98', Date: 'sep 10', Time: '10:02', Action: button },
  { Image: pic, BodyTemp: '102', Date: 'sep 10', Time: '10:05',Action: button }
]

export const AbnormalTemp = [
  { ID: '001', bTemp: '102', Name: 'Warren B', Contact: '9988776655', Action: enve },
  { ID: '003', bTemp: '103', Name: 'James U', Contact: '9966558877', Action: enve },
  { ID: '004', bTemp: '102', Name: 'John S', Contact: '9988665577', Action: enve },
  { ID: '007', bTemp: '102', Name: 'Danny D', Contact: '9985587766', Action: enve },
  { ID: '008', bTemp: '104', Name: 'Steve S', Contact: '9988776655', Action: enve },
  { ID: '009', bTemp: '103', Name: 'Alex R', Contact: '7788776655', Action: enve },
  { ID: '010', bTemp: '102', Name: 'Freddy P', Contact: '6688776655', Action: enve },
  { ID: '011', bTemp: '101', Name: 'William B', Contact: '5588776655', Action: enve }
]