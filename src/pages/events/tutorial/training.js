import MetaHead from "@/components/MetaHead";
import { Col, Container, Row } from "@smarteye/optic";
import React from "react";
import TrainingCard from "./TrainingCard";

function training() {
  return (
    <>
      <MetaHead title="Room | smarteye.id"/>
      <div className="py-20">
        <Container>
            <Row>
                <Col>
                    <div className="py-20">
                        <h1 className="text-2xl font-extrabold text-center">
                            Explore our Virtual World
                        </h1>
                        <p className="py-5 text-center">
                            Anda sekarang berada dalam dunia virtual yang luar biasa! Mari kita jelajahi berbagai ruangan yang tersedia dengan semangat penuh!
                        </p>
                        <TrainingCard/>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default training;
