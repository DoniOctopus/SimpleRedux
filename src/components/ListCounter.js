import React, {Component, Fragment} from "react";
import {Card,Col, CardHeader, CardFooter, Button, CardBody} from "reactstrap";
import {connect} from "react-redux";
import {DELETE,INCREMENT,DECREMENT} from "./ActionTypeCounter";

class ListCounter extends Component{

    render(){
        console.log('ListCounter: ', this.props);
        const {counters =[], dispatch} = this.props;

        return (
            <Fragment>
                {
                    counters.map((counter, index) => {
                        return(
                            <Col sm="2" key={index}>
                                <Card className="shadow">
                                    <CardHeader tag="strong">{counter.form}
                                        <Button type="button" color="danger" className="float-right" onClick={() => dispatch({type:DELETE, payload: index})}>x</Button>
                                    </CardHeader>
                                    <CardBody>
                                        <h5 className="text-center">{counter.value}</h5>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="button" color="primary" className="float-left" onClick={() => dispatch({type:INCREMENT, payload: index})}>+</Button>
                                        <Button type="button" color="primary" className="float-right" onClick={() => dispatch({type:DECREMENT, payload: index})}>-</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps)(ListCounter);
