import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative min-h-fit w-full pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          {/* Spacer matching navbar height */}
          <div className="3xl:h-36 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="3xl:pt-44 pt-16 xs:pt-20 3xl:pl-20 pl-4 xs:pl-6 font-extrabold 3xl:text-[10rem] text-[#fcc41b] text-xl xs2:text-3xl xs:text-2xl uppercase leading-tight sm:pt-24 sm:pl-6 sm:text-3xl md:pt-28 md:pl-10 md:text-5xl lg:pt-32 lg:pl-12 lg:text-6xl xl:pt-36 xl:pl-14 xl:text-7xl 2xl:pt-40 2xl:pl-16 2xl:text-8xl"
            >
              Downloads.
            </h1>
          </div>
        </header>

        {/* Download Items */}
        <section
          className="flex min-h-screen w-full justify-start 3xl:px-20 px-4 xs:px-6 sm:px-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16"
        >
          <div
            className="w-full max-w-3xl space-y-6 xs:space-y-7 3xl:py-32 py-8 xs:py-10 sm:space-y-7 sm:py-10 md:space-y-10 md:py-16 lg:space-y-12 lg:py-20 xl:space-y-14 xl:py-24 2xl:space-y-16 2xl:py-28"
          >
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
                className="flex flex-col items-start justify-between rounded-xl border-2 border-[#fcc41b] p-2 xs:p-3 sm:flex-row sm:p-5 md:p-8 lg:p-10 xl:p-12"
              >
                <p
                  className="mb-3 text-base text-gray-800 xs:text-lg sm:mb-0 sm:text-lg md:text-2xl lg:text-3xl"
                >
                  {item.year ? `Jahresbericht ${item.year}` : item.title}
                </p>
                <Link
                  href={`/files/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full sm:w-auto"
                >
                  <button
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#fcc41b] px-4 xs:px-5 py-2 xs:py-3 font-medium text-sm text-white xs:text-base transition-colors hover:bg-[#e6a200] sm:w-auto sm:px-5 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-4.5 lg:text-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 xs:h-5 w-4 xs:w-5 sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8"
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
