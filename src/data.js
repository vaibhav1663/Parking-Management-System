export const sensorData = [
    {
        _id: 1,
        status: 1,
        // bg: 'green',
    },
    {
        _id: 2,
        status: 0,
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
]

export const bgColor = (status) =>{
    if(status===1){
        return 'green';
    }
    else{
        return 'red';
    }
}