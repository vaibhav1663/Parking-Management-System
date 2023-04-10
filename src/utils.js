import axios from 'axios';

export const bookSlot = (id) => {
    axios.patch(`http://localhost:3001/book/${id}`);
};