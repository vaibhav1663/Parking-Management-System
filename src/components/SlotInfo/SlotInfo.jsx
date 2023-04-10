import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { bgColor } from '../../data';
import './SlotInfo.scss';


const SlotInfo = () => {
  const {id} = useParams();
  const [currData, setcurrData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/slot/${id}`).then((data) => {
      setcurrData(data.data);
      console.log(currData);
    })
  }, [])
  

  const book = async () => {
    await axios.patch(`http://localhost:3001/book/${id}`);
    window.location.reload(false);
  }
  
  return (
    <div className="app__slotInfo">
      <div className="app__slotInfo-stat" style={{backgroundColor: bgColor(currData.status)}}>
        <p>{currData.id}</p>
      </div>
      <button onClick = {book.bind(currData.id)} className='app__slotInfo-btn'>Book Slot</button>
    </div>
  )
}

export default SlotInfo