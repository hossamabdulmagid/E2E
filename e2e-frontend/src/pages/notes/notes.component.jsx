import {useEffect} from 'react';
import {DoGetAllNotes} from "../../redux/notes/notes-actions";
import {connect, useDispatch} from "react-redux";
import {Card, CardGroup, Spinner} from "react-bootstrap";
import {Link} from 'react-router-dom';
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
                    {!loading ? allNotes && allNotes.map((singleNote, idx) => {
                        return (
                            <div className={'col-sm-4'} key={idx}>
                                <LinK to={`/note/${singleNote._id}`}>
                                    <Card className={'me-2 mt-2'}>
                                        <Card.Img variant="top"
                                                  src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                                        <Card.Body>
                                            <Card.Title>{singleNote && singleNote.title}</Card.Title>
                                            <Card.Text>
                                                {singleNote && singleNote.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                {singleNote && singleNote.name}
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