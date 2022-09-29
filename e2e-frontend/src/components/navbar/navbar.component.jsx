import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {RapperNavigationBar} from './navbar.styles'
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <RapperNavigationBar>
            <header className={'header'}>
                <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to='/' className={'link'}>
                                Task-Velents
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Link to="/notes" className={'link pe-3 mt-2 mb-2'}> View Notes</Link>
                                <Link to="/create" className={'link  mt-2 mb-2'}>Create Notes</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </RapperNavigationBar>
    );
}

export default NavigationBar;