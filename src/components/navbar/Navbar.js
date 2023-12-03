import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isInformasiDropdownOpen, setInformasiDropdownOpen] = useState(false);
  const [isMediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [isPelayananDropdownOpen, setPelayananDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleInformasiDropdown = () => {
    setInformasiDropdownOpen(!isInformasiDropdownOpen);
  };

  const toggleMediaDropdown = () => {
    setMediaDropdownOpen(!isMediaDropdownOpen);
  };

  const togglePelayananDropdown = () => {
    setPelayananDropdownOpen(!isPelayananDropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    setInformasiDropdownOpen(false);
    setMediaDropdownOpen(false);
    setPelayananDropdownOpen(false);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    setInformasiDropdownOpen(false);
    setMediaDropdownOpen(false);
    setPelayananDropdownOpen(false);
  }, [router.asPath]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-400 shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/dc.png"
            width={40}
            height={40}
            alt="smarteye-logo"
          />
          <span className="self-center ml-3 text-xl font-semibold whitespace-nowrap">
            Kelurahan Discord
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMobileMenu}
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg
            className={`w-5 h-5 ${isMobileMenuOpen ? "hidden" : "block"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            className={`w-5 h-5 ${isMobileMenuOpen ? "block" : "hidden"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1l-5 5-5-5"
            />
          </svg>
        </button>

        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="relative">
              <Link href="/">
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                id="profileDropdownLink"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-300 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => {
                  toggleProfileDropdown();
                  setPelayananDropdownOpen(false);
                  setMediaDropdownOpen(false);
                  setInformasiDropdownOpen(false);
                }}
                aria-controls="profileDropdown"
                aria-expanded={isProfileDropdownOpen}
              >
                Profile{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isProfileDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="profileDropdown"
                className={`${isProfileDropdownOpen ? "block" : "hidden"
                  } z-10 absolute right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <Link
                      href="/profile/sambutan-lurah"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sambutan Lurah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile/visi-misi"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Visi & Misi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile/motto"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Motto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile/struktur-organisasi"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Struktur Organisasi
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            
            {/* informasi */}
            <li className="relative">
              <button
                id="informasiDropdownLink"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => {
                  toggleInformasiDropdown();
                  setPelayananDropdownOpen(false);
                  setMediaDropdownOpen(false);
                  setProfileDropdownOpen(false);
                }}
                aria-controls="informasiDropdown"
                aria-expanded={isInformasiDropdownOpen}
              >
                Informasi{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isInformasiDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="informasiDropdown"
                className={`${isInformasiDropdownOpen ? "block" : "hidden"
                  } z-10 absolute right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="informasiDropdown"
                >
                  <li>
                    <Link
                      href="/informasi/agenda"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/informasi/berita"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Berita
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/informasi/pengumuman"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Pengumuman
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/informasi/telepon-penting"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Telepon Penting
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            
            {/* Pelayanan */}
              <li className="relative">
              <Link href="/pelayanan">
                Pelayanan
              </Link>
            </li>

            <li className="relative">
              <button
                id="mediaDropdownLink"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => {
                  toggleMediaDropdown();
                  setPelayananDropdownOpen(false);
                  setProfileDropdownOpen(false);
                  setInformasiDropdownOpen(false);
                }}
                aria-controls="mediaDropdown"
                aria-expanded={isMediaDropdownOpen}
              >
                Media{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isMediaDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="mediaDropdown"
                className={`${isMediaDropdownOpen ? "block" : "hidden"
                  } z-10 absolute right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="mediaDropdown"
                >
                  <li>
                    <Link
                      href="/media/dokumen"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dokumen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media/galeri"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative">
              <Link href="/form/sign-in">
                Account
              </Link>
            </li>

            <li className="relative">
              <Link href="/">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
