import { acme } from "@/app/fonts";
import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div className="container mx-auto p-6">
        {/* Title Section */}
        <header className="text-[#ffb400] text-center py-12">
          <h1
            className={`${acme.className} drop-shadow-xl text-[120px] font-bold leading-tight uppercase`}
          >
            Herunterladungen
          </h1>
        </header>

        <div
          className={`flex justify-between items-center max-w-4xl mx-auto mt-20 mb-20 text-lg font-bold`}
        >
          <p>
            Allgemeine Infos zu Ossara finden Sie{" "}
            <Link
              href={`/uber`}
              className="bg-blended-gradient text-white font-semibold rounded-lg p-1"
            >
              hier
            </Link>
          </p>
        </div>

        {/* Jahresbericht 2023 */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Jahresbericht 2023
          </h2>
          <Link
            href={`/files/jahresbericht_2023.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>

        {/* Jahresbericht 2022 */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Jahresbericht 2022
          </h2>
          <Link
            href={`/files/jahresbericht_2022.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>

        {/* Jahresbericht 2021 */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Jahresbericht 2021
          </h2>
          <Link
            href={`/files/jahresbericht_2021.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>

        {/* Stellungnahme */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Stellungnahme von der Arbeitsgruppe Anti-Schwarzer Rassismus Hamburg
          </h2>
          <Link
            href={`/files/stellungnahme.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
        {/* Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg
          </h2>
          <Link
            href={`/files/stadtHamburg.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
        {/* Ossara e.V. Satzung */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Ossara e.V. Satzung
          </h2>
          <Link
            href={`/files/satzung.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
        {/* Ossara e.V. Beitrittserklärung oder einmalige Spende */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Ossara e.V. Beitrittserklärung oder einmalige Spende
          </h2>
          <Link
            href={`/files/beitrittserklärung.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
        {/* Unser Logo */}
        <div
          className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto mt-10`}
        >
          <h2 className={`text-md font-semibold text-gray-800`}>
            Andere Formate vom Logo sind auf Anfrage erhältlich
          </h2>
          <Link
            href={`/files/ossara_ev_logo.png`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
