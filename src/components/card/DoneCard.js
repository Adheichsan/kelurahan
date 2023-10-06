import { Container } from '@smarteye/optic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoneCard() {
    return (
        <div className="items-center justify-content-center">
            <div className="flex items-center justify-center py-2">
                <Container className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "200px" }}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sesi Selesai
                    </h5>
                    <p className="mb-2 text-center">
                        Kamu sudah menyelesaikan sesi di ruangan ini.
                        Terimakasih atas partisipasi Kamu!
                    </p>
                    <div>
                        <Image
                            src="/events/number.png"
                            width={250}
                            height={250}
                            alt='Sesi selesai'
                        />
                    </div>
                    <Link
                        href="/events/feedback"
                        className="px-4 py-2 mx-2 mt-4 font-bold text-white rounded bg-slate-500 hover:bg-slate-600">
                        Beri feedback
                    </Link>
                </Container>
            </div>
        </div>
    )
}

export default DoneCard