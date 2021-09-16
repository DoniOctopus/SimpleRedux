import React, { Component, Fragment } from 'react';
import {Row} from "reactstrap";
import {createStore} from "redux";
import albumReducer from "./AlbumReducer";
import {Provider} from "react-redux";
import AlbumForm from "./AlbumForm";
import AlbumTable from "./AlbumTable";

const albumStore=createStore(albumReducer)

class AlbumContainer extends Component{
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }
    render() {
        return(
            <Fragment>
                <Provider store={albumStore}>
                    <Row>
                        <AlbumForm/>
                    </Row>
                    <Row>
                        <AlbumTable/>
                    </Row>
                </Provider>
            </Fragment>
        );
    }


}
export default AlbumContainer;
