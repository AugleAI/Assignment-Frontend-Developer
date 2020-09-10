import React from 'react'

import { FcCalendar, FcDataConfiguration, FcOnlineSupport, FcAlarmClock, FcLeave, FcHome } from 'react-icons/fc';
import { IoIosPersonAdd, IoIosPaper, IoMdPaper } from 'react-icons/io'
import { FaTemperatureHigh } from 'react-icons/fa'
import { GiPerson } from 'react-icons/gi'
import { RiGroupLine, RiExchangeFundsLine } from 'react-icons/ri'
import { HiOutlineUserRemove, HiDocumentDownload } from 'react-icons/hi'
import { GrGroup } from 'react-icons/gr';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';

export const Sidebar = [
  { icon: <IoIosPaper />, nav: 'Attendance Logs', link: 'log' },
  { icon: <FaTemperatureHigh />, nav: 'Abnormal Temperature', link: 'abnormal'  },
  { icon: <IoMdPaper />, nav: 'Manual Attendance', link:'attendance' },
  { icon: <FcCalendar />, nav: 'Leave Request' },
  { icon: <GiPerson />, nav: 'Visitor Request' },
  { icon: <RiGroupLine />, nav: 'Employees' },
  { icon: <IoIosPersonAdd />, nav: 'Add Employee' },
  { icon: <HiOutlineUserRemove />, nav: 'Deactivates Employees' },
  { icon: <HiDocumentDownload />, nav: 'Download Report' },
  { icon: <FcDataConfiguration />, nav: 'Configure' },
  { icon: <RiExchangeFundsLine />, nav: 'Change Source' },
]

export const StatData = [
  { icon: <GrGroup size='2rem' />, text1: 'Total', text2: 'Employees', bg: 'bg-primary', num: '345' },
  { icon: <FcOnlineSupport size='2rem' />, text1: 'Present', text2: 'Employees', bg: 'bg-success', num: '300' },
  { icon: <ImWarning size='2rem' />, text1: 'Late', text2: 'Employees', bg: 'bg-warning', num: '034' },
  { icon: <FcAlarmClock size='2rem' />, text1: 'Absent', text2: 'Employees', bg: 'bg-danger', num: '010' },
  { icon: <AiOutlineCalendar size='2rem' />, text1: 'Employees', text2: 'on Leave', bg: 'bg-info', num: '010' },
  { icon: <FaTemperatureHigh size='2rem' />, text1: 'Abnormal', text2: 'Temp', text3: 'Employees', bg: 'bg-danger', num: '003' },
  { icon: <FcLeave size='2rem' />, text1: 'Leave', text2: 'Request', bg: 'bg-warning', num: '015' },
  { icon: <FcHome size='2rem' />, text1: 'WFH', text2: 'Employees', bg: 'bg-primary', num: '020' },

]