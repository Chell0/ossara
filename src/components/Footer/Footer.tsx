import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6 mt-20 border-t-2 border-black">
      <div className="container flex flex-col items-center mx-auto text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs font-semibold">©{currentYear} Ossara</p>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link
            href="/datenschutz"
            className="text-xs font-semibold hover:text-[#ffb400]"
            aria-label="Datenschutz"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="text-xs font-semibold hover:text-[#ffb400]"
            aria-label="Impressum"
          >
            Impressum
          </Link>
          <Link
            href="https://www.instagram.com/ossaraev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold hover:text-[#ffb400]"
            aria-label="Instagram"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/ossara.de/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold hover:text-[#ffb400]"
            aria-label="Facebook"
          >
            Facebook
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold hover:text-[#ffb400]"
            aria-label="YouTube"
          >
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
