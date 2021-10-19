import React, { useState } from 'react';
import Upcoming from './Upcoming';
import data from '../data';

function Today() {
    const [people, setPeople] = useState(data);
    return (
        <>
            {people.map((item) => {
                const { id, name, age, image } = item;
                let c_time = item.dob.split('-');
                let dob_month = c_time[1]
                let dob_date = c_time[2]

                //For Current Date
                let current_date = new Date();
                current_date.setDate(current_date.getDate());
                let current_dateString = (current_date.getFullYear() + '-' + ('0' + (current_date.getMonth() + 1)).slice(-2) + '-' + ('0' + current_date.getDate()).slice(-2));
                let currDate = current_dateString.split('-')
                let today_month = currDate[1]
                let today_date = currDate[2]
                if ((dob_month === today_month) && (dob_date === today_date)) {
                    return (
                        <div>
                            <article key={id} className='person'>
                                <img src={image} alt={name} />
                                <div>
                                    <h4>{name}</h4>
                                    <p>{age} years</p>
                                </div>
                            </article>
                        </div>
                    );
                } else {
                    return <Upcoming people={people} />
                }
            })}

        </>
    )

}

export default Today;