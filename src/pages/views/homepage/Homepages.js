import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "@smarteye/optic";
import { useEffect, useState } from "react";
import { homeLinks } from "../../../../public/data/constant";

function Homepages() {
  const [product, setProduct] = useState([]);

  const fetchHome = () => {
    const data = homeLinks;
    // console.log(data)
    setProduct(data);
  };

  useEffect(() => {
    fetchHome();
  }, []);
  return (
    <div>
      {/* HERO SECTION */}
      <div className="pt-10 homepage bg-slate-200">
        <header className="py-10 sm:flex sm:flex-col sm:items-center">
          <Container>
            <Row className="flex-col-reverse pt-3 sm:flex-row">
              <Col className="mb-6 sm:mb-0">
                <h1 className="pt-20 text-5xl font-bold">
                  Break Free from <br />
                  your Reality
                </h1>
                <p className="pt-8 pb-5">
                  Wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan
                  teknologi virtual dan augmented reality.
                </p>
                <Link
                  href="/events"
                  className="px-10 py-2 text-white rounded bg-slate-500 hover:bg-slate-700"
                >
                  Explore room
                </Link>
              </Col>
              <Col className="sm:ml-6 sm:flex-grow">
                <Image
                  src="/homepages/homepage.png"
                  width={1000}
                  height={1000}
                  alt="homepages"
                  className="object-contain sm:grid"
                />
              </Col>
            </Row>
          </Container>
        </header>
        {/* HERO SECTION END */}

        {/* CONTENT VR */}
        <div className="pb-10 contentvr1">
          <Container>
            <Row>
              <Col>
                <h1 className="pt-20 pb-5 text-3xl font-extrabold text-center">
                  How we can help you elevate your journey
                </h1>
                <p className="text-lg text-center text-slate-500">
                  Kami menyediakan beragam produk dan layanan VR untuk berbagai
                  kebutuhan anda.
                </p>
              </Col>
            </Row>
            <Row>
              {product.map((value, index) => (
                <div
                  className={`flex-col-reverse sm:flex-row ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  key={value.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Col
                    className={`px-7 py-5 sm:text-left sm:w-1/2 ${
                      index % 2 === 0 ? "order-1" : "order-2"
                    }`}
                  >
                    <h1 className="text-3xl font-bold">{value.title}</h1>
                    <p className="text-justify py-7">{value.deskripsi}</p>
                    <Link
                      href="/events"
                      className="px-10 py-2 text-white rounded-lg bg-slate-500 hover:bg-slate-700"
                    >
                      Lihat detail
                    </Link>
                  </Col>
                  <Col
                    className={`py-20 sm:w-1/2 ${
                      index % 2 === 0 ? "order-2" : "order-1"
                    }`}
                  >
                    <Image
                      src={value.image}
                      height={300}
                      width={500}
                      alt={value.title}
                      className="object-cover align-items-center rounded-md"
                    />
                  </Col>
                </div>
              ))}
            </Row>

            <style jsx>{`
              @media (max-width: 768px) {
                .flex-row {
                  flex-direction: column;
                }
                .flex-row-reverse {
                  flex-direction: column-reverse;
                }
                .order-1 {
                  order: 1;
                }
                .order-2 {
                  order: 2;
                }
              }
            `}</style>
          </Container>
        </div>
        {/* CONTENT VR END */}

        {/* FLUID SECTION */}
        <div className="fluid">
          <Container>
            <Row className="py-10">
              <Col>
                <h1 className="pt-10 pb-3 text-xl font-extrabold text-center sm:text-xl md:text-xl lg:text-2xl">
                  Pengalaman virtual membuka pintu baru untuk pelatihan dan
                  wisata
                </h1>
                <p className="text-lg text-center text-slate-700">
                  Keunggulan innocent dengan memanfaatkan teknologi VR
                </p>
              </Col>
            </Row>
            <Row
              className="px-2 sm:px-5 rounded-xl"
              style={{ backgroundColor: "white" }}
            >
              <Col className="py-5 sm:py-10 sm:w-1/3 md:w-1/3 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <Image
                    src="/homepages/Group.png"
                    width={40}
                    height={40}
                    alt="cost"
                  />
                  <h1 className="pt-3 pb-3 text-lg font-bold text-center sm:text-xl md:text-xl lg:text-xl">
                    Pengalaman Imersif
                  </h1>
                  <p className="text-center text-slate-500">
                    Berbagai produk inovasi ditampilkan dalam lingkungan digital
                    sehingga pengunjung merasa seperti berada pada dunia nyata.
                  </p>
                </div>
              </Col>
              <Col className="py-5 sm:py-10 sm:w-1/3 md:w-1/3 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <Image
                    src="/homepages/Group.png"
                    width={40}
                    height={40}
                    alt="cost"
                  />
                  <h1 className="pt-3 pb-3 text-lg font-bold text-center sm:text-xl md:text-xl lg:text-xl">
                    Efisiensi Waktu dan Jarak
                  </h1>
                  <p className="text-center text-slate-500">
                    Pengunjung dapat melihat berbagai inovasi yang ada pada
                    Telkom Indonesia tanpa harus membuang tenaga dan waktu lebih
                    banyak.
                  </p>
                </div>
              </Col>
              <Col className="py-5 sm:py-10 sm:w-1/3 md:w-1/3 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <Image
                    src="/homepages/Group.png"
                    width={40}
                    height={40}
                    alt="cost"
                  />
                  <h1 className="pt-3 pb-3 text-lg font-bold text-center sm:text-xl md:text-xl lg:text-xl">
                    Media Edukasi
                  </h1>
                  <p className="text-center text-slate-500">
                    Pengunjung dapat berpartisipasi dalam pembelajaran
                    interaktif dengan berinteraksi langsung dalam lingkungan
                    virtual.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* FLUID SECTION END */}

        {/* SVCC */}
        <div className="py-20 bg-white scvv-col">
          <Container>
            <Row>
              <Col className="sm:w-1/2">
                <h1 className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-2xl">
                  Dipersembahkan Oleh :
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="flex flex-col items-center sm:flex-row">
                <Image
                  src="/homepages/logo-180.png"
                  width={80}
                  height={80}
                  alt="svcc-logo"
                  className="object-contain w-20 h-20 sm:w-24 sm:h-24"
                />
                <span className="ml-2 text-2xl font-bold sm:text-4xl">
                  smarteye<span className="font-normal">.id</span>
                </span>
              </Col>
              <Col className="sm:w-1/2">
                <h1 className="py-3 text-justify sm:py-5">
                  Bersama PT Telkom Indonesia, kami menciptakan infrastuktur
                  digital generasi berikutnya bagi masyarakat untuk masuk ke
                  industri 4.0 melalui pengembangan konten Virtual Reality (VR)
                  dan Augmented Reality (AR) berkualitas tinggi di Indonesia.
                </h1>
                <h1 className="pb-3 text-justify sm:pb-5">
                  Berbagai solusi teknologi imersif telah kami berikan untuk
                  industri properti, minyak dan gas, retail, travel, edukasi,
                  F&B, dan manufaktur untuk memberdayakan serta mewujudkan
                  bisnis yang inovatif dalam meningkatkan pengalaman yang
                  interaktif di masa depan.
                </h1>

                <div className="flex flex-col sm:flex-row">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=62811898211&text&app_absent=0"
                    className="px-6 py-2 mt-3 ml-3 mr-3 text-white rounded bg-slate-400 hover:bg-slate-700"
                  >
                    Hubungi kami
                  </Link>
                  <Link
                    href="https://smarteye.id/"
                    className="px-6 py-2 mt-3 ml-3 mr-3 text-white rounded bg-slate-400 hover:bg-slate-700"
                  >
                    Info lainnya
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* SCVV END */}
      </div>
    </div>
  );
}

export default Homepages;
