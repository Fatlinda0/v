import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path:'/home',
    display: 'Home',
  },
  {
    path:'/about',
    display: 'About',
  },
  {
    path:'/blogs',
    display: 'Blogs',
  },
]

const quick__links2 = [
  {
    path:'/gallery',
    display: 'Gallery',
  },
  {
    path:'/login',
    display: 'Login',
  },
  {
    path:'/register',
    display: 'Register',
  },
]

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ipsa sequi dolores?</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'>
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class="ri-discord-fill"></i>
                  </Link>
                </span>
              </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {quick__links.map((item, index) => (
              <ListGroupItem key = {index} className="ps-0 border-0">
                <Link to = {item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {quick__links2.map((item, index) => (
              <ListGroupItem key = {index} className="ps-0 border-0">
                <Link to = {item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-fill"></i></span>
                  Address:
                </h6>
                <p className="mb-0">Pristina, Kosovo</p>
              </ListGroupItem>
          </ListGroup>
          <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-fill"></i></span>
                  Email:
                </h6>
                <p className="mb-0">girls.world@gmail.com</p>
              </ListGroupItem>
          </ListGroup>
          <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className="mb-0">+383 49 781 854</p>
              </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12'  className="text-center pt-5">
          <p className="copyright">© Copyright {year} by 
          <span> Fatlinda Berisha, Edona Cadraku and Alsona Smajli</span></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer