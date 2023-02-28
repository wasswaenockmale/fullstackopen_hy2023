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

const updateNumber = (id, changedNumber) =>{
    // This should be used to update the number of a given contact
    const request = axios.put(`${baseUrl}/${id}`,changedNumber);
    return request.then(response => response.data);
}
export default {saveNumber, deleteNumber, updateNumber};