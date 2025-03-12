import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="min-h-fit w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#fcc41b] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-20">
              Downloads
            </h1>
          </div>
        </header>

        {/* General Info Section */}
        <div
          className={`flex justify-center items-center max-w-4xl mx-auto mt-20 mb-10 sm:mb-20 p-4 sm:p-6`}
        >
          <p className="text-lg text-center pt-20 mt-20">
            Allgemeine Infos zu Ossara finden Sie{" "}
            <button className="p-1 sm:p-0.5 font-semibold text-white rounded-lg bg-[#fcc41b] hover:bg-[#e6a200] transition-colors">
              <Link href={`/uber`}>hier</Link>
            </button>
          </p>
        </div>

        {/* Download Items */}
        <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Jahresbericht 2023 */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Jahresbericht 2023
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/jahresbericht_2023.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Jahresbericht 2022 */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Jahresbericht 2022
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/jahresbericht_2022.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Jahresbericht 2021 */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Jahresbericht 2021
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/jahresbericht_2021.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Stellungnahme */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Stellungnahme von der Arbeitsgruppe Anti-Schwarzer Rassismus
              Hamburg
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/stellungnahme.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/stadtHamburg.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Ossara e.V. Satzung */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Ossara e.V. Satzung
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/satzung.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Ossara e.V. Beitrittserklärung oder einmalige Spende */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Ossara e.V. Beitrittserklärung oder einmalige Spende
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/beitrittserklärung.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>

          {/* Unser Logo */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 sm:p-6 shadow-sm`}
          >
            <p
              className={`text-sm sm:text-base text-gray-800 text-center sm:text-left mb-2 sm:mb-0`}
            >
              Andere Formate vom Logo sind auf Anfrage erhältlich
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
              <Link
                href={`/files/ossara_ev_logo.png`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download Now</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
