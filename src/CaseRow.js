import React from 'react';

const CaseRow =(abc) =>

    <tr>
        <th scope="row">{abc.abc.time_frame}</th>
        <td>{abc.abc.company}</td>
        <td>{abc.abc.industry}</td>
        <td>{abc.abc.type_of_bias}</td>
            <td><a href={abc.abc.link}>Visit</a></td>
    </tr>

export default CaseRow;