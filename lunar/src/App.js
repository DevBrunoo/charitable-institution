import './App.css';
import { Navbar, 
  Container, 
  Nav, 
  NavDropdown, 
  Row, 
  Col, 
  Image,
  Button,
  Card,
}  
from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
<main>
<Container>
  <Row className="px-4 my-5">
    <Col sm={7}>
<Image 
src="http://ltecnologia.com.br/blog/wp-content/uploads/2015/02/helloworld.png" 
fluid 
rounded
/>
    </Col>
    <Col sm={5}>
      <h1 class="font-weigh-light">Tagline</h1>
      <p class="mt-4">
React is just JavaScript, there is a very small API
to learn, just a few functions and how to use them. 
After that, your JavaScript skills are what make you a better React developer. There are no barriers to entry. A JavaScript developer can become a 
productive React developer in a few hours.
</p>
<Button variant="outline-primary"> Call to action </Button>
    </Col>
  </Row>
  <Row>
  <Card className="text-center bg-secondary text-white my-5 py-4">
  <Card.Body>
ReactJS is an open-source, component-based front-end 
library responsible only for the view 
layer of the application. It is maintained by Facebook.  
  </Card.Body>
</Card>
  </Row>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img 
  variant="top" 
  src="https://picsum.photos/id/201/320/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/320/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/id/220/320/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
</main>
<footer class="py-5 my-5 bg-dark">
<Container className="px-4">
  <p class="text-center text-white">
    Copyright &copy; Your Website 2022
  </p>
</Container>
</footer>
    </div>
  );
}

export default App;