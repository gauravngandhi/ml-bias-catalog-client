import * as constants from "../constants/AppConfig";

const BIAS_URL = constants.BASE_URL + 'bias';
class BiasService {

    static myInstance = null;

    static getInstance() {
        if(BiasService.myInstance == null) {
            BiasService.myInstance = new BiasService();
        }
        return this.myInstance;
    }

    getAllBias = () => {
        return fetch(BIAS_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }
}

export default BiasService;
