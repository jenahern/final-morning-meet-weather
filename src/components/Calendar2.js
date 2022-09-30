import { useState } from 'react';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';


function Calendar2() {
  const [date, setDate] = useState(new Date());

  return (
    <div >
      <Card body className='cal-card text-center mt-4'>
      <h1>Classroom Calendar</h1>
      <div >
        <Calendar onChange={setDate} value={date} />
      </div>
      </Card>
   
      <Card footer className='date-card text-center mt-4'>
        <h2 className='bold'>Today is </h2>{' '}
        <h3 className='bold'>{date.toDateString()}</h3>

        {/* {console.log(date.toDateString())} */}
     
        </Card>
    </div>
  );    
}

export default Calendar2;

// The initial value passed to the calendar is the present date. When a user clicks the calendar, its value will be set to the user’s selection. 
// date is currently printing below the calendar - 
// TODO get the date to print to a new div with the weather selection