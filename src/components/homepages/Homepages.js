import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "@smarteye/optic";
import YourData from "./Data";

function Homepages() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="pt-10 homepage bg-slate-200">
        <section className="bg-center bg-no-repeat bg-[url('/images/kec.jpg')] bg-gray-700 bg-blend-multiply" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Kelurahan Margahayu</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Kelurahan kami, komunitas berkembang bersama. Bersatu, berinovasi, dan memberdayakan. Menuju kehidupan yang berkualitas dan penuh semangat bagi setiap warganya.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link href="/informasi/agenda" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Agenda
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
              <Link href="/pelayanan" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Pelayanan
              </Link>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* CONTENT VR */}
        <div className="pb-10 contentvr1 pl-12">
          <Row className="pt-5">
            <Col className="pr-0 md:pr-2">
              <YourData/>
            </Col>

            <Col md={4} className="pl-0 md:pl-2">
              {/* Right Content (Card) */}
              <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mr-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sistem Pelayanan
                </h5>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KELURAHAN/DESA/ KECAMATAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KABUPATEN/KOTA/PROVINSI</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>PEMBUATAN KTP, KK DAN KETERANGAN KELAHIRAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN KEMATIAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN DOMISILI TEMPAT TINGGAL PENDATANG (WNI) DAN WNA</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN BELUM PUNYA RUMAH</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT PERNYATAAN WARIS</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN DOMISILI USAHA (Perindustrian, Perdagangan dan Dunia usaha)</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN USAHA (Perindustrian, Perdagangan dan Dunia usaha)</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN DOMISILI USAHA (Pariwisata, Pendidikan dan Kesehatan)</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN USAHA (Pariwisata, Pendidikan dan Kesehatan)</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN PERKAWINAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN PERKAWINAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN TIDAK MAMPU UNTUK PENDIDIKAN DAN KESEHATAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN CATATAN KEPOLISIAN (SKCK)</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT KETERANGAN IJIN KERAMAIAN</span>
                  </Link>
                  <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/pelayanan">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>SURAT Pernyataan IJIN LINGKUNGAN</span>
                  </Link>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mr-10 mt-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Poster
                </h5>
                <img class="h-auto max-w-full" src="/images/unsplash1.jpg" alt="" />
              </div>
              {/* Right Content End */}
            </Col>
          </Row>
        </div>
      </div>

      <div className="bg-slate-100 py-5">
        <Container className="pb-10">
            <h5 className="mb-5 text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Galeri Foto
            </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Homepages;
