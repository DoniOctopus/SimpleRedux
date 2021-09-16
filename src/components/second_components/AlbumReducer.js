import {
    ADD_ALBUM,
    HANDLE_DELETE,
    HANDLE_EDIT,
    HANDLE_INPUT_CHANGES,
    HANDLE_SEARCH,
    RESET_FORM,
    UPDATE_ALBUM
} from "./ActionTypeAlbum";

const initialValue={
    keyword : '',
    albumform: {
        id:'',
        name:'',
        releaseYear:''
    },
    search:'',
    albums: [],
}

function albumReducer(state=initialValue, action) {

    const {type,payload}=action;

    switch(type) {
        case ADD_ALBUM:
            return{ ...state, albums: state.albums.concat({ ...payload})}
        case UPDATE_ALBUM:
            return{ ...state, albums: state.albums.map( (album)=>album.id===payload.id ? payload : album)}
        case HANDLE_INPUT_CHANGES:
            const {inputName, inputValue}=payload
            const albumform={...state.albumform}
            albumform[inputName]=inputValue
            return{ ...state, albumform: {...albumform} }
        case HANDLE_EDIT:
            const album=state.albums.find((album)=>album.id===payload)
            return{ ...state, albumform: {...album} }
        case HANDLE_DELETE:
            return{ ...state, albums: state.albums.filter( (album) => album.id!==payload ) }
        case HANDLE_SEARCH:
            return{ ...state, keyword: payload }
        case RESET_FORM:
            return{ ...state, albumform: { id: '', name: '', releaseYear:''}}
        default:
            return{ ...state}
    }
}
export default albumReducer;
