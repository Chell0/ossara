import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-black border-t-2 3xl:px-20 px-4 xs:px-5 py-6 sm:px-6 md:mt-20 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="mx-auto w-full max-w-full">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          {/* Copyright */}
          <p className="text-center font-medium 3xl:text-3xl text-xs sm:text-sm md:text-left md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            © {currentYear} Ossara
          </p>

          {/* Links */}
          <div className="grid w-full grid-cols-2 xs:grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3 md:flex md:w-auto md:items-center md:justify-end md:gap-5">
            <Link
              href="/datenschutz"
              className="text-center font-medium 3xl:text-3xl text-xs hover:text-[#ba334b] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              aria-label="Datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-center font-medium 3xl:text-3xl text-xs hover:text-[#ba334b] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              aria-label="Impressum"
            >
              Impressum
            </Link>
            <Link
              href="https://www.instagram.com/ossaraev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-medium 3xl:text-3xl text-xs hover:text-[#ba334b] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/ossara.de/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-medium 3xl:text-3xl text-xs hover:text-[#ba334b] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-medium 3xl:text-3xl text-xs hover:text-[#ba334b] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
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
