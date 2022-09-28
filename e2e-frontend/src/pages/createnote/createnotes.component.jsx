import {Button, Form} from 'react-bootstrap';
import {RapperForm} from './createnote-styles'
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {DoCreateNote} from '../../redux/notes/notes-actions';
import {useDispatch} from "react-redux";

const CreateNotes = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data);
        if (!data) {
            return;
        } else {
            dispatch(DoCreateNote(data))
            navigate('/notes');
        }
    }


    const goToHomePage = () => {
        navigate('/');
    }
    return (
        <div className={'container text-center'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12'}>
                        <RapperForm>
                            <h2>
                                Create Note
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        {...register("name", {required: "Name is required"})}
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter name Of Your Notes"
                                    />
                                    <div className={'text-danger'}>

                                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                                    </div>
                                    <Form.Control
                                        {...register("title", {required: "Title is required"})}
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter title Of Your Notes"

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
                                    />
                                    <div className={'text-danger'}>
                                        {errors.description && <p role="alert">{errors.description?.message}</p>}
                                    </div>
                                </Form.Group>
                                <Button variant="success" type="submit" className={'me-2'}>
                                    Submit
                                </Button>
                                <Button variant="danger" onClick={goToHomePage}>
                                    Cancel
                                </Button>
                            </form>
                        </RapperForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNotes;