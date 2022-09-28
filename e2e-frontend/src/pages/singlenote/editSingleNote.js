import {Button, Form, Modal} from "react-bootstrap";
import {RapperForm} from "../createnote/createnote-styles";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";


const EditSingleNote = ({showEdit, handleCloseEdit, handleShowEdit, DoEditNote, formData, setFormData}) => {
    let navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    const onSubmit = async (data) => {
        console.log(`onSubmit Is Runing`);
        console.log(data);
        await DoEditNote(data)
        setFormData({
            _id: '',
            name: '',
            title: '',
            description: ''
        })
        navigate('/notes');

    }
    console.log(formData, `formData`)
    return (
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
                            <div className={'container text-end'}>

                                <Button variant="secondary" onClick={handleCloseEdit} className={'text-right me-2'}>
                                    Close
                                </Button>
                                <Button variant="danger" type='submit'>
                                    Edit
                                </Button>
                            </div>
                        </Form.Group>


                    </form>
                </RapperForm>
            </Modal.Body>
        </Modal>

    )
}
export default EditSingleNote;