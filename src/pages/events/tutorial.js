import MetaHead from "@/components/MetaHead";
import { Col, Container, Row } from "@smarteye/optic";
import Link from "next/link";
import React from "react";

function tutorial() {
  return (
    <>
      <MetaHead title="How To Use | smarteye.id" />
      <div className="py-20">
        <Container>
          <Row className="pt-10">
            <Col>
              <h1 className="text-lg font-extrabold text-center sm:text-2xl">How To Use</h1>
              <h1 className="font-bold text-center">( Setup Oculus )</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="pt-10 oculus">
                <iframe
                  src="https://www.youtube.com/embed/Aq4aSBds1BE"
                  title="oculus tutorial"
                  allowFullScreen
                  className="rounded-lg h-[320px] sm:h-[560px] w-full aspect-w-16 aspect-h-9 mx-auto"
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pb-20">
            <Col className="flex flex-col items-center">
              <p className="text-justify">
                Selipkan headset di atas mata anda dan tekan pemicu pada setiap pengontrol. Ini secara otomatis memasangkannya dengan headset.
              </p>
              <p className="text-justify">
                Untuk pengalaman terbaik Quest 2 Anda, anda memerlukan penyesuaian yang disesuaikan dengan jarak lensa yang tepat untuk memaksimalkan kenyamanan dan menghindari kekaburan. Geser Headset dan pegan kedua tail samping simetris yang terletak saling berhadapan di bagian bawah tali. Geser ini mengundurkan atau mengencangkan genggaman di sekitar sisi kepala anda.
                Kencangkan atau kendurkan pita ini untuk mendistribusikan tekanan headset di bagian atas kepala anda.
              </p>
              <div className="flex flex-col gap-5 py-5 mx-auto tutor sm:flex-row md:flex">
              <Link
                  href="/events"
                  className="px-10 py-2 mx-auto text-black rounded sm:px-20 md:px-40 bg-slate-200 hover:bg-slate-400"
                >
                  Back
                </Link>
                <Link
                  href="/events"
                  className="px-10 py-2 mx-auto text-white rounded sm:px-20 md:px-40 bg-slate-500 hover:bg-slate-700"
                >
                  Next
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default tutorial;
