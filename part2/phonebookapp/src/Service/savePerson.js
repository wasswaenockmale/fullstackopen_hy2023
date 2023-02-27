import axios from "axios";

// Now create the base url
const baseUrl = "http://localhost:3001/persons";

const saveNumber = newNumber =>{
    const request = axios.post(baseUrl, newNumber);
    return request.then(response => response.data);
}

const deleteNumber = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}
export default {saveNumber, deleteNumber};