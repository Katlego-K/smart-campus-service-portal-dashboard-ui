"use client"

import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className=""><Calendar onChange={onChange} value={value} /></div>
    )
}

export default EventCalendar