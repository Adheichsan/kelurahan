import React, { useEffect, useState } from 'react';
import { Container } from "@smarteye/optic";

function AgendaItem({ kegiatan, waktu, tempat, pengelola }) {
  return (
    <Container className='py-2'>
    <a href="" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{kegiatan}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Waktu: {waktu} <br />
        Tempat: {tempat} <br />
        Pengelola: {pengelola}
      </p>
    </a>
    </Container>
  );
}

function Agenda() {
  const [agendaItems, setAgendaItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/agenda');
        const data = await response.json();
        // console.log('Fetched Data:', data);
        setAgendaItems(data);
      } catch (error) {
        console.error('Error fetching agenda data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 pb-20">
      <div className='pt-10'>
        {agendaItems.map((item) => (
          <AgendaItem
            key={item.id}
            kegiatan={item.kegiatan}
            waktu={item.waktu}
            tempat={item.tempat}
            pengelola={item.pengelola}
          />
        ))}
      </div>
    </div>
  );
}

export default Agenda;