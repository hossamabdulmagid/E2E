import {useEffect} from "react";
import {Button, Card, Spinner} from 'react-bootstrap';
import {useParams} from "react-router";
import {doGetSingleNote} from "../../redux/notes/notes-actions";
import {useDispatch, useSelector} from "react-redux";

const SingleNote = () => {
    let dispatch = useDispatch();

    let singleNote = useSelector((state) => state.notes.singleNote);
    let Loading = useSelector((state) => state.notes.isFetching);
    let id = useParams();

    let {title, name, description, _id} = singleNote;
    console.log(id.id, `id from Params`);
    useEffect(() => {
        if (!id) return;
        dispatch(doGetSingleNote(id.id));
    }, [])

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-12 text-center mt-2 mb-2'}>

                    {!Loading ? <Card className="text-center">

                            <Card.Header>{title}</Card.Header>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Button variant="info" className={'me-2'}>Edit</Button>
                                <Button variant="danger">Delete</Button>
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
    )
}


export default SingleNote;