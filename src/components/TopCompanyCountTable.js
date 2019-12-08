import React, {Component} from 'react';
import DatasetService from "../services/DatasetService";
import Table from "react-bootstrap/Table";


class TopCompanyCountTable extends Component {

    datasetService = DatasetService.getInstance();
    constructor(props) {
        super(props);
        this.state = {
            tableData: null
        }
        this.getCompanyData();
    }

    componentDidMount() {
        this.getCompanyData()
    }

    getCompanyData() {
        this.datasetService.getTopCompanies()
            .then(res => this.setState({
                tableData: res
            }));
    }
    render() {
        return (
            <div>
                <h4>Top Companies Mentioned</h4>
                <Table striped bordered hover responsive variant={'dark'}>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Number of times mentioned</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tableData != null ? this.state.tableData.map(
                            data => {
                                return (
                                    <tr>
                                        <td>{data._id}</td>
                                        <td>{data.count}</td>
                                    </tr>
                                )
                            }
                        ) : ''
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TopCompanyCountTable;
