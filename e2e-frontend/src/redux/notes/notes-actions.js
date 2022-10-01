import {NoteActions} from "./note-types";
import axios from 'axios';

let url = 'http://localhost:8081';
let urlFakeUrl = 'http://localhost:8081/fakeurl';

const getNoteStart = () => ({
    type: NoteActions.GET_NOTES_START,
})


const getNoteSuccess = (data) => ({
    type: NoteActions.GET_NOTES_SUCCESS,
    payload: data,
})

const getNoteError = (error) => {
    if (error) return {
        type: NoteActions.GET_NOTES_ERROR,
        payload: error,
    }
}
const createNoteStart = () => ({
    type: NoteActions.CREATE_NOTES_START,
})


const createNoteSuccess = () => ({
    type: NoteActions.CREATE_NOTES_SUCCESS,
})


const createNoteError = (error) => {
    if (error) return {
        type: NoteActions.CREATE_NOTES_ERROR,
        payload: error
    }
};

const editNoteStart = () => ({
    type: NoteActions.EDIT_NOTES_START,
})
const editNoteSuccess = () => ({
    type: NoteActions.EDIT_NOTES_SUCCESS,
})
const editNoteError = (err) => {
    if (err) return {
        type: NoteActions.EDIT_NOTES_ERROR,
        payload: err,
    }
}

const getSingleNoteStart = () => ({
    type: NoteActions.SINGLE_NOTE_START,
})

const getSingleNoteSuccess = (data) => ({
    type: NoteActions.SINGLE_NOTE_SUCCESS,
    payload: data
})

const getSingleNoteError = (err) => {
    if (err) return {
        type: NoteActions.SINGLE_NOTE_ERROR,
        payload: err,
    }
}

const DeleteNoteStart = () => ({
    type: NoteActions.DELETE_NOTE_START
})
const DeleteNoteSuccess = () => ({
    type: NoteActions.DELETE_NOTE_SUCCESS,
})
const DeleteNoteError = (err) => {
    if (err) return {
        type: NoteActions.DELETE_NOTE_ERROR,
        payload: err,
    }
}

export const DoEditNote = (data) => {
    let hasError = false;
    return dispatch => {
        dispatch(editNoteStart())
        axios
            .post(`${url}/notes/${data._id}`, {
                ...data
            })
            .then((res, err) => {
                if (res.status !== 200) {
                    dispatch(editNoteError(err.message))

                } else if (!hasError && res.status === 200) {
                    dispatch(editNoteSuccess());
                    dispatch(DoGetAllNotes());
                }
            })
            .catch(err => {
                console.log(`you have error`);
                dispatch(editNoteError(err.message))
            })
    }
}

export const DoCreateNote = (data) => {
    let hasError = false;
    return dispatch => {
        dispatch(createNoteStart())
        axios
            .post(`${url}/notes/add`, {
                ...data
            })
            .then((res, err) => {
                if (res.status !== 200) {
                    hasError = true;
                    dispatch(createNoteError(err))
                    console.log(`you have error`);

                } else if (!hasError && res.status === 200) {
                    console.log(res)
                    dispatch(createNoteSuccess());
                    dispatch(DoGetAllNotes());
                }
            })
            .catch(err => {
                console.log(`you have error`);
                dispatch(createNoteError(err.message))
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
                if (res.status !== 200) {
                    hasError = true;
                    dispatch(getNoteError(err.message));
                } else if (!hasError && res.status === 200) {
                    dispatch(getNoteSuccess(res.data))
                }
            })
            .catch(err => {
                console.log(`you have error`);
                dispatch(getNoteError(err.message));
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
                if (res.status !== 200) {
                    hasError = true;
                    dispatch(getSingleNoteError(err.message))
                    console.log(`you have error`);
                } else if (!hasError && res.status === 200) {
                    dispatch(getSingleNoteSuccess(res.data))
                }
            })
            .catch(err => {
                dispatch(getSingleNoteError(err.message))
            })
    }
}


export const doDeleteSingleNote = (id) => {
    let hasError = false;
    return dispatch => {
        dispatch(DeleteNoteStart())
        axios
            .delete(`${url}/${id}`)
            .then((res, err) => {
                if (res.status !== 200) {
                    hasError = true;
                    dispatch(DeleteNoteError(err.message))
                } else if (!hasError && res.status === 200) {
                    dispatch(DeleteNoteSuccess())
                    dispatch(DoGetAllNotes())
                }
            })
            .catch(err => {
                console.log(`you have error`);
                dispatch(DeleteNoteError(err))
            })
    }
}
