import Link from "next/link";

export default function Engagieren() {
  return (
    <div>
      {/* Header Section */}
      <header
        className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
        style={{
          backgroundImage:
            "url(/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg)",
        }}
      >
        <div className="absolute bottom-3 left-4">
          <h1
            className="text-[#fcc41b] font-extrabold leading-tight uppercase 
        text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10"
          >
            Engagieren.
          </h1>
        </div>
      </header>

      {/* Stellenausschreibungen */}
      <section className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div
          id="stellenausschreibungen"
          className="w-full max-w-6xl flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center text-[#fcc41b]">
            Unsere aktuellen Ausschreibungen
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-center text-gray-800">
            Werde ein Teil von Ossara und setze Dich mit uns für nachhaltige
            Veränderung ein!
          </p>

          {/* //TODO: Put the placeholder text below when there is no job opening */}
          {/* Derzeit haben wir keine offenen Stellen, aber wir freuen uns immer
          über Initiativbewerbungen! Werde ein Teil von Ossara und setze dich
          mit uns für nachhaltige Veränderung ein. Schick uns deine Bewerbung –
          vielleicht gibt es bald eine Gelegenheit, die zu dir passt! */}

          <div className="w-full mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Job Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border shadow-lg border-gray-200 rounded-lg bg-white"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Job Title {index + 1}
                </h3>
                <p className="mt-2 mb-3 text-sm sm:text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium aspernatur commodi cum cupiditate, dolore id in
                  libero maxime nostrum perferendis qui rem sunt vitae! Aperiam
                  autem ducimus est id sit?
                </p>
                <Link
                  href={`#apply`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn More & Apply"
                  className="px-4 sm:px-6 py-2 text-sm sm:text-md font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitglied Werden */}
      <section
        className="min-h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url(/images/Engagieren/engagieren.jpg)" }}
      >
        <div
          id="mitglied-werden"
          className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#fcc41b] drop-shadow-md font-extrabold leading-tight uppercase">
            Werde Mitglied
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-xl text-center">
            Werde Mitglied und unterstütze uns dabei, nachhaltige Veränderungen
            zu bewirken. Gemeinsam können wir mehr erreichen!
          </p>
          <Link
            href="/member"
            rel="noopener noreferrer"
            aria-label="Become A Member"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
          >
            Jetzt beitreten!
          </Link>
        </div>
      </section>

      {/* Ehrenamtliches Engagement */}
      <section className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div
          id="ehrenamt"
          className="w-full max-w-6xl flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center text-[#fcc41b]">
            Ehrenamtliches Engagement
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-center text-gray-800">
            Wir suchen Dich - werde ein Teil von uns!
          </p>
          <div className="w-full mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Volunteer Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border shadow-lg border-gray-200 rounded-lg bg-white"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Volunteer Role {index + 1}
                </h3>
                <p className="mt-2 mb-3 text-sm sm:text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium aspernatur commodi cum cupiditate, dolore id in
                  libero maxime nostrum perferendis qui rem sunt vitae! Aperiam
                  autem ducimus est id sit?
                </p>
                <Link
                  href={`#volunteer`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sign Up"
                  className="px-4 sm:px-6 py-2 text-sm sm:text-md font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
