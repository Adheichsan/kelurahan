import Link from "next/link";
import React from "react";
import { Instagram, Youtube, Linkedin } from "react-feather";
import Image from "next/image";

function Footer() {
  return (
    <footer className="fuuter">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between flex-col sm:flex-row">
          <div className="mb-6 md:mb-0 sm:mr-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/favicon.png"
                width={40}
                height={40}
                alt="smarteye-logo"
                className="mr-3 logofuter"
              />
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                smarteye<span className="font-light">.id</span>
              </span>
            </Link>
            <span className="block text-base text-white py-4 sm:py-7">
              Telkom Corpu
            </span>
            <span className="block text-sm text-white">
              Jalan Gegerkalong Hilir Gegerkalong, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div className="mb-4 sm:ml-10">
              <h2 className="text-sm font-semibold text-white py-5">Menu</h2>
              <ul className="font-medium text-white">
                <li className="mb-2">
                  <Link href="/" className="hover:text-slate-300">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/events" className="hover:text-slate-300">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-slate-300">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-white py-5">
                <li className="mb-2">
                  <a href="mailto:contact@smarteye.id" className="hover:text-slate-300">
                    contact@smarteye.id
                  </a>
                </li>
                <li className="mb-2">
                  <a href="tel:+62811898211" className="hover:text-slate-300">
                    +62 8118 982 11 - WhatsApp and call
                  </a>
                </li>
                <li>
                  <a href="tel:+62812931295711" className="hover:text-slate-300">
                    +62 8129 312 95711 - WhatsApp Only
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex mt-4 space-x-5 justify-center sm:justify-end">
          <Link
            href="https://www.instagram.com/smarteyeid/"
            className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            target="_blank"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram page</span>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCdJaE--veL4G1vrSBTU4R0g"
            className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            target="_blank"
          >
            <Youtube size={20} />
            <span className="sr-only">Youtube page</span>
          </Link>
          <Link
            href="https://www.linkedin.com/company/smarteye-id/"
            className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            target="_blank"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn page</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;