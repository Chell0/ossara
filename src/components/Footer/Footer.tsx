import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 md:mt-20 border-t-2 border-black py-6 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20">
      <div className="max-w-full mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Copyright */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-center md:text-left">
            © {currentYear} Ossara
          </p>

          {/* Links */}
          <div className="w-full md:w-auto grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 md:flex md:items-center md:gap-5 md:justify-end">
            <Link
              href="/datenschutz"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium hover:text-[#ba334b] text-center"
              aria-label="Datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium hover:text-[#ba334b] text-center"
              aria-label="Impressum"
            >
              Impressum
            </Link>
            <Link
              href="https://www.instagram.com/ossaraev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium hover:text-[#ba334b] text-center"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/ossara.de/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium hover:text-[#ba334b] text-center"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium hover:text-[#ba334b] text-center"
              aria-label="YouTube"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
