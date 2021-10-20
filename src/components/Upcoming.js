import React from 'react'
// import Today from './Today'
// import data from '../data'

function Upcoming(props) {
    return (
        <div>
            <h3>Upcoming Birthdays</h3>
            <article key={props.id} className='person'>
                <img src={props.image} alt={props.name} />
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.age} years</p>
                </div>
            </article>
        </div>


    );
}

export default Upcoming;
