import React, {Component, Fragment} from "react";
import {Button, Input} from 'reactstrap';
import {connect} from 'react-redux'
import {INPUT,ADD_COUNTER} from "./ActionTypeCounter";

class  AddCounter extends Component{
    render(){
        console.log('props: ', this.props);
        const {dispatch, form} = this.props;
        return(
            <Fragment>
                <Input  onChange={(event) =>
                    dispatch({type:INPUT, payload:event.target.value})} ></Input>
                <Button color="primary" value={form.nama} block onClick={(event) =>
                    dispatch({ type: ADD_COUNTER, payload:0})}>Add Counter</Button>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {...state};
}

export default connect(mapStateToProps)(AddCounter);
