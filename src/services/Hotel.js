import axios from "axios";

const createHotel = async (data) => {
    try {
        const response = await axios.post('http://localhost:80/Back_End/controls/create_hotel.php', data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        
      } catch (error) {
         throw new Error( "hotel already exist" )
      }
      
};

export { createHotel };