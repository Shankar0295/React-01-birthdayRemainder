import React from 'react';
import JsonData from '../data.json'

// const List = ({ people }) => {
//     return (
//         <>
//             {people.map((person) => {
//                 const { id, name, age, image } = person;
//                 return (
//                     <article key={id} className='person'>
//                         <img src={image} alt={name} />
//                         <div>
//                             <h4>{name}</h4>
//                             <p>{age} years</p>
//                         </div>
//                     </article>
//                 );
//             })}
//         </>
//     );
// };

const List = ({ people }) => {
    console.log(people, "List")

    return (
        <article key={JsonData.id} className='person'>
            <img src={JsonData.image} alt={JsonData.name} />
            <div>
                <h4>{JsonData.name}</h4>
                <p>{JsonData.age} years</p>
            </div>
        </article>

    );

};



export default List;
