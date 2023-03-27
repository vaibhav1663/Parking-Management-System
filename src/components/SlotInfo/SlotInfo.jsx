import React from 'react'
import { useParams } from 'react-router-dom';
import { bgColor, sensorData } from '../../data';
import './SlotInfo.scss';

const SlotInfo = () => {
    const slotId = useParams();
    // console.log(slotId)
    const slot = sensorData.find(slot => slot._id === Number(`${slotId.id}`));
    // console.log(slot);
  return (
    <div className="app__slotInfo">
        <div className="app__slotInfo-stat" style={{backgroundColor: bgColor(slot.status)}}>
            <p>{slot._id}</p>
        </div>
    </div>
  )
}

export default SlotInfo