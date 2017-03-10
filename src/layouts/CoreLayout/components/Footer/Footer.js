import React from 'react'
import './Footer.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Logo from 'components/Logo'
import SecondaryMenu from './SecondaryMenu'
import PaymentImage from './assets/payment-methods.png'

const propTypes = {
}

export const Footer = () => (
  <footer className='footer'>
    <Grid>
      <Row>
        <Col
          className='footer__menu'
          sm={6}
          smPush={4}
        >
          <SecondaryMenu />
        </Col>
        <Col
          className='footer__logo'
          sm={4}
          smPull={6}
          xs={6}
        >
          <a href='#'><Logo /></a>
          <p className='footer__copyright'>shopy © 2015 . your copyright here</p>
        </Col>
        <Col
          className='footer__payment'
          sm={2}
          xs={6}
        >
          <h4 className='footer__payment-title'>Payment Methods</h4>
          <img
            alt='Payment methods'
            className='footer__payment-image img-responsive'
            src={PaymentImage}
          />
        </Col>
      </Row>
    </Grid>
  </footer>
)

Footer.propTypes = propTypes

export default Footer
