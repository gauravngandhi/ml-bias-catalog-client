import * as constants from "../constants/AppConfig";

const CHART_URL = constants.BASE_URL + 'api/charts';
class ChartService {

    static myInstance = null;

    static getInstance() {
        if(ChartService.myInstance == null) {
            ChartService.myInstance = new ChartService();
        }
        return this.myInstance;
    }

    getIncidentsReportedPerYearByBias = () => {
        return fetch(CHART_URL + '/incidentreportedperyearbybias', {
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

    getIncidentReportedPerYearByIndustry = () => {
        return fetch(CHART_URL + '/incidentreportedperyearbyindustry', {
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


}

export default ChartService;
