import React, { useState } from 'react';
import Upcoming from './Upcoming';
import List from './List';
import JsonData from '../data.json';
import NoEvents from './NoEvents'

const Today = () => {
    const [people, setPeople] = useState(JsonData);
    const newArray = {};
    const birthdayToDisplay = people.map((obj) => {
        let c_time = obj.dob.split('-');
        let dob_month = c_time[1]
        let dob_date = c_time[2]
        console.log(c_time)
        //For Current Date
        let current_date = new Date();
        current_date.setDate(current_date.getDate());
        let current_dateString = (current_date.getFullYear() + '-' + ('0' + (current_date.getMonth() + 1)).slice(-2) + '-' + ('0' + current_date.getDate()).slice(-2));
        let currDate = current_dateString.split('-')
        let today_month = currDate[1]
        let today_date = currDate[2]
        if ((dob_month === today_month) && (dob_date === today_date)) {
            return (<p>{obj.dob}</p>)
        } else {
            // return <NoEvents />
        }

    })
    console.log(newArray, "narrat")

    return (
        <div>
            <h3>1 Birthday's Today</h3>
            <h1>{birthdayToDisplay}</h1>
            <button onClick={() => setPeople([])}>Clear all</button>
        </div>
    )
}


// const Today = () => {
//     const dataToDisplay = JsonData.map ((obj)=> {
//         console.log(obj);
//         return (<>{obj.dob}</>)
//     })

//      return (
//         <div>
//             <h1>Birthdays today</h1>
//                 {dataToDisplay}
//         </div>
//         )

// }


export default Today;