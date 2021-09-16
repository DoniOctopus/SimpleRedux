import React, {Component} from "react";
import {Card, CardHeader, Table, Button, Input, Col} from 'reactstrap';
import {HANDLE_DELETE, HANDLE_EDIT, HANDLE_SEARCH} from "./ActionTypeAlbum";
import {connect} from 'react-redux';

class AlbumTable extends Component{

    generateTableRows() {
        const {albums,keyword,handleEdit, handleDelete, handleSearch } = this.props;
        const filteredAlbum = keyword && keyword.length > 0 ? albums.filter((album) => {
            if (album.name.toLowerCase().includes(keyword)) return album;
            else return false;
        }) : albums;

        let rows = (
            <tr>
                <td colSpan="8" className="table-warning text-center"><strong><em>No album(s) yet.</em></strong></td>
            </tr>
        );

        if ( albums.length > 0 && filteredAlbum.length === 0) {
            rows = (
                <tr>
                    <td colSpan="4" className="table-warning text-center">
                        <strong><em>No album(s) found.</em></strong>
                    </td>
                </tr>
            );
        }

        if ( filteredAlbum.length > 0 ) {
            rows = filteredAlbum.map((album, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{ index + 1 }</th>
                        <td>{album.name}</td>
                        <td>{album.releaseYear}</td>

                        <td><Button type="button" color="warning" size="sm" className="shadow">Edit</Button></td>
                        <td><Button type="button" color="danger" size="sm" className="shadow">Delete</Button></td>
                    </tr>
                );
            });
        }

        return rows;
    }

    render() {
        const { albums, handleSearch, keyword } = this.props;
        const filteredAlbum = albums.filter((album) => {
            if(!keyword || keyword.length === 0) return album;
        });
        return(
            <Col sm="12">
                <Card className="shadow">
                    <CardHeader tag="strong">Albums ({ albums.length })</CardHeader>
                    <CardHeader>
                        <Input type="text" value={keyword} onChange={(event)=>{handleSearch(event.target.value)}} placeholder="Search"/>
                    </CardHeader>
                    <Table striped hover responsive className="m-0">
                        <thead>
                        <tr>
                            <th width="5%">No</th>
                            <th>Title Album</th>
                            <th width>Release Year</th>
                            <th colSpan="2" width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>{ this.generateTableRows()}</tbody>
                    </Table>
                </Card>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return{ ...state};
}

function mapDispatchToProps(dispatch) {
    return {
        handleEdit: (payload) => dispatch({type: HANDLE_EDIT}, payload),
        handleDelete: (payload) => dispatch({type: HANDLE_DELETE}, payload),
        handleSearch: (payload) => dispatch({type: HANDLE_SEARCH}, payload)
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (AlbumTable);
