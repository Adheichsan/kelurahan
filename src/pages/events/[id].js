import React from "react";
import { Col, Container, Row } from "@smarteye/optic";
import MetaHead from "@/components/MetaHead";
import Link from "next/link";

import { detailProduct } from "../../../public/data/constant";

const ProductDetail = ({ product }) => {
  return (
    <>
      <MetaHead title="Detail Product | smarteye.id" />
      <div className="py-20">
        <Container>
          <Row className="pt-10">
            <Col>
              <h1 className="font-bold text-center text-2xl">{product.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="pt-10 oculus">
                <iframe
                  src={product.url}
                  title="products"
                  allowFullScreen
                  className="rounded-lg h-[320px] sm:h-[560px] w-full aspect-w-16 aspect-h-9 mx-auto"
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pb-20">
            <Col className="flex flex-col items-center">
              <p className="text-justify">
                {product.description}
              </p>
              <div className="flex flex-col gap-5 py-5 mx-auto tutor sm:flex-row md:flex">
                <Link
                  href="/events"
                  className="px-10 py-2 mx-auto text-black rounded sm:px-20 md:px-40 bg-slate-200 hover:bg-slate-400"
                >
                  Back
                </Link>
                <Link
                  href="/events/tutorial"
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
};

export default ProductDetail;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const productId = parseInt(id);

  const product = detailProduct.find((product) => product.id === productId);

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
