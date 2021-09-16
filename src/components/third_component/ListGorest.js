import React,{ Component } from "react";
import { Table, Card, CardHeader, Spinner } from "reactstrap";
import * as Service from "./GorestService";
import { FETCH_GOREST, FETCH_COMPLETE_GOREST } from "./Action";
import { connect } from "react-redux";

class ListGorest extends Component {
    componentDidMount(){
        const {fetchData, fetchComplete}=this.props;
        fetchData();

        Service.getGorest().then((gorest)=>{
            console.log(gorest.data)
            fetchComplete(gorest.data);
        });
    }



    generateTableRows(){
        const {gorests}=this.props;
        let rows = <tr><td colSpan="2" className="text-center"><Spinner color="primary"/></td></tr>

        console.log(gorests)
        if (!this.props.isLoading) {
            rows = gorests.map((gorest, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{gorest.name}</td>
                        <td>{gorest.email}</td>
                        <td>{gorest.gender}</td>
                        <td>{gorest.status}</td>
                    </tr>
                )
            });
        }
        return rows;
    }

    render() {
        return(
            <Card>
                <CardHeader tag="strong">Gorest</CardHeader>
                <Table responsive striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>{this.generateTableRows()}</tbody>
                </Table>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData:()=>dispatch({type: FETCH_GOREST}),
        fetchComplete:(payload)=>dispatch({type: FETCH_COMPLETE_GOREST, payload}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListGorest);
