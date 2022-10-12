import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';

function Advanced_Calendar() {

    const [date, setDate] : any = useState(new Date()) 
  
    return (
    <div>
        <h1>React Calendar with Range</h1>
   <div>
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
    </div>
  )
}

export default Advanced_Calendar