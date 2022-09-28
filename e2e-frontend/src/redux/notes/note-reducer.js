import {NoteActions} from "./note-types";

const INITIAL_STATE = {
    isFetching: false,
    data: {
        name: '',
        title: '',
        description: ''
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
                data: {
                    name: action.payload.name,
                    title: action.payload.title,
                    description: action.payload.description,
                },
            }

        case NoteActions.GET_NOTES_ERROR:
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