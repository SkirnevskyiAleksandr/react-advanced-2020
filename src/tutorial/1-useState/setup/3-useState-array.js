import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const clear = (id) => {
    const newPeople = people.filter((name) => { return (name.id !== id) })
    setPeople(newPeople)
  }

  return (
    <>
      {

        people.map((persone) => {
          const { id, name } = persone
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => { clear(id) }}> clear</button>
            </div>
          )
        })
      }
      <button className="btn" onClick={() => { setPeople([]) }}>delete button</button>
    </>
  )
};

export default UseStateArray;
