import React, { useState, useEffect } from "react";
import axios from "axios";

const BeritaAdmin = () => {
    const [agendaData, setAgendaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/berita");
                setAgendaData(response.data);
            } catch (error) {
                console.error("Error fetching berita data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-5 pt-10">
            <h1 className="text-2xl font-bold mb-4">Berita</h1>
            <div className="bg-white shadow-md rounded my-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-2 px-3 text-left">No</th>
                                <th className="py-2 px-3 text-left">Judul</th>
                                <th className="py-2 px-3 text-left">Detail Berita</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {agendaData.map((berita) => (
                                <tr
                                    key={berita.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-2 px-3 text-left">{berita.id}</td>
                                    <td className="py-2 px-3 text-left">{berita.judul}</td>
                                    <td className="py-2 px-3 text-left">{berita.detailBerita}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BeritaAdmin;
