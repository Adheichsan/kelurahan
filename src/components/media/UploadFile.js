import { useState } from 'react';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    // /media/UploadFile.js
    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log(result.message, result.file);
                } else {
                    console.error('Failed to upload file:', response.statusText);
                }
            } catch (error) {
                console.error('Error during file upload:', error);
            }
        }
    };


    return (
        <div className="pb-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unggah Berkas</h5>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-3" />
                <button
                    onClick={handleUpload}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Unggah
                </button>
            </div>
        </div>
    );
};

export default UploadFile;
