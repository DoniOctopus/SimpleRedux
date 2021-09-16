import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {ADD_ALBUM, HANDLE_INPUT_CHANGES, RESET_FORM, UPDATE_ALBUM} from "./ActionTypeAlbum";

class AlbumForm extends Component{
    handleSubmit = (event) => {
        event.preventDefault()
        const { albumform, albums,updateAlbum, addAlbum,resetForm } =this.props
        if (albumform.id > 0) {
            updateAlbum(albumform)
        }
        else {
            albumform.id = albums.length + 1;
            addAlbum(albumform)
        }
        resetForm()
    }

    inputSelectYearOption() {
        let year = []
        for (let index = 0; index < 21; index++) {
            year.push(2000 + index);
        }
        return year
    }
    render() {
        const { albumform, handleInputChanges  } = this.props;
        return(
            <Fragment>
                <Col sm="12">
                    <Card className="shadow">
                        <CardHeader tag ="strong">Form Album</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleSubmit}>

                                <FormGroup row>
                                    <Label for ="name" sm="4">Title Album</Label>
                                    <Col sm="8">
                                        <Input type ="text" id="name" name="name" value={ albumform.name } onChange={ (event) => handleInputChanges('name',event.target.value) } placeholder="Type The Name"/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="releaseYear" sm="4">Release Year</Label>
                                    <Col sm="8">
                                        <Input type="select" id="releaseYear" name="releaseYear" value={ albumform.releaseYear } onChange={ (event) => handleInputChanges('releaseYear', event.target.value) }>
                                            <option>-Select Year-</option>
                                            {
                                                this.inputSelectYearOption().map((element,index)=>{
                                                    return(
                                                        <option key={index}>{element}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{size : 8, offset: 4}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return{
        handleInputChanges: (inputName, inputValue) => dispatch({type:HANDLE_INPUT_CHANGES, payload: {inputName, inputValue} } ),
        addAlbum : (payload) => dispatch({type: ADD_ALBUM, payload:payload}),
        updateAlbum : (payload) => dispatch({type: UPDATE_ALBUM, payload:payload}),
        resetForm: ()=> dispatch({type: RESET_FORM})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AlbumForm);
