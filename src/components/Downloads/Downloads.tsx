import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="min-h-fit w-full relative pb-20 mb-20">
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1 className="text-[#fcc41b] font-extrabold leading-tight uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48">
              Downloads.
            </h1>
          </div>
        </header>

        {/* Download Items */}
        <section className="w-full min-h-screen flex justify-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 space-y-6 md:space-y-8 lg:space-y-10">
            {[
              { year: "2023", file: "jahresbericht_2023.pdf" },
              { year: "2022", file: "jahresbericht_2022.pdf" },
              { year: "2021", file: "jahresbericht_2021.pdf" },
              {
                title:
                  "Stellungnahme von der Arbeitsgruppe Anti-Schwarzer Rassismus Hamburg",
                file: "stellungnahme.pdf",
              },
              {
                title:
                  "Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg",
                file: "stadtHamburg.pdf",
              },
              { title: "Ossara e.V. Satzung", file: "satzung.pdf" },
              {
                title: "Ossara e.V. Beitrittserklärung oder einmalige Spende",
                file: "beitrittserklärung.pdf",
              },
              {
                title: "Andere Formate vom Logo sind auf Anfrage erhältlich",
                file: "ossara_ev_logo.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start border-2 border-[#fcc41b] rounded-xl p-4 sm:p-6 md:p-8"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-0">
                  {item.year ? `Jahresbericht ${item.year}` : item.title}
                </p>
                <Link
                  href={`/files/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 text-base sm:text-lg md:text-xl font-medium px-6 py-3 rounded-lg bg-[#fcc41b] text-white hover:bg-[#e6a200] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    <span>Download</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
