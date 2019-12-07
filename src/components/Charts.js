import React from "react";
import IncidentsReportedPerYearChartByBias from "./IncidentsReportedPerYearChartByBias";
import IncidentsReportedPerYearChartByIndustry from "./IncidentReporterPerYearChartByIndustry";

const Charts = () =>
    <div className='row'>
        <div className='col-6'>
        <IncidentsReportedPerYearChartByBias/>
        </div>
        <div className='col-6'>
            <IncidentsReportedPerYearChartByIndustry/>
        </div>
    </div>

export default Charts;
