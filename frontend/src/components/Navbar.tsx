import { Navbar, Container, Nav, Button } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid="xl">
        <Navbar.Brand href="/" className="fw-bold text-black">
          Todo APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button
              variant="link"
              href="/auth/login"
              className="text-black"
              size="lg"
              style={{
                marginRight: "16px",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              href="/auth/login"
              size="lg"
              className="fw-bold"
              style={{
                marginRight: "16px",
                fontSize: "18px",
              }}
            >
              Start for free!
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
