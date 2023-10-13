import { Col, Container, Row } from "@smarteye/optic";
import Image from "next/image";
import React from "react";

function TrainingCard() {
  return (
    <div className="justify-center items-center py-5">
      <Container>
        <p className="py-5 text-xl font-bold pl-12">Room Tour</p>
        <Row className="flex flex-col sm:flex-row justify-center items-center">
          <Col className="flex justify-center items-center sm:w-full">
            <div className="flex items-center">
              <Image
                src="/icons/run.png"
                height={50}
                width={50}
                alt="achievements"
              />
              <div className="ml-3">
                <p className="font-normal text-slate-500">Services</p>
                <p className="font-bold">Room Training</p>
              </div>
            </div>
          </Col>

          <Col className="flex justify-center items-center sm:w-full py-8">
            <div className="flex items-center">
              <Image
                src="/icons/time1.png"
                height={50}
                width={50}
                alt="achievements"
              />
              <div className="ml-3">
                <p className="font-normal text-slate-500">Time</p>
                <p className="font-bold">10:00</p>
              </div>
            </div>
          </Col>

          <Col className="flex justify-center items-center sm:w-full">
            <div className="flex items-center">
              <Image
                src="/icons/quest2.png"
                height={50}
                width={50}
                alt="achievements"
              />
              <div className="ml-3">
                <p className="font-normal text-slate-500">Devices</p>
                <p className="font-bold">Oculus</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrainingCard;
