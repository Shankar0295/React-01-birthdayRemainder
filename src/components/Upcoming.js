import React, { useState } from 'react'
import JsonData from '../data.json';

const Upcoming = () => {
    const [people, setPeople] = useState(JsonData);
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 1)
    let month = currentDate.getUTCMonth() + 1; //months from 1-12.
    let day = currentDate.getUTCDate();
    let year = currentDate.getUTCFullYear();
    let newdate = month + "-" + day;
    const birthdayToDisplay = people.map((obj) => {
        let c_time = obj.dob.split('-');
        let pid = obj.id;
        let pname = obj.name;
        let pimage = obj.image;
        let dob_month = c_time[1]
        let dob_date = c_time[2]
        let dob = dob_month + '-' + dob_date;
        let age = Math.abs(year - c_time[0]);
        let newObj = [pid, pname, age, dob, pimage]
        return newObj
    }).filter(item => item[3] === newdate)

    // To convert array to object for rendering
    const arrtoobj = []
    birthdayToDisplay.forEach((element, index) => {
        arrtoobj.push({
            id: birthdayToDisplay[index][0],
            name: birthdayToDisplay[index][1],
            age: birthdayToDisplay[index][2],
            dob: birthdayToDisplay[index][3],
            image: birthdayToDisplay[index][4],
        })
    })

    //JSX
    if (arrtoobj.length > 0) {
        return (
            <div>
                <section className='container'>
                    <h3>{arrtoobj.length} Birthday's Upcoming </h3>
                    {arrtoobj.map((item, index) => {
                        return (
                            <article key={index} className='person'>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.age} {item.age > 1 ? 'Years' : 'Year'}</p>
                                </div>
                            </article>
                        );
                    })}
                    <button onClick={() => setPeople([])}>Clear all</button>
                </section>
            </div>
        )
    } else {
        return (<main>
            <section className='container'>
                <h3>Oops! No Upcoming Birthday's</h3>
            </section>
        </main>)
    }
}

export default Upcoming;
