import {useEffect, useState} from "react";
import {Alert, Button, Card, Modal, Spinner} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router";
import {doDeleteSingleNote, DoEditNote, doGetSingleNote} from "../../redux/notes/notes-actions";
import {connect, useDispatch, useSelector} from "react-redux";

import EditSingleNote from "./editSingleNote";

const SingleNote = ({DoEditNote}) => {

    let dispatch = useDispatch();

    let singleNote = useSelector((state) => state.notes.singleNote);
    let Loading = useSelector((state) => state.notes.isFetching);
    let id = useParams();
    let navigate = useNavigate();
    let {title, name, description, _id} = singleNote;
    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        title: '',
        description: ''
    })

    console.log(id.id, `id from Params`);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    const Del = () => {
        if (!id) return;
        dispatch(doDeleteSingleNote(id.id));

        navigate('/notes');
    }


    useEffect(() => {
        if (!id) {
            return;
        } else {
            setFormData({
                ...formData, _id: singleNote.id,
                title: singleNote.title,
                name: singleNote.name,
                description: singleNote.description
            });

            dispatch(doGetSingleNote(id.id));
        }
    }, [ singleNote.id])


    return (
        <>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12 text-center mt-2 mb-2'}>

                        {!Loading ?
                            <Card className="text-center">
                                <Card.Header>{title}</Card.Header>
                                <Card.Img variant="top"
                                          src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                    <Button variant="info" className={'me-2'} onClick={handleShowEdit}>Edit</Button>
                                    <Button variant="danger" onClick={handleShowDelete}>Delete</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card> :
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-md-12 align-center'}>
                                        <h1>Wait Please Be Patient...</h1>
                                        <Spinner animation={"border"}/>
                                    </div>
                                </div>
                            </div>}

                    </div>
                </div>
            </div>
            <>
                <EditSingleNote
                    showEdit={showEdit}
                    handleCloseEdit={handleCloseEdit}
                    formData={formData}
                    setFormData={setFormData}
                    handleShowEdit={handleShowEdit}
                    setShowEdit={() => setShowEdit()}
                    DoEditNote={DoEditNote}
                    id={singleNote._id}
                />
            </>
            <>
                <Modal show={showDelete} onHide={handleCloseDelete} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you Sure Want To Delete This Note</Modal.Title>
                    </Modal.Header>
                    <Alert variant={'warning'}>Unexpected bad things will happen if you don’t read this!</Alert>

                    <Modal.Body>This action cannot be undone. This will permanently delete the Note</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDelete}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={Del}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>

    )
}

const mapDispatchToProps = (dispatch) => ({
    DoEditNote: (data) => dispatch(DoEditNote(data)),

});


export default connect(null, mapDispatchToProps)(SingleNote);