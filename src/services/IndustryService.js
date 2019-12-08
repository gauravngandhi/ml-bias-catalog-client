import * as constants from "../constants/AppConfig";

const INDUSTRY_URL = constants.BASE_URL + 'industry';
class IndustryService {

    static myInstance = null;

    static getInstance() {
        if(IndustryService.myInstance == null) {
            IndustryService.myInstance = new IndustryService();
        }
        return this.myInstance;
    }

    getAllIndustry = () => {
        return fetch(INDUSTRY_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }
}

export default IndustryService;
