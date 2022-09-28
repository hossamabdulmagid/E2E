import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RapperNavigationBar} from './navbar.styles'

const NavigationBar = () => {
    return (
        <RapperNavigationBar>
            <header className={'header'}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Task-Velents</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">Notes</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Create Notes</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Edit Notes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </RapperNavigationBar>
    );
}

export default NavigationBar;