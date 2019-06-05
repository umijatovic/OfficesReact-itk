import axios from 'axios';
import Office from '../entities/Office';
const URL = 'https://itk-exam-api.herokuapp.com/api/offices/';

class DataService{

    getData(){

        return axios.get(URL)
            .then(response => {
                
                var offices = response.data;
                return offices.map( office =>{
                    
                    return new Office(office.id, office.name, office.description, office.latitude, office.longitude, office.photo);
                    
                })
            })
    }
}

export default new DataService();