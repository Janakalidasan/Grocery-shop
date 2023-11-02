import React,{Component} from 'react';
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bg from '../../src/Assest/image/new-logo.png';
import './Style.css';

export default class nav extends Component{
    render(){
        return(
<div>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={Bg} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 news"
            />
          </Col>
          <Col xs="auto" className='but'>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <div className='navs-1'>
<a><i class="fa-regular fa-user" style={{color:"#000"}}></i></a>
        <a><i class="fa-solid fa-truck" style={{color:"#000"}}></i></a>
        <a><i class="fa-regular fa-heart" style={{color:"#000"}}></i></a>
        <a><i class="fa-solid fa-repeat" style={{color:"#000"}}></i></a>
</div>

<div className='navs-s-1'>
       <a>Fresh Vegetable</a>
       <a>Organic Fruits</a>
       <a>Deit Ready Food And more</a>
       <a>Herbal Juice</a>
       <a href='tel:123-45-789-12345'> <i class="fa-solid fa-phone" style={{color:"#000"}} ></i>: 123-45-789-12345</a>
    </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <div className='navs-s'>
       <a>Fresh Vegetable</a>
       <a>Organic Fruits</a>
       <a>Deit Ready Food And more</a>
       <a>Herbal Juice</a>
       <a href='tel:123-45-789-12345'> <i class="fa-solid fa-phone" style={{color:"#000"}} ></i>: 123-45-789-12345</a>
    </div>
</div>
        );
    }
}
