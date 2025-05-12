"use client"

import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY
const events = [
    {
        id: 1,
        title: "BM engagement session with ICT students",
        time:"12:00 PM - 17:00PM",
        description: "You are invited to an online session with IBM on (Saturday, 17 May 2025),See the attached flyer for further details."
    },
    {
        id: 2,
        title: "PPB",
        time:"09:00 AM - 15:00PM",
        description: "Security Engineer Graduate Programme"
    },
    {
        id: 3,
        title: "ICT Sick Tests timetable",
        time:"12:00 PM - 17:00PM",
        description: "- Sick tests timetable - Diploma courses"
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <div className="flex flex-col gap-4 ">
            {events.map( event=>(
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky"
                 key={event.id}
                 >
                    <div className="flex items-center justify-between">
                        <h1>{event.title}</h1>
                        <span>{event.time}</span>
                    </div>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default EventCalendar