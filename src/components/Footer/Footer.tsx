import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 tab:mt-20 border-t-2 border-black py-6 px-4 xs:px-5 sm:px-6 md2:px-8 tab:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col tab:flex-row items-center justify-between gap-4 tab:gap-6">
          {/* Copyright */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-center tab:text-left">
            © {currentYear} Ossara
          </p>

          {/* Links */}
          <div className="w-full tab:w-auto grid grid-cols-2 xs:grid-cols-3 md2:grid-cols-5 gap-2 sm:gap-3 tab:flex tab:items-center tab:gap-5 tab:justify-end">
            <Link
              href="/datenschutz"
              className="text-xs sm:text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-xs sm:text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Impressum"
            >
              Impressum
            </Link>
            <Link
              href="https://www.instagram.com/ossaraev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/ossara.de/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
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
