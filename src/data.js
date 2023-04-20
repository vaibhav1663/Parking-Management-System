export const sensorData = [
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

// Booked - 1
// Occupied - 0
// Free - 1
export const bgColor = (status, booked) => {
  if (status === 1) {
    if (booked === 0) {
      return "#0e7800";
    }
    if (booked === 1) {
      return "#785800";
    }
  } else {
    return "#781800";
  }
};
