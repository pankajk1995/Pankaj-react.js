import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const watches = [
  {
    brand: "ROLEX",
    model: "DAYTONA",
    reference: "116520",
    year: "2003",
    pricePerMonth: "378 € / MOIS",
    price: "20 000 €",
    imageUrl: "/public/images/m1.webp"
  },
  {
    brand: "PATEK PHILIPPE",
    model: "COMPLICATIONS",
    reference: "5130P-001",
    year: "2007",
    price: "46 000 €",
    imageUrl: "/public/images/m2.webp"
  },
  {
    brand: "PATEK PHILIPPE",
    model: "GRANDES COMPLICATIONS",
    reference: "5970G",
    year: "2007",
    price: "185 000 €",
    imageUrl: "/public/images/m3.webp"
  },
  {
    brand: "AUDEMARS PIGUET",
    model: "ROYAL OAK",
    reference: "15550BA",
    year: "2023",
    price: "140 000 €",
    imageUrl: "/public/images/m4.webp"
  },
  {
    brand: "ROLEX",
    model: "DAYTONA",
    reference: "126500LN",
    year: "2024",
    pricePerMonth: "633 € / MOIS",
    price: "33 500 €",
    imageUrl: "/public/images/m5.webp"
  },
  {
    brand: "AUDEMARS PIGUET",
    model: "ROYAL OAK",
    reference: "25860ST",
    year: "2002",
    pricePerMonth: "661 € / MOIS",
    price: "35 000 €",
    imageUrl: "/public/images/m6.jpg"
  }
];

const WatchCard = ({ brand, model, reference, year, pricePerMonth, price, imageUrl }) => (
  <Card className="text-center mb-4 card-no-border " >
    <Card.Title>{brand}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{model}</Card.Subtitle>
    <Card.Text>
    {reference} <br />
    {year} <br />
    </Card.Text>
    <Card.Img variant="top" className='image-container' src={imageUrl} />
    {pricePerMonth ? <span>À PARTIR DE {pricePerMonth}</span> : null} <br />ou {price}
    {/* <Card.Text className='text'>
        {pricePerMonth ? <span style={{marginBottom:"55px"}}>À PARTIR DE {pricePerMonth}</span> : null} <br />
        ou {price}
      </Card.Text> */}
    <Card.Body>
      
    </Card.Body>
  </Card>
  
);

const Middle = () => (
  <Container>
    <Row style={{marginBottom:"300px"}}>
      {watches.map((watch, index) => (
        <Col key={index} sm={12} md={6} lg={4}>
          <WatchCard {...watch} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Middle;
