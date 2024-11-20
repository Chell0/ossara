import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-6 mt-20 border-t-2 border-black">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
                <p className="text-sm font-semibold">©{currentYear} Ossara</p>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <Link href="/datenschutz" className="font-semibold hover:text-gray-600" aria-label="Datenschutz">Datenschutz</Link>
                    <Link href="/impressum" className="font-semibold hover:text-gray-600" aria-label="Impressum">Impressum</Link>
                    <Link href="https://www.instagram.com/ossaraev/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-gray-600" aria-label="Instagram">Instagram</Link>
                    <Link href="https://www.facebook.com/ossara.de/?ref=page_internal" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-gray-600" aria-label="Facebook">Facebook</Link>
                    <Link href="https://www.youtube.com/channel/UCe7W9SFkK9y9AyAfknQYvIw" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-gray-600" aria-label="YouTube">YouTube</Link>
                </div>
            </div>
        </footer>
    );
}
