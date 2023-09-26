import MetaHead from "@/components/MetaHead";
import { Col, Container, Row } from "@smarteye/optic";
import React from "react";
import TrainingCard from "./TrainingCard";
import Link from "next/link";
import Image from "next/image";

function training() {
  return (
    <>
      <MetaHead title="Room | smarteye.id" />
      <div className="py-20 room">
        <Container>
          <Row>
            <Col>
              <div className="py-20 justify-center items-center">
                <h1 className="text-3xl font-extrabold text-center sm:text-4xl md:text-4xl">
                  Explore our Virtual World
                </h1>
                <p className="py-5 text-center">
                  Anda sekarang berada dalam dunia virtual yang luar biasa! Mari
                  kita jelajahi berbagai ruangan yang tersedia dengan semangat
                  penuh!
                </p>
                <Image
                  src="/events/right-side.png"
                  width={500}
                  height={500}
                  alt="oke"
                  className="w-full justify-center items-center rounded"
                />
                <TrainingCard />
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href="/events/session/play"
                  className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-20 rounded mx-2 mt-4"
                >
                  Selanjutnya
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default training;
