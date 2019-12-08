import React, {Component} from "react";
import { Chart } from "react-google-charts";
import ChartService from "../services/ChartService";
import DatasetService from "../services/DatasetService";

class IncidentsReportedPerYearChartByIndustry extends Component {

    chartService = ChartService.getInstance();
    datasetService = DatasetService.getInstance();
    constructor(props) {
        super(props);
        this.state = {
            chartData: undefined
        }
    }

    getChartData = () => {
        let currentChartData;
        const incidentPromise =  this.chartService.getIncidentReportedPerYearByIndustry();
        const industryPromise =  this.datasetService.getAllIndustry();
        Promise.all([incidentPromise, industryPromise])
            .then(res => {
                const incidentData = res[0];
                const industryTypes = res[1];
                //console.log(biasTypes);
                let chartDataType = ['Year'];
                industryTypes.forEach(industry => chartDataType.push(industry));
                let data = [chartDataType];
                incidentData.forEach(inData => {
                    //console.log(year);
                    let row = [inData.Year.toString()];
                    inData.CountByIndustry.forEach(industryCount => {
                        if(industryCount.Industry != null)
                            row.push(industryCount.Count)
                    });
                    data.push(row);
                });
                console.log(data);
                this.setState({
                    chartData : data
                });
            });
    }

    componentDidMount() {
        this.getChartData();
    }

    render() {
        if(this.state.chartData) {
            return (
                <div className={"incidents-per-year-chart-by-industry"}>
                    <Chart
                        chartType="ColumnChart"
                        data={this.state.chartData}
                        width="100%"
                        height="100%"
                        options={{
                            title: 'Incidents Per Year By Industry',
                            hAxis: {
                                title: 'Year'
                            },
                            vAxis: {
                                title: 'Incidents'
                            },
                            chartArea: {
                                width: '50%'
                            },
                            isStacked: true,
                            bars: 'vertical'
                        }}
                        legendToggle
                    />
                </div>
            )
        }
        else {
            return "Loading"
        }
    }
}

export default IncidentsReportedPerYearChartByIndustry;

