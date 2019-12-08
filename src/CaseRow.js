import React from 'react';

const CaseRow =(abc) =>

    <tr>
        <th scope="row">{abc.abc.year}</th>
        <td>{abc.abc.company}</td>
        <td>{abc.abc.industry}</td>
        <td>{abc.abc.type_of_bias}</td>
        <td>{abc.abc.link}</td>
    </tr>

export default CaseRow;