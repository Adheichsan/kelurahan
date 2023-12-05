import React from "react";
import { Col, Container, Row } from "@smarteye/optic";
import Link from "next/link";

function Gallery() {
  return (
    <div className="pt-20">
      <Row className="pt-10">
        <h1 className="text-2xl font-bold mx-auto pb-5">Galeri Foto</h1>
      </Row>
      <Row className="lg:flex lg:px-5 pb-20 pt-5">
        <Col className="lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
