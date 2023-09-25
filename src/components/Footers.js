import Link from "next/link";
import React from "react";
import { Instagram, Youtube, Linkedin } from "react-feather";
import Image from "next/image";

function Footer() {
  return (
    <footer className="fuuter">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
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
            <span className="block text-base text-white py-7">
              The Telkom Hub
            </span>
            <span className="block text-sm text-white">
              Jl. Gatot Subroto No.Kav. 52, RT.6/RW.1, West Kuningan, <br />
              Mampang Prapatan, South Jakarta City, Jakarta 12710
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="ml-10">
              <h2 className="mb-6 text-sm font-semibold text-white">Menu</h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <Link href="/" className="hover:text-slate-300">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/events" className="hover:text-slate-300">
                    Section
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-slate-300">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cursor-pointer">
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <h1
                    class="hover:text-slate-300"
                  >
                    contact@smarteye.id
                  </h1>
                </li>
                <li className="mb-4">
                  <h1
                    className="hover:text-slate-300"
                  >
                    +62 8118 982 11 - WhatsApp and call
                  </h1>
                </li>
                <li className="mb-4">
                  <h1
                    className="hover:text-slate-300"
                  >
                    +62 8129 312 95711 - WhatsApp Only
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex mt-4 space-x-5 sm:justify-end sm:mt-0">
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              href="https://www.instagram.com/smarteyeid/"
              className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCdJaE--veL4G1vrSBTU4R0g"
              className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            >
              <Youtube size={20} />
              <span className="sr-only">Youtube page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/smarteye-id/"
              className="flex items-center text-white hover:text-slate-300 dark:hover:text-white"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
