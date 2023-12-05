import React from 'react'
import { Col, Container, Row } from "@smarteye/optic";
import AgendaAdmin from './AgendaAdmin';
import BeritaAdmin from './BeritaAdmin';
import InformasiAdmin from './InformasiAdmin';

function IndexPages() {
    return (
        <div className='pt-20'>
            <Container>
                <Row>
                    <AgendaAdmin/>
                </Row>
                <Row>
                    <BeritaAdmin/>
                </Row>
                <Row>
                    <InformasiAdmin/>
                </Row>
            </Container>
        </div>
    )
}

export default IndexPages