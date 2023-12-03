import React from "react";
import { Col, Container, Row } from "@smarteye/optic";
import Link from "next/link";

function Gallery() {
  return (
    <div className="pt-20">
      <Row>
        <h1 className="text-2xl font-bold mx-auto pb-5">Galeri Foto</h1>
      </Row>
      <Row className="lg:flex lg:px-5 pb-20">
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

        <Col md={4} className="pl-0 md:pl-2">
          {/* Right Content (Card) */}
          <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mr-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sistem Pelayanan
            </h5>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KELURAHAN/DESA/ KECAMATAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KABUPATEN/KOTA/PROVINSI</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>PEMBUATAN KTP, KK DAN KETERANGAN KELAHIRAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN KEMATIAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN DOMISILI TEMPAT TINGGAL PENDATANG (WNI) DAN WNA</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN BELUM PUNYA RUMAH</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT PERNYATAAN WARIS</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN DOMISILI USAHA (Perindustrian, Perdagangan dan Dunia usaha)</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN USAHA (Perindustrian, Perdagangan dan Dunia usaha)</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN DOMISILI USAHA (Pariwisata, Pendidikan dan Kesehatan)</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN USAHA (Pariwisata, Pendidikan dan Kesehatan)</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN PERKAWINAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN PERKAWINAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN TIDAK MAMPU UNTUK PENDIDIKAN DAN KESEHATAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN CATATAN KEPOLISIAN (SKCK)</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span>SURAT KETERANGAN IJIN KERAMAIAN</span>
              </Link>
              <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/profile">
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
  );
}

export default Gallery;
