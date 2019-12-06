import * as constants from "../constants/AppConfig";

const CHART_URL = constants.BASE_URL + '/charts';
class ChartService {

    static myInstance = null;

    static getInstance() {
        if(ChartService.myInstance == null) {
            ChartService.myInstance = new ChartService();
        }
        return this.myInstance;
    }

    getIncidentsReportedPerYear = () => {
        let data = [
            {
                'year': '2010',
                'count': [1,9,8,7]
            },
            {
                'year': '2015',
                'count': [1,0,2,6]
            }
        ];
        return data;
    }
}

export default ChartService;
