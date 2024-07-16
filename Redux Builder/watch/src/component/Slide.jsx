
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Extranav from './Extranav'
import Middle from './Middle'
import Midcontent from './Midcontent'

const Slide = () => {
   
  return (
    
    <div>
      <Container>
        <Row>
            <Col>
            <Carousel >
                <Carousel.Item >
                    <img src='images/watch1.jpg' style={{height:"auto", width:"100%"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='images/watch2.jpg' style={{height:"auto", width:"100%"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='images/watch3.jpg' style={{height:"auto", width:"100%"}}/>
                </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
      </Container>
      <Extranav/>
      <hr />
   
<div style={{textAlign:"center", marginTop:"20px"}}>
<button style={{textAlign:"center"}} className='responsive-button'>VOIR TOUTES NOS MARQUES</button>
    <h2 style={{textAlign:"center", marginTop:"40px"}}>EN CE MOMENT</h2>
    <p>Profitez de nos offres</p>
</div>
<br />
<br />
      <hr/>
      <Middle/>
      <hr />
      <Midcontent/>
    </div>
    
  )
}

export default Slide
