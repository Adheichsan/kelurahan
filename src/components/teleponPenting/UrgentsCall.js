import React from 'react';
import { Col, Container, Row } from "@smarteye/optic";
import { useState } from 'react';

function UrgentsCall() {
  const numbers = {
    'Kasi Kesejahteraan Masyarakat': '085250175116',
    'Polresta': '0541-742434',
    'Dinas Pemadam': '0541-741429',
    'Satpol PP': '0541-731351',
    'Sekretaris': '085345589238',
    'Lurah': '08115555734',
    'Kasi Pemerintahan Umum dan Trantib': '085250357240',
    'Kasi Ekonomi dan Lingkungan Hidup': '081346325677',
  };

  const [copiedNumber, setCopiedNumber] = useState(null);

  const handleCopyClick = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedNumber(phoneNumber);

    setTimeout(() => {
      setCopiedNumber(null);
    }, 2000);
  };

  return (
    <div className='pt-20'>
      <Container className='pb-20 pt-5'>
        <Row>
          <Col className='py-5'>
            <h1 className='text-2xl font-bold text-center'>Telepon Penting</h1>
          </Col>
        </Row>
        <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {Object.entries(numbers).map(([contact, phoneNumber]) => (
            <li key={contact} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="/images/contact.png" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {contact}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <span>{phoneNumber}</span>
                  <span onClick={() => handleCopyClick(phoneNumber)} className="ml-2 cursor-pointer focus:outline-none">
                    <img src="/images/88026.png" alt="Copy" className="w-4 h-4" />
                  </span>
                  {copiedNumber === phoneNumber && <span className="ml-2 text-blue-500">Copied!</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default UrgentsCall;
