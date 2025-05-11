"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
    },
  {
    name: 'Females',
    count: 53,
    fill: '#8884d8',
  },
  {
    name: 'Males',
    count: 53,
    fill: '#83a6ed',
  },
]

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};



const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
          {/**TITLE */}
          <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Students</h1>
              <Image src="/moreDark.png" alt="" width={20} height={20}/>
          </div>
          {/**CHART */}
          <div className="w-full h-[75%]">
                  <ResponsiveContainer>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                      label={{ position: 'insideStart', fill: '#fff' }}
                      background
                      dataKey="count"
                    />
                    <Legend layout="vertical" verticalAlign="middle"/>
                  </RadialBarChart>
                </ResponsiveContainer>
          </div>
          {/**BOTTOM */}
          <div className="flex justify-center gap-16">
              <div className="flex flex-col gap-1">
                  <div className="w-5 h-5 bg-lamaSky rounded-full"/>
                      <h1 className="font-bold">1,234</h1>
                      <h2 className="text-xs text-gray-300">Males (55%)</h2>
              </div>
              <div className='flex flex-col gap-1'>
                  <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
                      <h1 className='font-bold'>1,234</h1>
                      <h2 className='text-xs text-gray-300'>Females (45%)</h2>
              </div>
          </div>
        </div>
    );
};

export default CountChart