import {useEffect, useState} from 'react';
import {DoGetAllNotes} from "../../redux/notes/notes-actions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Alert, Button, Card, CardGroup, Spinner} from "react-bootstrap";
import {LinK, RapperNoteComponent} from "./notes.styles";

const HowItWork = () => {
    const [show, setShow] = useState(true);
    const err = useSelector(state => state.notes.errorMessage);

    if (err.length) {
        return (
            <Alert show={show} variant="danger">
                <h1>Ops SomeThing wrong</h1>
                <p>
                    {err || ""}
                </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        Close me y'all!
                    </Button>
                </div>
            </Alert>
        )
    } else {
        return (
            <>
                <Alert show={show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        If you want to edit or delete any note, please click that specific note to access the features.
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close me y'all!
                        </Button>
                    </div>
                </Alert>

            </>
        );
    }
}
const Notes = ({allNotes = [], loading}) => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(DoGetAllNotes())
    }, [DoGetAllNotes, allNotes.length])


    return (
        <RapperNoteComponent>

            <div className={'container text-center mb-xl-4'}>
                <div className={'row'}>
                    <h1>
                        Notes
                    </h1>
                    <HowItWork/>
                    <CardGroup>
                        {!loading ? allNotes.map((singleNote) => {
                                return (

                                    <div className={'col-sm-4 mt-1'} key={singleNote._id}>
                                        <LinK to={`/notes/${singleNote._id}`}>
                                            <Card className={'me-2 mt-2 h-100 '} bg={'dark'}
                                                  text={"dark" ? 'light' : 'dark'}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <strong>
                                                            title
                                                        </strong>
                                                        {" "}{singleNote && singleNote.title}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <strong>
                                                            description
                                                        </strong>
                                                        {" "}{singleNote && singleNote.description}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="">
                                                        <strong>
                                                            name
                                                        </strong>{" "} {singleNote && singleNote.name}
                                                    </small>
                                                </Card.Footer>
                                            </Card>
                                        </LinK>
                                    </div>
                                )
                            }) :
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-md-12 align-center'}>
                                        <h1>Wait Please Be Patient...</h1>
                                        <Spinner animation={"border"}/>
                                    </div>
                                </div>
                            </div>
                        }
                    </CardGroup>
                </div>
            </div>
        </RapperNoteComponent>

    )
}

const mapStateToProps = state => ({
    allNotes: state.notes.data,
    loading: state.notes.isFetching,
})

export default connect(mapStateToProps, null)(Notes);