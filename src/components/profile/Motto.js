import React from 'react'
import { Col, Container, Row } from "@smarteye/optic";
import Image from "next/image";

function Motto() {
  return (
    <div className='pt-20'>
      <div className='py-5 items-center text-center'>
        <Image 
        width={300}
        height={100}
        alt='kel'
        src="/images/patriot.png"
        className='mx-auto'/>
      </div>

      <Container>
      <Row>
          <Col className='py-5'>
            <h1 className='text-2xl font-bold text-center'>MOTTO PELAYANAN</h1>
          </Col>
        </Row>
        <Row className='pb-20'>
          <Col className='text-center'>
          <h1 className='text-2xl font-bold'>
            Melayani dengan B E R E T I K A
          </h1>
          <p className='pt-2'>
            <span className='font-bold'>B</span>erintegritas
          </p>
          <p className='pt-2'>
            <span className='font-bold'>E</span>fektif
          </p>
          <p className='pt-2'>
            <span className='font-bold'>R</span>esponsif
          </p>
          <p className='pt-2'>
            <span className='font-bold'>E</span>fisien
          </p>
          <p className='pt-2'>
            <span className='font-bold'>T</span>ulus
          </p>
          <p className='pt-2'>
            <span className='font-bold'>I</span>novatif
          </p>
          <p className='pt-2'>
            <span className='font-bold'>K</span>ooperatif
          </p>
          <p className='pt-2'>
            <span className='font-bold'>A</span>manah
          </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Motto