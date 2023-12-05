import React, { useEffect, useState } from 'react';

const YourData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/home');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const imagePath = (id) => {
        if (id === 1) {
            return `/images/mikasa.jpg`;
        } else if (id === 2) {
            return `/images/mikasa1.jpg`;
        } else if (id === 3) {
            return `/images/mikasa2.jpg`;
        } else if (id === 4) {
            return `/images/vr1.jpg`;
        } else if (id === 5) {
            return `/images/vr2.jpg`;
        } else if (id === 6) {
            return `/images/vr3.jpg`;
        } else {
            return `/images/contact.png`
        }
    };
    

    return (
        <div className='py-3'>
            {data.map(({ id, title, description }) => (
                <div key={id} className="bg-white border border-gray-200 rounded-lg shadow p-4 flex items-center pb-5">
                    <img
                        className="w-40 h-40 object-cover mr-4"
                        src={imagePath(id)}
                        alt=""
                    />
                    <div className='pb-3'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YourData;
