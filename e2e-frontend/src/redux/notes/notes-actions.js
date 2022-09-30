import {NoteActions} from "./note-types";
import axios from 'axios';

let url = 'http://localhost:8081';

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
    payload: error
});

const editNoteStart = () => ({
    type: NoteActions.EDIT_NOTES_START,
})
const editNoteSuccess = () => ({
    type: NoteActions.EDIT_NOTES_SUCCESS,
})
const editNoteError = (err) => ({
    type: NoteActions.EDIT_NOTES_ERROR,
    payload: err,
})

const getSingleNoteStart = () => ({
    type: NoteActions.SINGLE_NOTE_START,
})

const getSingleNoteSuccess = (data) => ({
    type: NoteActions.SINGLE_NOTE_SUCCESS,
    payload: data
})

const getSingleNoteError = (err) => ({
    type: NoteActions.SINGLE_NOTE_ERROR,
    payload: err,
})
const DeleteNoteStart = () => ({
    type: NoteActions.DELETE_NOTE_START
})
const DeleteNoteSuccess = () => ({
    type: NoteActions.DELETE_NOTE_SUCCESS,
})
const DeleteNoteError = (err) => ({
    type: NoteActions.DELETE_NOTE_ERROR,
    payload: err,
})


export const DoEditNote = (data) => {
    console.log(`id get Called ${data._id}`);
    console.log(`@@@@running`)
    console.log(data, `data from action files`);
    console.log(`id get Called ${data._id}`);
    return dispatch => {
        dispatch(editNoteStart())
        axios
            .post(`${url}/notes/${data._id}`, {
                ...data
            })
            .then(() => {
                dispatch(editNoteSuccess());
                dispatch(DoGetAllNotes());
            })
            .catch(err => {
                dispatch(editNoteError(err))
            })
    }
}

export const DoCreateNote = (data) => {
    console.log(data);
    console.log(`data ${data} get Called from DoCreateNote Function`)
    let hasError = false;
    return dispatch => {
        dispatch(createNoteStart())
        axios
            .post(`${url}/notes/add`, {
                ...data
            })
            .then((res, err) => {
                if (err) {
                    hasError = true;
                    dispatch(createNoteError(err))

                } else if (!hasError) {
                    console.log(res)
                    dispatch(createNoteSuccess());
                    dispatch(DoGetAllNotes());
                }
            })
            .catch(err => {
                dispatch(createNoteError(err))
            })
    }
}

export const DoGetAllNotes = () => {
    let hasError = false;
    return dispatch => {
        dispatch(getNoteStart())
        axios
            .get(`${url}/notes`)
            .then((res, err) => {
                if (err) {
                    hasError = true;
                    dispatch(getNoteError(err))
                } else if (!hasError) {
                    dispatch(getNoteSuccess(res.data))
                    console.log(res && res.data, `response from LocalHost:8080`);
                }
            })
            .catch(err => {
                dispatch(getNoteError(err))
            })
    }
}


export const doGetSingleNote = (id) => {
    let hasError = false;
    return dispatch => {
        dispatch(getSingleNoteStart())
        axios
            .get(`${url}/notes/${id}`)
            .then((res, err) => {
                if (err) {
                    hasError = true;
                    dispatch(getSingleNoteError(err))
                } else if (!hasError) {
                    dispatch(getSingleNoteSuccess(res.data))
                }
            })
            .catch(err => {
                dispatch(getSingleNoteError(err))
            })
    }
}


export const doDeleteSingleNote = (id) => {
    return dispatch => {
        dispatch(DeleteNoteStart())
        axios
            .delete(`${url}/${id}`)
            .then(() => {
                dispatch(DeleteNoteSuccess())
                dispatch(DoGetAllNotes())
            })
            .catch(err => {
                dispatch(DeleteNoteError(err))
            })
    }
}
