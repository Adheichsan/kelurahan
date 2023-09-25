import MetaHead from "@/components/MetaHead";
import { Col, Container, Row } from "@smarteye/optic";
import Link from "next/link";
import React from "react";

function feedback() {
  return (
    <>
      <MetaHead title="Feedback | smarteye.id" />
      <div className="py-20 items-center max-w-screen-xl mx-auto">
        <Container className="py-20">
          <Row>
            <Col>
              <div className="max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <Link href="/events/feedback">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Berikan Feedback
                  </h5>
                </Link>
                <div className="mx-auto text-center">
                  <form className="py-5">
                    <label className="text-center">
                      *feedback
                      <br />
                      <input
                        type="text"
                        name="name"
                        placeholder="Masukkan pendapat anda"
                        style={{ width: "100%" }}
                        className="text-center"
                      />
                    </label>
                  </form>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center mx-auto px-20 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Kembali ke lobby
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default feedback;
