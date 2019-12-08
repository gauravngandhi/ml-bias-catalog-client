import * as constants from "../constants/AppConfig";

const DATASET_URL = constants.BASE_URL + 'dataset';
class DatasetService {

    static myInstance = null;

    static getInstance() {
        if(DatasetService.myInstance == null) {
            DatasetService.myInstance = new DatasetService();
        }
        return this.myInstance;
    }

    getTopMLModels = () => {
        return fetch(DATASET_URL+ '/stat/mlmodelcount', {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }

    getTopCompanies = () => {
        return fetch(DATASET_URL+ '/stat/companycount', {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }
}

export default DatasetService;
