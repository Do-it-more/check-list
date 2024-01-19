import React from 'react';
import { Container, Navbar, Nav, Carousel, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your custom styles if needed
import { Card } from 'react-bootstrap';
import img1 from "./img/bg1.jpeg";
import img2 from "./img/bg2.jpeg";
import img3 from "./img/bg3.jpeg";
import about from "./img/about.jpeg";
import book1 from "./img/Book1.jpeg";
import book2 from "./img/Book2.jpeg";
import book3 from "./img/Book3.jpeg";
import book4 from "./img/Book4.jpeg";
import book5 from "./img/Book5.jpeg";
import book6 from "./img/Book6.jpeg";
import oz1 from "./img/oz1.png";
import oz2 from "./img/oz2.png";
import oz3 from "./img/oz3.png";
import oz4 from "./img/oz4.png";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#offer-zone">Offers</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            
            <Form inline>
             
            </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <section id="home" className="carousel-section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="First slide"
              />
            </Carousel.Item>
           
          </Carousel>
        </section>

        <section id="about" className="section">
  <h2>About Us</h2>
  <Row>
    <Col md={6} className="mb-4">
      <img src={about} alt="About Us" className="img-fluid" />
    </Col>
    <Col md={6} className="mb-4">
      <p></p>
      
  <p className="text-justify">
    Welcome to <strong>Book Store</strong>, where the magic of reading comes to life! Our book store is not just a place to buy books; it's a sanctuary for bibliophiles, a hub for literary exploration, and a haven for those who seek the joy of storytelling.
  </p>

  <p className="text-justify">
    📚 <strong>Our Mission:</strong>
    At Bookstore, our mission is to foster a deep love for reading and to provide a diverse selection of books that cater to all tastes and interests. We believe that every book has the power to transform lives, broaden perspectives, and ignite imaginations.
  </p>

  <p className="text-justify">
    <strong>🌟 Discover Your Next Adventure:</strong>
    Dive into our curated collection that spans across genres – from gripping fiction that transports you to other worlds to insightful non-fiction that expands your knowledge. Explore the latest bestsellers, hidden gems, and timeless classics that have captured the hearts of readers worldwide.
  </p>
  <p className="text-justify">
  🌈 <strong>More Than Just Books:</strong>
    Bookstore is more than just a bookstore; it's a cultural hub. Immerse yourself in a world of creativity with our carefully curated selection of journals, stationery, and book-related merchandise.
  </p>

  <p className="text-justify">
  🏆 <strong>Customer Satisfaction:</strong>
    Your satisfaction is our priority. We strive to create an inviting and comfortable atmosphere for you to explore, discover, and indulge in the joy of reading.
  </p>
  <p className="text-justify">
  <strong>Happy reading!</strong>
  </p>

    </Col>
  </Row>
</section>
<section id="products" className="section">
  <h2>Products</h2>
  <Row>
    {/* Product 1 */}
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book1} />
        <Card.Body>
          <Card.Title>ATOMIC HABITS</Card.Title>
          <Card.Text>
            Some description about the book. Add details here...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    {/* Product 2 */}
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book2} />
        <Card.Body>
          <Card.Title>BEST SELF</Card.Title>
          <Card.Text>
            Some description about the book. Add details here...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book3} />
        <Card.Body>
          <Card.Title>THE SUBTITLE ART OF NOT GIVING A FUCK</Card.Title>
          <Card.Text>
            Some description about the book...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book4} />
        <Card.Body>
          <Card.Title>SELF HELPS </Card.Title>
          <Card.Text>
            Some description about the book. Add details here...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book5} />
        <Card.Body>
          <Card.Title>TIME MOTIVATION</Card.Title>
          <Card.Text>
            Some description about the book. Add details here...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={book6} />
        <Card.Body>
          <Card.Title>12 RULES OF LIFE</Card.Title>
          <Card.Text>
            Some description about the book. Add details here...
          </Card.Text>
          <Button variant="primary" className="mr-2">Add to Cart</Button>
          <Button variant="success">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
    {/* Add more products as needed */}
  </Row>
</section>

<section id="offer-zone" className="section">
  <h2>Offer Zone</h2>
  <Carousel>
    <Carousel.Item>
      <Row>
        <Col md={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={oz1} />
            <Card.Body>
              <Card.Title>F475JY2NF0</Card.Title>
              <Card.Text>
              Use this coupen code  <strong> 15% discount</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={oz2} />
            <Card.Body>
              <Card.Title>ADITB34IM5</Card.Title>
              <Card.Text>
              Use this coupen code  <strong> 36% discount</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={oz3} />
            <Card.Body>
              <Card.Title>OADHHDFETE</Card.Title>
              <Card.Text>
              Use this coupen code  <strong> 18% discount</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={oz4} />
            <Card.Body>
              <Card.Title>JWERKSDFHJ</Card.Title>
              <Card.Text>
                Use this coupen code  <strong> 20% discount</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Carousel.Item>
  
  </Carousel>
</section>

        <footer className="bg-dark text-light p-4">
        <Container>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formProductDetails">
              <Form.Label>Product Details</Form.Label>
              <Form.Control type="text" placeholder="Enter product details" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </footer>
      </Container>
    </div>
  );
}

export default App;
