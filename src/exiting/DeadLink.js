import React from "react";
import Image from "next/image";
import Link from "next/link";
import { detailProduct } from "../../public/data/constant";
import { Col, Container, Row } from "@smarteye/optic";

function DeadLink() {
  // const firstFiltered = detailProduct.filter((detail) => detail.id >= 1 && detail.id <= 3 );
  const secondFiltered = detailProduct.filter(
    (detail) => detail.id > 3 && detail.id <= 6
  );
  const thirdFiltered = detailProduct.filter((detail) => detail.id > 6);

  return (
    <>
      <div className="relative pt-10">
        <div
          style={{
            backgroundImage: "url('/404/404.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "35vh",
            width: "100%",
          }}
        >
          <div className="absolute inset-x-0 mt-10 text-4xl font-bold text-center text-black transform -translate-y-1/2 top-1/2">
            Sorry, the page youre looking for doesnt exist!
          </div>
        </div>
      </div>

      <div className="py-10">
        <Container>
          <Row>
            <Col>
              <h1 className="pt-5 font-extrabold text-3xl text-center">
                Our Products
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-10 exiting1">
        <Container>
          <Row>
            {secondFiltered.map((detail) => {
              return (
                <Col key={detail.id} className="sm:w-1/2 py-5">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="/">
                      <Image
                        src={detail.image}
                        alt={detail.title}
                        className="rounded-t-lg h-[200px] w-full"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                          {detail.title}
                        </h5>
                      </Link>
                      <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        {detail.description}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="py-10 events1">
        <Container>
          <Row>
            {thirdFiltered.map((detail) => {
              return (
                <Col key={detail.id} className="sm:w-1/2 py-5">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="/">
                      <Image
                        src={detail.image}
                        alt={detail.title}
                        className="rounded-t-lg h-[200px] w-full"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                          {detail.title}
                        </h5>
                      </Link>
                      <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        {detail.description}
                      </p>
                      <Link
                        href="/"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DeadLink;
