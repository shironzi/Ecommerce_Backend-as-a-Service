import IconButton from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { MdAccountCircle } from "react-icons/md";

function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'white', color: 'black' }}>
      <Container fluid className="px-5">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Navbar.Brand href="/" className="me-5">App</Navbar.Brand>
            <Form className="d-flex">
                <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
        </Navbar.Collapse>
        <IconButton href="/login" color="primary" variant="text">
          <MdAccountCircle size={40} />
        </IconButton>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
