// import React, { useEffect, useState } from 'react';
import { sensorData, bgColor } from '../../data';
import './Layout.scss';
 

const Layout = () => {
  return (
    <div className="app__layout">
      <div className="app__layout-heading">
        <h2>COEP ENTC Parking</h2>
      </div>
      <div className="app__layout-schematic">
        {sensorData.map((item, key) => (
          <div className="app__layout-schematic-cont" style={{backgroundColor: bgColor(item.status)}} key= {key}>
            <p>Slot: {item._id}</p>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Layout