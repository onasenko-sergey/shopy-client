import React from 'react'
import './ContactInfo.scss'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Address from './Address'
import SocialMedia from './SocialMedia'

export const ContactInfo = () => (
  <div className='contact-info'>
    <Grid>
      <Row>
        <Col sm={6} className='contact-info__address'>
          <Address />
        </Col>
        <Col sm={6} className='contact-info__social-media'>
          <SocialMedia />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default ContactInfo
