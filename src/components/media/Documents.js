import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "@smarteye/optic";
import UploadFile from "./UploadFile";

function Documents() {
  const pdfUrl = "/dokumen/sk-penerima-penghargaan-EoPYv.pdf";
  const pdfUrl1 = "/dokumen/sk-etika-pelayanan-kelurahan-pelabuhan-gB8Rc.pdf";
  const pdfUrl2 = "/dokumen/hasil-skm-kelurahan-pelabuhan-SSHZT.pdf";
  const pdfUr3 = "/dokumen/jam-pelayanan-kelurahan-pelabuhan-HeyGt.pdf";
  const pdfUrl4 = "/dokumen/alur-pelayanan-kelurahan-pelabuhan-LlHYV.pdf";

  return (
    <div className="pt-20">
      <Container className="pb-20 pt-10">
        <div className="pb-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SK Penerimaan Penghargaan</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pengakuan formal atas prestasi luar biasa dalam bidang tertentu dengan nilai hukum yang mengikat.</p>
          <Link href={pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
        </div>

        <div className="pb-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={pdfUr3} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SK Etika Pelayanan Kelurahan</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dokumen resmi yang menetapkan norma dan nilai-nilai pelayanan publik yang diterapkan di kelurahan.</p>
          <Link href={pdfUr3} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
        </div>

        <div className="pb-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={pdfUrl1} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hasil SKM Kelurahan</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dokumen resmi yang menetapkan standar mutu pelayanan dan tindakan pengembangan di tingkat kelurahan.</p>
          <Link href={pdfUrl1} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
        </div>

        <div className="pb-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jam Pelayanan Kelurahan</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Senin-Jumat, 08.00-16.00 WIB. Sabtu, 08.00-12.00 WIB, dengan pengecualian hari libur nasional dan lokal.</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={pdfUrl4} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alur Pelayanan Kelurahan</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pelayanan Kelurahan kami efisien. Ambil nomor, isi formulir, serahkan dokumen, dan tunggu verifikasi. Ambil hasil. Beri umpan balik untuk peningkatan layanan. Terima kasih.</p>
          <a href={pdfUrl4} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>

      </Container>
    </div>
  );
}

export default Documents;
