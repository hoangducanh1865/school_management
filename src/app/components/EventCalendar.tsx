"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white rounded-md'>
            <Calendar onChange={onChange} value={value} locale="en-US" /> {/* Use vi-VN for vietnamese locale */}
        </div>
    )
}

export default EventCalendar