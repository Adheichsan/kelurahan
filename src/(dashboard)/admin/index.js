import React from 'react'

function index() {
    return (
        <div className="container-fluid py-20">
            <h1 className="h3 mb-2 text-gray-800">Agenda</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Isi tabel dengan data atau gunakan state dan map jika data dinamis */}
                                {/* Contoh data statis */}
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                {/* ... (Lanjutkan dengan baris data lainnya) */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index