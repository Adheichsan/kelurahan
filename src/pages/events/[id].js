import React from "react";
import { detailProduct } from "../../../public/data/constant";
import { Col, Container, Row } from "@smarteye/optic";
import MetaHead from "@/components/MetaHead";
import Link from "next/link";

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <div className="py-20">
        <Container>
          <Col className="py-20">
            <Row className="d-flex align-items-center">
              <h1 className="mx-auto text-2xl">Product tidak ditemukan</h1>
            </Row>
            <Row className="pt-5 pb-20">
              <Link
                href="/events"
                className="px-10 py-2 mx-auto text-white rounded bg-slate-500 hover:bg-slate-700"
              >
                Kembali
              </Link>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }

  return (
    <>
      <MetaHead title="Detail Product | smarteye.id" />
      <div className="py-20">
        <Container>
          <Row>
            <Col>
              <div className="pt-10 oculus">
                <iframe
                  src={product.url}
                  title={product.title}
                  allowFullScreen
                  className="rounded-lg h-[320px] sm:h-[560px] w-full aspect-w-16 aspect-h-9 mx-auto"
                />
              </div>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <h1 className="text-lg sm:text-2xl font-bold">{product.title}</h1>
            </Col>
            <Col className="sm:w-1/2 xs:w-full xs:flex xs:justify-center xs:mt-5">
              <div className="text-center sm:text-right titel">
                <Link
                  href="/events/tutorial"
                  className="px-6 sm:px-10 py-2 mt-5 ml-5 mr-5 text-white rounded-lg bg-slate-500 hover:bg-slate-700 butuna"
                >
                  Click me
                </Link>
              </div>
            </Col>
          </Row>

          <Row className="pt-5 pb-20">
            <Col>
              <h1 className="text-justify">{product.description}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetail;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const product = detailProduct.find((product) => product.id === parseInt(id));

  if (!product) {
    return {
      props: {
        product: null,
      },
    };
  }

  return {
    props: { product },
  };
}
