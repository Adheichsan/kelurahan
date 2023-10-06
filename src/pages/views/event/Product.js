import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from '@smarteye/optic'
import { detailProduct } from "../../../../public/data/constant";

function Product() {
  const firstfilter = detailProduct.filter((product) => product.id <= 3);
  const secondFilter = detailProduct.filter((product) => product.id > 3 && product.id <= 6);
  const thirdFilter = detailProduct.filter((product) => product.id > 6);

  return (
    <>
      <div className="relative pt-10">
        <div
          style={{
            backgroundImage: "url('/products/our-products.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "35vh",
            width: "100%",
          }}
        >
          <div className="absolute inset-x-0 mt-10 text-4xl font-bold text-center text-white transform -translate-y-1/2 top-1/2">
            Our Product
          </div>
        </div>
      </div>

      {/* // CHAMBER 1 */}
      <div className="py-10 events1">
        <Container>
          <Row>
            <Col>
              <h1 className="pb-10 mx-auto text-4xl font-bold text-center text-slate-500 md:text-4xl">
                Chamber 1 Virtual Training
              </h1>
            </Col>
          </Row>
          <Row>
            {firstfilter.map((product) => {
              return (
                <Col key={product.id} className="w-full p-2 col-12 col-md-6 col-lg-4">
                  <div className="flex flex-col max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow custom-col">
                    <Link href={`events/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="rounded-t-lg h-[200px] w-full object-cover"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href={`events/${product.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-slate-500">
                          {product.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* CHAMBER 1 END */}

      {/* CHAMBER 2 */}
      <section id="tour" className="pt-10">
      <div className="py-10 events2">
        <Container>
          <Row>
            <Col>
              <h1 className="pb-10 mx-auto text-4xl font-bold text-center text-slate-500 md:text-4xl">
                Chamber 2 Virtual Tour
              </h1>
            </Col>
          </Row>
          <Row>
            {secondFilter.map((product) => {
              return (
                <Col className="py-3" key={product.id}>
                  <div className="flex flex-col max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow custom-col2">
                    <Link href={`events/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="rounded-t-lg h-[200px] w-full object-cover"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href={`events/${product.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-slate-500">
                          {product.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      </section>
      {/* // CHAMBER 2 END */}

      {/* BOXSECTION */}
      <section id="box" className="pt-10">
      <div className="pt-10 events3">
        <Container>
          <Row>
            <Col>
              <h1 className="pb-10 text-4xl font-bold text-center text-slate-500">
                VR Box Section
              </h1>
            </Col>
          </Row>
          <Row>
            {thirdFilter.map((product) => {
              return (
                <Col key={product.id} className="py-2">
                  <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow custom-col">
                    <Link href={`events/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="rounded-t-lg h-[200px] w-full"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href={`events/${product.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-slate-500">
                          {product.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      </section>
    </>
    //   BOX SECTION END
  );
}

export default Product;
