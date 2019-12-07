import * as constants from "../constants/AppConfig";

const CHART_URL = constants.BASE_URL + 'charts';
class ChartService {

    static myInstance = null;

    static getInstance() {
        if(ChartService.myInstance == null) {
            ChartService.myInstance = new ChartService();
        }
        return this.myInstance;
    }

    getIncidentsReportedPerYear = () => {
        return fetch(CHART_URL + '/incidentreportedperyearbybias', {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => Promise.reject(error));
    }
}

export default ChartService;
