import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 md:p-6 mt-12 md:mt-20 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          {/* Copyright Text */}
          <p className="text-sm md:text-base font-medium text-center md:text-left mb-4 md:mb-0">
            Copyright ©{currentYear} Ossara. All Rights Reserved.
          </p>

          {/* Links Grid */}
          <div className="w-full md:w-auto grid grid-cols-2 gap-2 sm:gap-3 md:flex md:items-center md:space-x-4">
            <Link
              href="/datenschutz"
              className="text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Impressum"
            >
              Impressum
            </Link>
            <Link
              href="https://www.instagram.com/ossaraev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/ossara.de/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium hover:text-[#ba334b] text-center"
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
