import React, { useEffect, useState } from 'react';
import { Container } from "@smarteye/optic";

function BeritaItem({ judul, detailBerita }) {
  return (
    <Container className='py-2'>
      <a href="" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{judul}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{detailBerita}</p>
      </a>
    </Container>
  );
}

function News() {
  const [beritaItems, setBeritaItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/berita');
        const data = await response.json();
        // console.log('Fetched Data:', data);
        setBeritaItems(data);
      } catch (error) {
        console.error('Error fetching berita data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 pb-20">
      <div className='pt-10'>
        {beritaItems.map((item) => (
          <BeritaItem
            key={item.id}
            judul={item.judul}
            detailBerita={item.detailBerita}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
