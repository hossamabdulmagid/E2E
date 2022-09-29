import {useEffect} from 'react';
import {DoGetAllNotes} from "../../redux/notes/notes-actions";
import {connect, useDispatch} from "react-redux";
import {Card, CardGroup, Spinner} from "react-bootstrap";
import {LinK} from "./notes.styles";

const Notes = ({allNotes = [], loading}) => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(DoGetAllNotes())
    }, [])


    return (

        <div className={'container text-center mb-xl-4'}>
            <div className={'row'}>
                <h1>
                    Notes
                </h1>
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
                                                <small className="" text={'light'}>
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

    )
}

const mapStateToProps = state => ({
    allNotes: state.notes.data,
    loading: state.notes.isFetching,
})

export default connect(mapStateToProps, null)(Notes);