import React, { useState } from 'react';
import { Container, Row, Col, Image, Button ,Form, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Footer from './Footer';
import Product from './Product';
// Assuming you have custom styles for positioning and responsiveness

const Midcontent = () => {
    const watches = [
        {
          image: 'https://www.41watch.com/15946-home_default/cartier-tank-must-wsta0041.webp',
          details: 'Cartier Tank ',
          text:'Must WSTA0041'
        },
        {
          image: 'https://www.41watch.com/4950-home_default/nautilus-5711-cadran-bleu.webp',
          details: 'Nautilus ',
          text:'5711 Cadran Bleu'
        },
        {
          image: 'https://www.41watch.com/6914-home_default/daytona-6263-big-red.webp',
          details: 'Daytona ',
          text:'6263 Big Red'
        },
        {
          image: 'https://www.41watch.com/12411-home_default/santos.webp',
          details: 'Santos',
          text:'2024 Marque'
        },
     
      ];
  return (
    <Container>
      <Row className="justify-content-around">
        <Col xs={12} sm={6}>
          <div className="image-containermid">
            <Image src="/public/images/md1.jpg" fluid />
            <Button className="image-button"><h4><span>CATALOGUE VINTAGE</span>VINTAGE</h4></Button>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="image-containermid">
            <Image src="/public/images/md2.jpg" fluid />
            <Button className="image-button"><h4>CATALOGUE VINTAGE</h4></Button>
          </div>
        </Col>
      </Row>
      <br />
      <div style={{textAlign:"center"}}>
        <h3 >VOUS SOUHAITEZ VENDRE UNE DE VOS MONTRES ?</h3>
        <p>41 WATCH vous propose une offre de reprise ferme ou un dépôt-vente en toute transparence</p>
        <br /><br />
        <p>EVALUEZ SON PRIX</p>
      </div>
      <div style={{display:"flex"}}>
    {/* create a table for search  */}
    <Container>
      <Form>
        <Row className="align-items-center mb-3">
          <Col xs={12} md={3}>
            <Form.Group controlId="formField1">
            
              <Form.Control as="select">
                <option value="">MARQUE</option>
                <option value="Option 1">BELL & ROSS</option>
                <option value="Option 2">BLANCKPAIN</option>
                <option value="Option 3">IWC</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="formField2">
     
              <Form.Control as="select" >
                <option value="">MODEL</option>
                <option value="Option 1">ROYAL OAK</option>
                <option value="Option 2">ROYAL OAK CONCEPT</option>
                <option value="Option 3">ROYAL OAK OFFSET</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="formField3">
            
              <Form.Control as="select" >
                <option value="">VENDER MA MENTRE</option>
                
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={3} className="d-flex align-items-end">
            <Button style={{backgroundColor:"black"}}>VENDER MA MENTRE</Button>
          </Col>
        </Row>
      </Form>
      <Table responsive>
       
      </Table>
    </Container>

      </div>

      <br />
      <p style={{textAlign:"center"}}>NOUS CHERCHONS PARTICULIÈREMENT CES MODÈLES</p>


      {/*  */}

      <Container>
      <Row className="watch-gallery">
        {watches.map((watch, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="watch-item">
              <img src={watch.image} alt={watch.details} className="watch-image" />
              <div className="watch-details">
                <h6>{watch.details}<span><p>{watch.text}</p></span></h6>
            
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    <Container>
        <hr />
        <p style={{textAlign:"center"}}>Offres de reprise pour une montre en excellent état avec écrin et documents</p>
        <hr />
    </Container>
    <Banner/>
    <Footer/>
   
    </Container>

    // call here banner 
   
   
  );
}

export default Midcontent;
