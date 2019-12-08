import React from "react";
import IncidentsReportedPerYearChartByBias from "./IncidentsReportedPerYearChartByBias";
import IncidentsReportedPerYearChartByIndustry from "./IncidentReporterPerYearChartByIndustry";
import Carousel from 'react-bootstrap/Carousel'

const Charts = () =>
    <div className='col-12 row'>
        <div className={'col-12'}>
            <IncidentsReportedPerYearChartByBias/>>
        </div>
        <div className={'col-12'}>
            <IncidentsReportedPerYearChartByIndustry/>
        </div>
    </div>

export default Charts;
