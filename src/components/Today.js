import React, { useState } from 'react';
// import Upcoming from './Upcoming';
// import List from './List';
import JsonData from '../data.json';
import NoEvents from './NoEvents'

const Today = () => {
    const [people, setPeople] = useState(JsonData);
    let currentDate = new Date()
    let month = currentDate.getUTCMonth() + 1; //months from 1-12.
    let day = currentDate.getUTCDate();
    // var year = dateObj. getUTCFullYear();
    let newdate = month + "-" + day;
    const birthdayToDisplay = people.map((obj) => {
        let c_time = obj.dob.split('-');
        let pid = obj.id;
        let pname = obj.name;
        let page = obj.age;
        let pimage = obj.image;
        let dob_month = c_time[1]
        let dob_date = c_time[2]
        let dob = dob_month + '-' + dob_date;
        let newObj = [pid, pname, page, dob, pimage]
        return newObj
    }).filter(item => item[3] === newdate)
    console.log(birthdayToDisplay, "filterd")

    // To convert array to object for rendering
    const arrtoobj = []
    for (let i = 0; i < birthdayToDisplay.length; i++) {
        arrtoobj.push({
            id: birthdayToDisplay[i][0],
            name: birthdayToDisplay[i][1],
            age: birthdayToDisplay[i][2],
            dob: birthdayToDisplay[i][3],
            image: birthdayToDisplay[i][4],
        });
    }
    console.log(arrtoobj, "arra")



    if (arrtoobj.length > 0) {
        return (
            <div>
                <section className='container'>
                    <h3>{arrtoobj.length} Birthday's Today</h3>
                    {arrtoobj.map((item, index) => {
                        return (
                            <article key={index} className='person'>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.age} years</p>
                                </div>
                            </article>
                        );
                    })}
                    <button onClick={() => setPeople([])}>Clear all</button>
                </section>
            </div>
        )
    } else {
        return <NoEvents />
    }
}


export default Today;