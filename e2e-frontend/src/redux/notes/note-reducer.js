import {NoteActions} from "./note-types";

const INITIAL_STATE = {
    isFetching: false,
    data: [],
    singleNote: {
        id: '',
        title: '',
        name: '',
        description: '',
    },
    errorMessage: null,
};

const NotesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NoteActions.GET_NOTES_START:
            return {
                ...state,
                isFetching: true,
            }

        case NoteActions.GET_NOTES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            }

        case NoteActions.GET_NOTES_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload.errorMessage,
            }

        case NoteActions.SINGLE_NOTE_START:
            return {
                ...state,
                isFetching: true,
            }

        case NoteActions.SINGLE_NOTE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                singleNote: {
                    id: action.payload._id,
                    title: action.payload.title,
                    name: action.payload.name,
                    description: action.payload.description,
                }
            }

        case NoteActions.SINGLE_NOTE_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload.errorMessage,
            }

        case NoteActions.EDIT_NOTES_START:
            return {
                ...state,
                isFetching: true,
            }
        case NoteActions.EDIT_NOTES_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case NoteActions.EDIT_NOTES_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state;
    }
};
export default NotesReducer;