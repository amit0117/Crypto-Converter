import React from 'react'
 import { Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
      <Row className="fixed-bottom">
        <Col className='text-center py-3 bg-dark text-muted mb-0'>
          Copyright &copy; CyptoConverter (Created and Maintained By <a href={'https://github.com/amit0117'} style={{color:'green'}}>Amit</a>)
        </Col>
      </Row>
  )
}

export default Footer
