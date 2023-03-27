export const sensorData = [
<<<<<<< HEAD
    {
        _id: 1,
        status: 1,
        
    },
    {
        _id: 2,
        status: 0,
    },
    {
        _id: 3,
        status: 1,
        
    },
    {
        _id: 4,
        status: 1,
        
    },
    {
        _id: 5,
        status: 0,

    },
    {
        _id: 6,
        status: 0,

    },
]

export const bgColor = (status) =>{
    if(status===1){
        return 'green';
    }
    else{
        return 'red';
    }
}

// const bookSlot = (slotId) => {
//     sensorData.find(_id === slotId).then((data) => {
//         console.log(data); 
//     })
// }
=======
  {
    _id: 1,
    status: 1,
    // bg: 'green',
  },
  {
    _id: 2,
    status: 1,
    // bg:'red',
  },
  {
    _id: 3,
    status: 1,
    // bg: 'green',
  },
  {
    _id: 4,
    status: 1,
    // bg: 'green',
  },
  {
    _id: 5,
    status: 0,
    // bg: 'red',
  },
  {
    _id: 6,
    status: 0,
    // bg: 'red',
  },
];

export const bgColor = (status) => {
  if (status === 1) {
    return "green";
  } else {
    return "red";
  }
};
>>>>>>> 6708bade4c87173f35abc06fca08acc1026b24c4
