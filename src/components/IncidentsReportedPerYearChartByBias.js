import React, {Component} from "react";
import { Chart } from "react-google-charts";
import ChartService from "../services/ChartService";
import DatasetService from "../services/DatasetService";

class IncidentsReportedPerYearChartByBias extends Component {

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
        console.log("asd");
        const incidentPromise =  this.chartService.getIncidentsReportedPerYearByBias();
        const biasTypePromise =  this.datasetService.getAllBias();
        Promise.all([incidentPromise, biasTypePromise])
            .then(res => {
                const incidentData = res[0];
                const biasTypes = res[1];
                console.log(incidentData);
                console.log(biasTypes);
                let chartDataType = ['Year'];
                biasTypes.forEach(bias => chartDataType.push(bias));
                let data = [chartDataType];
                incidentData.forEach(inData => {
                    let row = [inData.Year.toString()];
                    inData.CountByBias.forEach(biasCount => {
                        if(biasCount.Bias != null)
                            row.push(biasCount.Count)
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
                <div className={"incidents-per-year-chart-by-bias"}>
                    <Chart
                        chartType="ColumnChart"
                        data={this.state.chartData}
                        width="100%"
                        height="100%"
                        options={{
                            title: 'Incidents Per Year By Bias',
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

export default IncidentsReportedPerYearChartByBias;

