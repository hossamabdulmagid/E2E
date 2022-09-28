import {NoteActions} from "./note-types";
import axios from 'axios';

let url = 'http://localhost:8080';

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

const createNoteStart = () => ({
    type: NoteActions.CREATE_NOTES_START,
})


const createNoteSuccess = () => ({
    type: NoteActions.CREATE_NOTES_SUCCESS,
})


const createNoteError = (error) => ({
    type: NoteActions.CREATE_NOTES_ERROR,
    paylaod: error
});


export const DoCreateNote = (data) => {
    console.log(data);
    console.log(`data ${data} get Called from DoCreateNote Function`)
    return dispatch => {
        dispatch(createNoteStart())
        axios
            .post(`${url}/notes/add`, {
                ...data
            })
            .then(res => {
                console.log(res)
                dispatch(createNoteSuccess())
            })
            .catch(err => {
                dispatch(createNoteError(err))
            })
    }
}

export const DoGetAllNotes = () => {
    return dispatch => {
        dispatch(getNoteStart())
        axios
            .get(`${url}/notes`)
            .then(res => {
                dispatch(getNoteSuccess(res.data))
                console.log(res && res.data, `response from LocalHost:8080`);
            })
            .catch(err => {
                dispatch(getNoteError(err))
            })
    }
}