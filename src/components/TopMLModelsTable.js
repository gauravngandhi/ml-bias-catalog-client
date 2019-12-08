import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import DatasetService from "../services/DatasetService";

class TopMLModelsTable extends Component {

    datasetService = DatasetService.getInstance();
    constructor(props) {
        super(props);
        this.state = {
            tableData: null
        }
        this.getMLModelData();
    }

    componentDidMount() {
        this.getMLModelData()
    }

    getMLModelData() {
        this.datasetService.getTopMLModels()
            .then(res => this.setState({
                tableData: res
            }));
    }
    render() {
        return (
            <div>
                <h4>Top ML Models</h4>
            <Table striped bordered hover responsive variant={'dark'}>
                <thead>
                    <tr>
                        <th>ML Model</th>
                        <th>Number of times mentioned</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.tableData != null ? this.state.tableData.map(
                        data => {
                            return (
                                <tr>
                                    <td>{data._id == null ? 'Unnamed Model' : data._id}</td>
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

export default TopMLModelsTable;
