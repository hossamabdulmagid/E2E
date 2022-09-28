import {Button, Form} from 'react-bootstrap';
import {RapperForm} from './createnote-styles'

const CreateNotes = () => {
    return (
        <div className={'container text-center'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12'}>
                        <RapperForm>
                            <h2>
                                Create Note
                            </h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter name Of Your Notes"
                                        required
                                    />
                                    <Form.Control
                                        className={'mb-4'}
                                        type="text"
                                        placeholder="Enter title Of Your Notes"
                                        required
                                    />

                                    <Form.Control
                                        className={'mb-4'}
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter description Of Your description"
                                        required
                                    />
                                </Form.Group>
                                <Button variant="success" type="submit" className={'me-2'}>
                                    Submit
                                </Button>
                                <Button variant="danger">
                                    Cancel
                                </Button>
                            </Form>
                        </RapperForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNotes;