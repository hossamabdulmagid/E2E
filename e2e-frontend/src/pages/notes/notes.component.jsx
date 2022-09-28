import {useEffect} from 'react';
import {DoGetAllNotes} from "../../redux/notes/notes-actions";
import {useDispatch} from "react-redux";

import {Card, CardGroup} from "react-bootstrap";

const Notes = () => {
    let dispatch = useDispatch();
    useEffect(() => {

        dispatch(DoGetAllNotes())

    }, [])


    return (
        <div className={'container text-center'}>
            <div className={'row'}>
                <h1>
                    Notes
                </h1>

                <CardGroup>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4 me-auto justify-content-between'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className={'col-sm-4'}>
                        <Card>
                            <Card.Img variant="top"
                                      src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </CardGroup>
            </div>
        </div>
    )
}

export default Notes;