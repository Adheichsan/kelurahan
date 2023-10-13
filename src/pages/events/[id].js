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
              <div className="pt-10 oculus">
                <iframe
                  src={product.url}
                  title="products"
                  allowFullScreen
                  className="rounded-lg h-[320px] sm:h-[560px] w-full aspect-w-16 aspect-h-9 mx-auto"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center mt-5">
                <h1 className="font-bold text-2xl mb-3 lg:mb-0 lg:mr-5">{product.title}</h1>
                <Link href="/events/tutorial" as="/events/tutorial" className="bg-slate-500 text-white px-10 py-2 rounded hover:bg-slate-700">
                  Selanjutnya
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pb-20">
            <Col className="flex flex-col items-center">
              <p className="text-justify">
                {product.description}
              </p>
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
