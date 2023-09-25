import { Col, Container, Row } from "@smarteye/optic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TrainingCard() {
  return (
    <div className="items-center max-w-sm mx-auto pt-5">
      <Container>
        <Row>
          <Col>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/events/feedback">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Room Training
                </h5>
              </Link>
              <div className="flex items-center py-3">
                <Image 
                  src="/icons/skating.svg"
                  width={20}
                  height={20}
                  alt="Skating"
                />
                <p className="ml-2">Training</p>
              </div>
              <div className="flex items-center py-3">
                <Image 
                  src="/icons/time.svg"
                  width={20}
                  height={20}
                  alt="Time"
                />
                <p className="ml-2">10:00</p>
              </div>
              <div className="flex items-center py-3">
                <Image 
                  src="/icons/lens.svg"
                  width={20}
                  height={20}
                  alt="Oculus"
                />
                <p className="ml-2">Oculus</p>
              </div>
              <Link
                href="/events/feedback"
                className="inline-flex items-center px-20 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Next
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrainingCard;
