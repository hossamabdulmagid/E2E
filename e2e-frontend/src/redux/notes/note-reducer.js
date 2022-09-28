const INITAIL_STATE = {
    isFetching: false,
    data: {
        name: '',
        title: '',
        description: ''
    },
    errorMessage: null,
};

const NotesReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {


        default:
            return state;
    }
};
export default NotesReducer;