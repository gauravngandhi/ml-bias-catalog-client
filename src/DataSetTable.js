import React from 'react';
import CaseRow from './CaseRow'
// import CourseListNav from '../components/CourseListNav';

const DataSetTable = ({abcs}) =>
    <div>
        {/*<CourseListNav addCourse={addCourse}/>*/}
        {/*{*/}
            {/*console.log(datas)*/}
        {/*}*/}
        {
            abcs.map(
                abc => console.log(abc.year)
            )
        }
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Time_Frame</th>
                <th className=""
                    scope="col">Company</th>
                <th className=""
                    scope="col">Industry</th>
                <th className=""
                    scope="col">Type Of Bias</th>
                <th className=""
                    scope="col">Link</th>

            </tr>
            </thead>

            <tbody>
            {
                abcs.map(
                    abc => <CaseRow abc={abc}/>
                )
            }

            </tbody>
        </table>
    </div>




export default DataSetTable;