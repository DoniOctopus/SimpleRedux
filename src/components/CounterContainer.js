import React, { Component, Fragment } from 'react';
import {createStore} from "redux";
import AddCounter from './AddCounter';
import ListCounter from './ListCounter';
import {Provider} from 'react-redux';
import {Row, Col} from 'reactstrap'
import CounterReducer from "./CounterReducer";


class CounterContainer extends Component {
    render() {
        const counterStore = createStore(CounterReducer);
        return (
            <Fragment>
                <Provider store={counterStore}>
                    <Row className="mb-3">
                        <Col sm={{size:4, offset:4}}>
                            <AddCounter/>
                        </Col>
                    </Row>
                    <Row>
                        <ListCounter/>
                    </Row>
                </Provider>
            </Fragment>
        );
    }
}

export default CounterContainer;
