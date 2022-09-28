import {NoteActions} from "./note-types";
import axios from 'axios';

let url = 'http://localhost:8080/notes';

const getNoteStart = () => ({
    type: NoteActions.GET_NOTES_START,
})


const getNoteSuccess = (data) => ({
    type: NoteActions.GET_NOTES_SUCCESS,
    payload: data,
})

const getNoteError = (error) => ({
    type: NoteActions.GET_NOTES_ERROR,
    payload: error,
})


export const DoGetAllNotes = () => {
    return dispatch => {
        dispatch(getNoteStart())
        axios
            .get(url)
            .then(res => {
                dispatch(getNoteSuccess(res.data))
                console.log(res && res.data, `response from LocalHost:8080`);
            })
            .catch(err => {
                dispatch(getNoteError(err))
            })
    }
}