import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="footer-dark">
      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <img src="https://www.41watch.com/themes/41watch/img/41watch-logo_footer.svg" alt="" />
            <p>Achetez, vendez, échangez, financez en toute transparence.</p>
            <img src="https://www.41watch.com/themes/41watch/img/trusted-seller-icon.png" alt="" />
            <div>
            <h6>Paiement sécurisé</h6>
                <img src="https://www.41watch.com/themes/41watch/img/icon/footer-cart-bis.svg" alt="" />
            </div>
            <div >
                <h6>LIVRAISON SÉCURISÉE
                </h6>
                <img src="https://www.41watch.com/themes/41watch/img/icon/UPS_Logo.svg" alt="" height={"20"} />
                <img src="https://www.41watch.com/themes/41watch/img/icon/malca-amit.svg" alt=""  height={"20"} style={{margin:"20px"}}/>
                <img src="https://www.41watch.com/themes/41watch/img/icon/fedex.svg" alt="" height={"20"} />
                <img src="https://www.41watch.com/themes/41watch/img/icon/ferrar.png" alt="" height={"20"} style={{margin:"20px"}} />

            </div>
           
          </Col>
          <Col xs={12} md={3}>
          <h5>41 WATCH</h5>
            <ul>
                <li >
                    <a href="https://www.41watch.com/fr/about" >A propos</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/content/13-atelier-d-horlogerie-41watch-reparation-de-montres">SAV Horloger</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/content/6-notre-charte-qualite">Charte 41 Watch</a>
                </li>
                <li>
                    <a href="http://www.41watch.com/blog/mode-c1">Autour de mon poignet</a>
                </li>
                <li>
                    <a href="http://www.41watch.com/blog/presse-c2">Espace Presse</a>
                </li>
                <li>
                    <a href="http://www.41watch.com/documents/Media_kit_-_41Watch.pdf">Kit Presse</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/showroom">Showroom</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/nous-contacter">Contact</a>
                </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Offre 41 Watch</h5>
            <ul>
                <li>
                    <a href="https://www.41watch.com/fr/guide-buy">Guide d'achat</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/guide-sale">Guide de vente</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/financement">Solutions de financement</a>
                </li>
            </ul><br /><br /><br />
            <h5>Informations</h5>
            <ul>
                <li>
                    <a href="https://www.41watch.com/fr/content/3-cgv">CGV</a>
                </li>
                <li>
                    <a href="https://www.41watch.com/fr/content/2-mentions-legales">Mentions légales</a>
                </li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Modèles à la une</h5>
           <ul>
            <li>
                <a href="https://www.41watch.com/fr/87-royal-oak">Audemars Piguet Royal Oak</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/123-submariner">Rolex Submariner</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/127-gmt-master-ii">Rolex GMT Master II</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/122-rolex-daytona">Rolex Daytona</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/359-nautilus">Patek Philippe Nautilus</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/101-omega-speedmaster">Omega Speedmaster</a>
            </li>
            <li>
                <a href="https://www.41watch.com/fr/237-monaco">Tag Heuer Monaco</a>
            </li>
           </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    
  )
}

export default Footer
