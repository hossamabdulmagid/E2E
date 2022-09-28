import {useEffect} from 'react';
import {DoGetAllNotes} from "../../redux/notes/notes-actions";
import {useDispatch} from "react-redux";


const Notes = () => {
    let dispatch = useDispatch();
    useEffect(() => {

        dispatch(DoGetAllNotes())

    }, [])
    return (
        <div className={'container text-center'}>
            <h1>
                Notes
            </h1>
        </div>
    )
}

export default Notes;