"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 95,
    absent: 5,
  },
  {
    name: 'Wed',
    present: 85,
    absent: 15,
  },
  {
    name: 'Thu',
    present: 100,
    absent: 0,
  },
  {
    name: 'Fri',
    present: 99,
    absent: 1,
  },
  {
    name: 'Sat',
    present: 63,
    absent: 37,
  },
];

const AttendanceChart = () => {
    return (
        <div className="br-white rounded-lg p-4 h-full">
            <div className=''>
                <h1>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
                <Bar dataKey="present" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="absent" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart