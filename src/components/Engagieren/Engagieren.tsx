import Image from "next/image";
import Link from "next/link";

export default function Engagieren() {
  return (
    <div>
      {/* Header Section */}
      <header className="relative w-full min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg"
            fill
            alt="Home Page Header image"
            className="object-cover"
            priority
            sizes="(max-width: 319px) 100vw, (max-width: 424px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, (max-width: 1439px) 100vw, (max-width: 2559px) 100vw, 100vw"
          />
        </div>
        {/* Text Content */}
        <div className="absolute bottom-4 left-4 xs:bottom-5 xs:left-5 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-section lg:left-section xl:bottom-section-lg xl:left-section-lg">
          <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
            <h1
              className="text-[#fcc41b] text-3xl font-extrabold leading-[1.1] uppercase
              xs:text-4xl
              xs2:text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              2xl:text-[140px]
              3xl:text-[160px]"
            >
              <span className="block">Engagieren.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Stellenausschreibungen */}
      <section
        id="stellenausschreibungen"
        className="min-h-screen w-full flex items-center justify-center 
    p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
      >
        <div
          className="w-full max-w-8xl flex flex-col items-center justify-center 
      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        font-semibold text-center text-[#fcc41b]"
          >
            Unsere aktuellen Ausschreibungen
          </h2>
          <p
            className="mt-2 xs:mt-3 sm:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl 
        text-center text-gray-800 max-w-prose"
          >
            Werde ein Teil von Ossara und setze Dich mit uns für nachhaltige
            Veränderung ein!
          </p>
          <div
            className="w-full mt-6 xs:mt-8 sm:mt-10 md:mt-12 grid 
        grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {/* Placeholder Text (No Jobs Available) */}
            {false ? (
              // This block won't render since condition is false
              <div>Job Cards Placeholder</div>
            ) : (
              <div
                className="p-4 xs:p-6 sm:p-8 md:p-10 text-center 
  w-full max-w-3xl col-span-full"
              >
                <p
                  className="font-bold text-sm xs:text-base sm:text-lg md:text-xl 
              text-black"
                >
                  Derzeit haben wir keine offenen Stellen, aber wir freuen uns
                  immer über Initiativbewerbungen! Werde ein Teil von Ossara und
                  setze dich mit uns für nachhaltige Veränderung ein. Schick uns
                  deine Bewerbung – vielleicht gibt es bald eine Gelegenheit,
                  die zu dir passt!
                </p>
                {/* <a
                  href="https://application-portal.ossara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Submit an Initiative Application"
                  className="mt-4 xs:mt-5 sm:mt-6 inline-block px-4 xs:px-5 sm:px-6 
              py-2 text-sm xs:text-base sm:text-lg font-medium text-white 
              bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                >
                  Initiative Application
                </a> */}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stellenausschreibungen */}
      {/* <section
        id="stellenausschreibungen"
        className="min-h-screen w-full flex items-center justify-center 
    p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
      >
        <div
          className="w-full max-w-8xl flex flex-col items-center justify-center 
      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        font-semibold text-center text-[#fcc41b]"
          >
            Unsere aktuellen Ausschreibungen
          </h2>
          <p
            className="mt-2 xs:mt-3 sm:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl 
        text-center text-gray-800 max-w-prose"
          >
            Werde ein Teil von Ossara und setze Dich mit uns für nachhaltige
            Veränderung ein!
          </p>
          <div
            className="w-full mt-6 xs:mt-8 sm:mt-10 md:mt-12 grid 
        grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
          > */}
      {/* Conditional Rendering for Job Cards or Placeholder */}
      {/* {jobs?.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="p-4 xs:p-5 sm:p-6 md:p-8 border shadow-lg 
              border-gray-200 rounded-lg bg-white"
                >
                  <h3
                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl 
                font-semibold text-gray-900"
                  >
                    {job.title}
                  </h3>
                  <p
                    className="mt-2 mb-3 text-sm xs:text-base sm:text-lg md:text-xl 
                text-gray-800"
                  >
                    {job.description}
                  </p>
                  <a
                    href="https://application-portal.ossara.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Apply for ${job.title}`}
                    className="px-4 xs:px-5 sm:px-6 py-2 text-sm xs:text-base sm:text-lg 
                font-medium text-white bg-[#ffb400] rounded-lg 
                hover:bg-[#e6a200] transition-colors"
                  >
                    Apply
                  </a>
                </div>
              ))
            ) : (
              <div
                className="p-4 xs:p-6 sm:p-8 md:p-10 text-center 
            border border-gray-200 rounded-lg bg-white shadow-lg 
            w-full max-w-3xl"
              >
                <p
                  className="text-sm xs:text-base sm:text-lg md:text-xl 
              text-gray-800"
                >
                  Derzeit haben wir keine offenen Stellen, aber wir freuen uns
                  immer über Initiativbewerbungen! Werde ein Teil von Ossara und
                  setze dich mit uns für nachhaltige Veränderung ein. Schick uns
                  deine Bewerbung – vielleicht gibt es bald eine Gelegenheit,
                  die zu dir passt!
                </p>
                <a
                  href="https://application-portal.ossara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Submit an Initiative Application"
                  className="mt-4 xs:mt-5 sm:mt-6 inline-block px-4 xs:px-5 sm:px-6 
              py-2 text-sm xs:text-base sm:text-lg font-medium text-white 
              bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                >
                  Initiative Application
                </a>
              </div>
            )} */}
      {/* </div>
        </div>
      </section> */}

      {/* Mitglied Werden */}
      <section
        className="min-h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url(/images/Engagieren/engagieren.jpg)" }}
      >
        <div
          id="mitglied-werden"
          className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center 
      p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 
      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
        text-[#fcc41b] drop-shadow-md font-extrabold leading-tight uppercase"
          >
            Werde Mitglied
          </h2>
          <p
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 
        text-white max-w-prose text-center"
          >
            Werde Mitglied und unterstütze uns dabei, nachhaltige Veränderungen
            zu bewirken. Gemeinsam können wir mehr erreichen!
          </p>
          <Link
            href="/member"
            rel="noopener noreferrer"
            aria-label="Become A Member"
            className="px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 
        text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-white 
        bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
          >
            Jetzt beitreten!
          </Link>
        </div>
      </section>

      {/* Ehrenamtliches Engagement */}
      <section
        className="min-h-screen w-full flex items-center justify-center 
    p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
      >
        <div
          id="ehrenamt"
          className="w-full max-w-8xl flex flex-col items-center justify-center 
      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        font-semibold text-center text-[#fcc41b]"
          >
            Ehrenamtliches Engagement
          </h2>
          <p
            className="mt-2 xs:mt-3 sm:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl 
        text-center text-gray-800 max-w-prose"
          >
            Wir suchen Dich - werde ein Teil von uns!
          </p>
          <div
            className="w-full mt-6 xs:mt-8 sm:mt-10 md:mt-12 grid 
        grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {/* Conditional Rendering for Volunteer Cards or Placeholder */}
            {false ? (
              // This block won't render since condition is false
              [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 xs:p-5 sm:p-6 md:p-8 border shadow-lg 
              border-gray-200 rounded-lg bg-white"
                >
                  <h3
                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl 
                font-semibold text-gray-900"
                  >
                    Volunteer Role {index + 1}
                  </h3>
                  <p
                    className="mt-2 mb-3 text-sm xs:text-base sm:text-lg md:text-xl 
                text-gray-800"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium aspernatur commodi cum cupiditate, dolore id in
                    libero maxime nostrum perferendis qui rem sunt vitae!
                    Aperiam autem ducimus est id sit?
                  </p>
                  <a
                    href="https://volunteer-portal.ossara.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sign Up for Volunteer Role ${index + 1}`}
                    className="px-4 xs:px-5 sm:px-6 py-2 text-sm xs:text-base sm:text-lg 
                font-medium text-white bg-[#ffb400] rounded-lg 
                hover:bg-[#e6a200] transition-colors"
                  >
                    Sign Up
                  </a>
                </div>
              ))
            ) : (
              <div className="p-4 xs:p-6 sm:p-8 md:p-10 text-center w-full max-w-3xl col-span-full">
                <p
                  className="text-sm xs:text-base sm:text-lg md:text-xl 
              text-black font-bold"
                >
                  Derzeit haben wir keine offenen Ehrenamtsstellen, aber wir
                  freuen uns immer über dein Engagement! Werde ein Teil von
                  Ossara und setze dich mit uns für nachhaltige Veränderung ein.
                  Schick uns deine Bewerbung – vielleicht gibt es bald eine
                  Gelegenheit, die zu dir passt!
                </p>
                {/* <a
                  href="https://volunteer-portal.ossara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Submit a Volunteer Application"
                  className="mt-4 xs:mt-5 sm:mt-6 inline-block px-4 xs:px-5 sm:px-6 
              py-2 text-sm xs:text-base sm:text-lg font-medium text-white 
              bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                >
                  Volunteer Application
                </a> */}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
