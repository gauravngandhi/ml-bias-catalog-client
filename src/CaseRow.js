import React from 'react';
import {Link} from "react-router-dom";

const CaseRow =(abc) =>
<div>
    <tr>
        <td className="">{abc.abc.year}</td>
        <td className="">{abc.abc.company}</td>
        <td className="">{abc.abc.industry}</td>
        <td className="">{abc.abc.type_of_bias}</td>
            <td className="">{abc.abc.link}</td>
    </tr>
</div>
export default CaseRow;