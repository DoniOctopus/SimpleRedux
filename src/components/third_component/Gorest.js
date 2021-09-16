import React, { Component } from 'react';
import { createStore } from 'redux';
import GorestReducer from './GorestReducer';
import { Provider } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ListGorest from './ListGorest';

const gorestStore = createStore(GorestReducer);
class Gorest extends Component {
    render() {
        return (
            <Provider store={gorestStore}>
                <Row>
                    <Col>
                        <ListGorest/>
                    </Col>
                </Row>
            </Provider>
        )
    }
}

export default Gorest;
