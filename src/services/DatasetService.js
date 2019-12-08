import * as constants from "../constants/AppConfig";

const DATASET_URL = constants.BASE_URL + 'api/dataset';
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
            credentials: "omit",
            headers: {
                'Content-type': 'application/json',
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
            }
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }

    getTopCompanies = () => {
        return fetch(DATASET_URL+ '/stat/companycount', {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-type': 'application/json',
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
            }
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }

    getAllIndustry = () => {
        return fetch(constants.BASE_URL + 'api/industry', {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-type': 'application/json',
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
            }
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }

    getAllBias = () => {
        return fetch(constants.BASE_URL+ 'api/biases', {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }
}

export default DatasetService;
