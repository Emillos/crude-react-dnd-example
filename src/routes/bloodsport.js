import React, { useState, useEffect } from 'react'
import castData from '../data.json'

const handleDragStart = (e, index, setElement) => {
  e.dataTransfer.setData('index', index)
  setElement(index)
}

const handleDrop = (e, index, setCast, cast, draggedElementIndex) => {
  let replacedCast = cast[index]
  cast.splice(index, 1, cast[draggedElementIndex])
  cast.splice(draggedElementIndex, 1, replacedCast)
  const newCast = [...cast]
  setCast(newCast)
}

const sortCast = (data) => {
  data.sort((a, b) => {
    const placementA = a.placement
    const placementB = b.placement
    let comparison = 0;
    if (placementA > placementB) {
      comparison = 1;
    }
    else if (placementA < placementB) {
      comparison = -1
    }
    return comparison
  })
  return data
}

const setNewOrder = (e, cast, setCast) => {
  console.log(cast)
  cast.map((c, i) => {
    console.log(c)
    c.placement = i + 1
  })
  console.log(cast)
  const newOrder = [...cast]
  setCast(newOrder)
}

const Bloodsport = () => {
  const [cast, setCast] = useState([])
  const [draggedElementIndex, setDraggedElementIndex] = useState(null)

  useEffect(() => {
    const fakeRes = sortCast(castData.cast)
    setCast(fakeRes)
  }, [])


  return (
    <div className="App">
      <h1>Title:Blood Sport!</h1>
      <div className='ulli'>
        {cast.map((c, i) => {
          return (
            <div
              key={i}
              className='castBox'
              draggable
              onDragStart={(e) => handleDragStart(e, i, setDraggedElementIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, i, setCast, cast, draggedElementIndex)}>
              <p>Name: {c.name} - Role: {c.role} <span> Order: {c.placement}</span></p>
            </div>
          )
        })}
      </div>
      <button className='setOrder' onClick={(e) => setNewOrder(e, cast, setCast)}>Set New Order</button>
    </div>
  );
}

export default Bloodsport;