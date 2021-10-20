import React, { useState } from 'react'
import JsonData from './data.json'
// import List from './List'
import NoEvents from './components/NoEvents'
import Today from './components/Today'
import Upcoming from './components/Upcoming';
function App() {
  console.log(JsonData)
  return (
    <main>
      <section className='container'>
        <Today />
      </section>
    </main>

  )
  // const [people, setPeople] = useState(data)
  // const count = people.length;
  // console.log(JsonData)
  // if (count > 0) {
  //   return (
  //     <main>
  //       <section className='container'>
  //         <h3>{count} Birthday's Today</h3>
  //         <Today />
  //         {/* <Upcoming /> */}
  //         <button onClick={() => setPeople([])}>Clear all</button>
  //       </section>
  //     </main>
  //   )
  // } else {
  //   return <NoEvents />
  // }


}

export default App
