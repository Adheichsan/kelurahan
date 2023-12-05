import React from 'react'
import { Col, Container, Row } from "@smarteye/optic";
import Image from "next/image";

function VisiMisi() {
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
            <h1 className='text-2xl font-bold text-center'>VISI DAN MISI KELURAHAN PATRIOT</h1>
          </Col>
        </Row>

        <Row className='py-5'>
          <Col>
            <h1 className='text-xl font-semibold text-center'>Visi</h1>
            <h3 className='text-center pt-3'>Terwujudnya pelayanan prima, akuntabel dan transparan menuju discord sejahtera.</h3>
          </Col>
        </Row>

        <Row className='pb-10'>
          <Col className='pb-10'>
            <h1 className='text-xl font-semibold text-center'>Misi</h1>
            <ol class="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 text-center pt-3">
              <li>
                <span className="text-gray-900 dark:text-white">
                  Meningkatkan pelayanan publik yang berkualitas kepada masyarakat melalui peningkatan aparatur kelurahan.
                </span>
              </li>
              <li className='py-2'>
                <span className="text-gray-900 dark:text-white">
                  Menciptakan toleransi kerukunan antar umat beragama dalam kehidupan masyarakat.
                </span>
              </li>
              <li>
                <span className="text-gray-900 dark:text-white">
                  Meningkatkan stabilitas keamanan, ketertiban dan kenyamanan di lingkungan masyarakat.
                </span>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VisiMisi