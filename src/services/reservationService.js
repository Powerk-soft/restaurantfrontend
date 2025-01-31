import axios from 'axios';

const url = "http://localhost:8080/api";
class Reservation{

    create(formDate){
        const urls = url+'/reservations-create';
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        };

        return axios.post(urls, formDate, config);

    }

}

export default new Reservation();
