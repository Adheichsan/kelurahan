import React from 'react'
import { Col, Container, Row } from "@smarteye/optic";
import Image from "next/image";

function StrukturOrganisasi() {
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
            <h1 className='text-2xl font-bold text-center'>STRUKTUR ORGANISASI</h1>
          </Col>
        </Row>
        <Row>
          <Col className='pb-20'>
          <Image 
          width={900}
          height={50}
          alt='struktur'
          src='/images/struktur.png'
          className='mx-auto rounded'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StrukturOrganisasi