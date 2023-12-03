import React, { useState } from 'react';
import Link from "next/link";
import { Col, Row } from "@smarteye/optic";
import MetaHead from "@/components/MetaHead";

function AhliWaris() {
    const [selectedMenu, setSelectedMenu] = useState('bacaan1');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu === selectedMenu ? null : menu);
    };

    return (
        <><MetaHead
            title="Pelayanan | Kelurahan Patriot" />
            <div className='pt-20'>
                <Row>
                    <Col className='pt-10'>
                        <div style={{ display: 'flex' }} className='pl-10'>
                            <div
                                onClick={() => handleMenuClick('bacaan1')}
                                style={{ cursor: 'pointer', marginRight: '20px', fontWeight: selectedMenu === 'bacaan1' ? 'bold' : 'normal' }}
                            >
                                Kasi Pemerintahan
                            </div>
                            <div
                                onClick={() => handleMenuClick('bacaan2')}
                                style={{ cursor: 'pointer', marginRight: '20px', fontWeight: selectedMenu === 'bacaan2' ? 'bold' : 'normal' }}
                            >
                                Kasi Ekonomi Pembangunan
                            </div>
                            <div
                                onClick={() => handleMenuClick('bacaan3')}
                                style={{ cursor: 'pointer', marginRight: '20px', fontWeight: selectedMenu === 'bacaan3' ? 'bold' : 'normal' }}
                            >
                                Kasi Kesra
                            </div>
                            <div
                                onClick={() => handleMenuClick('bacaan4')}
                                style={{ cursor: 'pointer', fontWeight: selectedMenu === 'bacaan4' ? 'bold' : 'normal' }}
                            >
                                Kasi Trantib
                            </div>
                        </div>

                        {selectedMenu === 'bacaan1' && (
                            <div className='pl-10'>
                                <h1 className='font-bold text-xl pt-10'>
                                    Pelayanan pada Kasi Pemerintahan
                                </h1>
                                <hr className="my-4 border-t border-gray-400" />

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KELURAHAN/DESA/ KECAMATAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Keterangan Pindah dari Kelurahan/Desa/Kecamatan
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Biodata yang Pindah
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        PENCATATAN BIODATA PENDUDUK PENDATANG ANTAR KABUPATEN/KOTA/PROVINSI
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Keterangan Pindah dari Catatan Sipil Kabupaten/Kota Asli
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Biodata yang Pindah
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Melaporkan Diri ke Catatan Sipil Kabupaten
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        PEMBUATAN KTP, KK DAN KETERANGAN KELAHIRAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Nikah (Suami Istri)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Akte Kelahiran/Ijazah (Buat baru/perubahan)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Cerai/Kematian (Perubahan)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Keterangan Bidan (KK Penambahan Anggota/Anak)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pas Foto 2 x 3 Sebanyak 3 Lembar (Pembuatan KTP)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Keterangan Kehilangan dari Kepolisian Bagi yang KTP dan KK Hilang
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN KEMATIAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP Pelapor / Keluarga
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Keterangan Kematian dari Rumah Sakit
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN DOMISILI TEMPAT TINGGAL PENDATANG (WNI) DAN WNA
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW (Pendatang WNI/WNA)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi (Pendatang WNI)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP Bapak/Ibu Asuh/Yang Mempunyai Kontrakan (Pendatang WNI)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan (Pendatang WNI)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Passport, Kitas Asli dan Fotokopi (WNA)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Permohonan (WNA)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa (WNA)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat dari Sponsor (WNA)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pas Foto 4 x 6 Sebanyak 2 Lembar (WNI/WNA)
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN BELUM PUNYA RUMAH
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli Kota Samarinda dan Fotokopi
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Nikah (Suami Istri)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        )}

                        {selectedMenu === 'bacaan2' && (
                            <div className='pl-10'>
                                <h1 className='font-bold text-xl pt-10'>
                                    Pelayanan pada Kasi Ekonomi Pembangunan
                                </h1>
                                <hr className="my-4 border-t border-gray-400" />

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT PERNYATAAN WARIS
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Ahli Waris
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akte Kelahiran Ahli Waris
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akta Nikah Almarhum/Almarhumah
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Surat Kematian
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Almarhum/Almarhumah
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN DOMISILI USAHA (Perindustrian, Perdagangan dan Dunia usaha)
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akte Notaris Untuk Yang Berbadan Hukum
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Memiliki Usaha
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Bukti Kepemilikan Tempat Usaha/Perjanjian Sewa/Kontrak
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN USAHA (Perindustrian, Perdagangan dan Dunia usaha)
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akte Notaris Untuk Yang Berbadan Hukum
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Memiliki Usaha
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Bukti Kepemilikan Tempat Usaha/Perjanjian Sewa/Kontrak
                                            </span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        )}

                        {selectedMenu === 'bacaan3' && (
                            <div className='pl-10'>
                                <h1 className='font-bold text-xl pt-10'>
                                    Pelayanan pada Kasi Kesejahteraan Rakyat
                                </h1>
                                <hr className="my-4 border-t border-gray-400" />

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN DOMISILI USAHA (Pariwisata, Pendidikan dan Kesehatan)
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akte Notaris Untuk Yang Berbadan Hukum
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Memiliki Usaha
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Bukti Kepemilikan Tempat Usaha/Perjanjian Sewa/Kontrak
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN USAHA (Pariwisata, Pendidikan dan Kesehatan)
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akte Notaris Untuk Yang Berbadan Hukum
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Memiliki Usaha
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Bukti Kepemilikan Tempat Usaha/Perjanjian Sewa/Kontrak
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN PERKAWINAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Akta Kelahiran/Ijazah
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Belum Pernah Menikah
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN TIDAK MAMPU UNTUK PENDIDIKAN DAN KESEHATAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi
                                            </span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        )}

                        {selectedMenu === 'bacaan4' && (
                            <div className='pl-10'>
                                <h1 className='font-bold text-xl pt-10'>
                                    Pelayanan pada Kasi Ketentraman & Tata Tertib
                                </h1>
                                <hr className="my-4 border-t border-gray-400" />

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN CATATAN KEPOLISIAN (SKCK)
                                    </h2>

                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokop
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT KETERANGAN IJIN KERAMAIAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                KTP, KK Asli dan Fotokopi
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Pernyataan Dari Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Permohonan dari Instansi Penyelenggara Keramaian
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <div className='py-4'>
                                    <h2 className='font-semibold text-lg'>
                                        SURAT Pernyataan IJIN LINGKUNGAN
                                    </h2>
                                    <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 py-5">
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Pengantar RT/RW
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP dan KK Pemohon
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi KTP Izin Tetangga
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Fotokopi Bukti Kepemilikan Tempat
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text-gray-900 dark:text-white">
                                                Surat Kuasa Bagi yang Mewakilkan
                                            </span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        )}
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
                <style jsx>{`
        @media (max-width: 767px) {
          .pl-10 {
            padding-left: 1rem;
          }

          .menu-item {
            margin-bottom: 10px;
          }

          .menu-item.active {
            font-weight: bold;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .pl-10 {
            padding-left: 2rem;
          }
        }
      `}</style>
            </div></>
    );
}

export default AhliWaris;
