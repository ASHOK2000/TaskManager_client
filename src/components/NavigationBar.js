import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to='/create-task'><Nav.Link>Create Task</Nav.Link></LinkContainer>
                        <LinkContainer to='/tasks'><Nav.Link>View All Tasks</Nav.Link></LinkContainer>
                        <form className="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}