import axios from "axios";

const createRoom = async (data) => {
    try {
        const response = await axios.post('http://localhost:80/Back_End/controls/create_room.php', data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
  
      } catch (error) {
        throw new Error( error.response.data.message )
      }
};

export { createRoom };