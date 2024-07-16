import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = () => {
    const imageUrl = 'https://www.41watch.com/modules/themeconfigurator/img/a561231843f7c882e651c03d3988f3cac91f6950_template-big-bas-home-1200x800-3.jpg';
    const watches = [
        {
          image: 'https://www.41watch.com/13083-home_default/auriscoste-scubamaster-sm300-acier-2022.webp',
          name: 'AURICOSTE',
          model: 'ScubaMaster SM300',
          brand: 'SM300 Acier',
          year: '2022',
          price: '49 €/Month',
          ou:'650 €'
          
        },
        {
          image: 'https://www.41watch.com/13093-home_default/flymaster-type-20-diver-bezel.webp',
          name: 'AURICOSTE',
          model: 'Flymaster Type 20',
          brand: 'Flymaster',
          year: '2022',
          price: '64 €/Month',
          ou:'900 € '
        },
        {
          image: 'https://www.41watch.com/18557-home_default/rolex-explorer-1-14270-36-mm-full-set.webp',
          name: 'ROLEX',
          model: 'Explorer',
          brand: '14270',
          year: '1999',
          price: '129 €/Month',
          ou:'1350 € '
        },
      ];
    
  return (
    <Container   className="banner-container custom-container">
    <div className="banner">
      <img src={imageUrl} alt="Rolex Banner" className="banner-image" />
      <Button className="banner-button">OUR ROLEX CATALOGUE</Button>
    </div>
    <br />
    <br />
    <br />
    <div style={{textAlign:"center"}}>
    <h5 >OUR PICKS</h5>
        <p>A selection of our favorite deals</p>
    </div>
    <div className="line-container">
      <div className="line-segment"></div>
      <div className="line-segment"></div>
      <div className="line-segment"></div>
    </div>
    <Container>
      <Row>
        {watches.map((watch, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <div className="watch-card">
              <div className="watch-info">
                <h5>{watch.name}</h5>
                <p>{watch.model}</p>
                <p>{watch.brand}</p>
                <p>{watch.year}</p>
              </div>
              <img src={watch.image} alt={`${watch.name} ${watch.model}`} className="watch-image" />
              <div className="watch-price">{watch.price}</div>
             <div className='watch-ou'> <p>Ou {watch.ou}</p></div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
 {/* banner */}

       <Container>
      <Row style={{ justifyContent: "space-between" }}>
        <Col xs={12} md={6}>
          <div className='gap-20px'>
            <img
              src="https://www.41watch.com/modules/themeconfigurator/img/6b8a83fb4d6ccf604e6106b55d52cfa3a6842704_untitled-design-93.png"
              alt=""
              height={400}
              width={700}
              className="zoom-effect" // Apply zoom effect on hover
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img
              src="https://www.41watch.com/modules/themeconfigurator/img/3cf94905f684011e1374394411c318b9eedf3238_submariner-red-1680-home.jpg"
              alt=""
              height={400}
              width={560}
              className="zoom-effect" // Apply zoom effect on hover
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <div>
            <img
              src="https://www.41watch.com/modules/themeconfigurator/img/4dfe7287c5cf639233dc8445608224cac1af6148_untitled-design-15.jpg"
              alt=""
              height={400}
              className="img-fluid zoom-effect" // Apply zoom effect on hover
            />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <img
              src="https://www.41watch.com/modules/themeconfigurator/img/f43bdb90648ec0c57687d0d0bfdc435131580d22_untitled-design-12.jpg"
              alt=""
              height={400}
              className="img-fluid zoom-effect" // Apply zoom effect on hover
            />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <img
              src="https://www.41watch.com/modules/themeconfigurator/img/b5cb2bcb894746434153879127446fbb6d453f3e_untitled-design-14.jpg"
              alt=""
              height={400}
              className="img-fluid zoom-effect" // Apply zoom effect on hover
            />
          </div>
        </Col>
      </Row>
    </Container>
      {/* /This part is icon descriptions */}
       <Container style={{ marginTop: "20px" }}>
      <Row className="justify-content-between">
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="feature-item text-center">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/truck-icon.svg"
              alt=""
              className="img-fluid"
            />
            <h5 className="mt-3">Secured delivery<br />1 to 6 days</h5>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="feature-item text-center">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/guarantee-icon.svg"
              alt=""
              className="img-fluid"
            />
            <h5 className="mt-3">Genuine products</h5>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="feature-item text-center">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/safe-icon.svg"
              alt=""
              className="img-fluid"
            />
            <h5 className="mt-3">Secured payment</h5>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="feature-item text-center">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/calendar-icon.svg"
              alt=""
              className="img-fluid"
            />
            <h5 className="mt-3">1 Year Warranty</h5>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="feature-item text-center">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/finance-icon.svg"
              alt=""
              className="img-fluid"
            />
            <h5 className="mt-3">Taylor made Financing</h5>
          </div>
        </Col>
      </Row>
    </Container>
{/* HR line  */}
<Container>
    <hr />
    <p style={{textAlign:'center'}}>41 Watch : la garantie d'un service professionnel en toute transparence</p>
    <hr />
    <br />
    <br />
    <h1 style={{textAlign:'center'}}>ENVIE D’ÊTRE INFORMÉ(E) DES DERNIÈRES OFFRES ?</h1>
</Container>
  </Container>
  
  )
}

export default Banner
