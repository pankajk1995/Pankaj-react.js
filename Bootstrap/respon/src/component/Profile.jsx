import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import '../App.css'
const Profile = () => {
  return (
    <Container className='min'>
      <Row   md={2} lg={12}>
        {/* Text Column */}
        <Col xs={12}>
    
            <h2>Hi, Hi, I'm John Deo.</h2>
            <p>
             A freelance Web developer from London. I convert custom web designs to bootstarp templates <br/><br/> I make YouTube Videos and write Blog.
            </p>
         
          <Button variant="primary" >I'm Available</Button>
        </Col>

        {/* Image Column */}
        <Col xs={12}>
          <div>
            <Image src="https://www.skyllful.com/hs-fs/hubfs/Operations.png?width=2500&height=2000&name=Operations.png" fluid/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
