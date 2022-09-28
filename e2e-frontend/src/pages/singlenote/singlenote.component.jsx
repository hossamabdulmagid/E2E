import {useEffect, useState} from "react";
import {Alert, Button, Card, Form, Modal, Spinner} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router";
import {doDeleteSingleNote, DoEditNote, doGetSingleNote} from "../../redux/notes/notes-actions";
import {useDispatch, useSelector} from "react-redux";
import {RapperForm} from "../createnote/createnote-styles";
import {useForm} from "react-hook-form";

const SingleNote = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    let dispatch = useDispatch();

    let singleNote = useSelector((state) => state.notes.singleNote);
    let Loading = useSelector((state) => state.notes.isFetching);
    let id = useParams();
    let navigate = useNavigate();
    let {title, name, description, _id} = singleNote;


    console.log(id.id, `id from Params`);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        title: '',
        description: ''
    })
    const Del = () => {
        if (!id) return;
        dispatch(doDeleteSingleNote(id.id));

        navigate('/notes');
    }


    useEffect(() => {
        if (!id) return;
        dispatch(doGetSingleNote(id.id));
        setFormData({...singleNote});
    }, [])


    const onSubmit = data => {
        console.log(data);
        dispatch(DoEditNote(formData))
        setFormData({
            _id: '',
            name: '',
            title: '',
            description: ''
        })
        navigate('/notes');

    }

    console.log(formData, `form data while Typing`);
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
                <Modal show={showEdit} onHide={handleCloseEdit} animation={false}>

                    <Modal.Header closeButton>
                        <Modal.Title>Your Will Edit This Note</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <RapperForm>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        {...register("_id", {required: "Id is required"})}
                                        className={'mb-4'}
                                        type="hidden"
                                        placeholder="Enter name Of Your Notes"
                                        value={formData._id}
                                        onChange={(e) => setFormData({...formData, _id: e.target.value})}
                                    />
                                    <Form.Control
                                        {...register("name", {required: "Name is required"})}
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter name Of Your Notes"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                    <div className={'text-danger'}>
                                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                                    </div>
                                    <Form.Control
                                        {...register("title", {required: "Title is required"})}
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter title Of Your Notes"
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}

                                    />
                                    <div className={'text-danger'}>
                                        {errors.title && <p role="alert">{errors.title?.message}</p>}
                                    </div>
                                    <Form.Control
                                        {...register("description", {required: "Description is required"})}
                                        className={'mb-4'}
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter description Of Your description"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                    <div className={'text-danger'}>
                                        {errors.description && <p role="alert">{errors.description?.message}</p>}
                                    </div>
                                </Form.Group>
                                <div className={'container text-end'}>

                                    <Button variant="secondary" onClick={handleCloseEdit} className={'text-right me-2'}>
                                        Close
                                    </Button>
                                    <Button variant="danger" type='submit'>
                                        Edit
                                    </Button>
                                </div>

                            </form>
                        </RapperForm>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
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


export default SingleNote;