import Image from "next/image";
import Link from "next/link";
import ContactPerson from "@/components/ContactPerson/ContactPerson";

export default function Rassismus() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/AntischwarzerRassismus/ANTISCHWARZERRASSISMUS.jpg"
              fill
              alt="Home Page Header Image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content (moved left & down) */}
          <div className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10 ">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 ">
              <h1 className="font-extrabold 3xl:text-[160px] text-3xl text-[#b7410e] xs2:text-5xl xs:text-4xl uppercase leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] ">
                <span className="block">Anti-Schwarzer.</span>
                <span className="block">Rassismus.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen w-full px-8 pb-20 text-[#b7410e]">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-52 mb-12 xs2:mb-15 xs:mb-14 pt-8 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-52">
            <p className="mx-auto font-semibold 3xl:text-[10rem] text-2xl xs2:text-4xl xs:text-3xl leading-tight tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
              Sichtbarkeit schaffen, Strukturen verändern: Wir engagieren uns gegen Anti‑Schwarzen
              Rassismus und stärken die Stimmen von BIPoC in politischen und gesellschaftlichen
              Prozessen.
            </p>
          </div>

          {/* small text */}
          <div className="flex w-full justify-center">
            <div className="max-w-7xl">
              <p className="text-left 3xl:text-3xl text-black text-sm xs2:text-xs xs:text-xs leading-relaxed sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Ossara e.V. setzt sich in Hamburg aktiv dafür ein, Anti‑Schwarzen Rassismus sichtbar
                zu machen und Räume für Empowerment und Austausch für BIPoC zu schaffen. Unsere
                Bildungsarbeit konzentriert sich auf die Auseinandersetzung mit den Auswirkungen von
                Anti‑Schwarzem Rassismus und das aktive Arbeiten gegen rassistische Strukturen. Ein
                wesentlicher Bestandteil unserer Arbeit ist die Mitwirkung am Forderungskatalog der
                Hamburger Arbeitsgruppe Anti‑Schwarzer Rassismus, der konkrete politische und
                gesellschaftliche Veränderungen fordert, um die Rechte und Lebensbedingungen von
                BIPoC zu verbessern. Darüber hinaus vertreten wir die Interessen von BIPoC in
                relevanten Gremien, um die Stimme der betroffenen Gemeinschaften in politischen und
                gesellschaftlichen Entscheidungsprozessen zu stärken. Dieser Bereich unserer Arbeit
                befindet sich noch im Aufbau, aber wir sind fest entschlossen, ihn weiter auszubauen
                und das Bewusstsein für Anti‑Schwarzen Rassismus zu stärken, um eine gerechtere,
                solidarische Gesellschaft zu fördern.
              </p>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen w-full 3xl:py-48 py-12 xs2:py-section sm:py-20 md:py-section-lg lg:py-32 xl:py-36 2xl:py-40">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="mt-10 xs2:mt-14 flex w-full flex-col items-center gap-12 sm:mt-16 md:mt-20 lg:mt-24 lg:flex-row lg:items-center">
              {/* Left Column - Image */}
              <div className="flex w-full justify-center space-y-2 md:space-y-4 lg:w-1/2">
                <div className="3xl:h-[640px] h-[300px] xs2:h-[360px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[540px] 2xl:h-[600px]">
                  <Image
                    src="/images/AntischwarzerRassismus/Anti-Schwarzer-Rassismus_PhotoMaischaSouaga.jpg"
                    alt="AntischwarzerRassismus Image"
                    width={8071}
                    height={5384}
                    quality={100}
                    className="h-full w-full object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="flex w-full flex-col items-center justify-center pt-8 text-center lg:w-1/2 lg:items-start lg:pt-0 lg:text-left">
                <h3 className="mb-4 font-semibold 3xl:text-8xl text-[#b7410e] text-xl xs2:text-3xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#b7410e] lg:mx-0" />
                <ContactPerson
                  name="Camila Angola"
                  position="Vernetzung und Bewusstseinsbildung zu Anti-Schwarzen Rassismus"
                  email="camilo.angola[at]ossara.de"
                  phone="(+49) 157 55572533"
                  imageSrc="/images/UberUns/Team/CamiloAngola.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forderungskatalog */}
        <section>
          <div className="mx-auto flex w-full 3xl:max-w-4xl max-w-[80%] xs:max-w-[75%] xs2:flex-row flex-col items-center justify-between gap-4 xs2:gap-6 rounded-xl border border-[#ba334b] px-4 xs2:px-6 py-4 shadow-sm sm:max-w-[356px] sm:px-8 md:max-w-[520px] md:px-10 lg:max-w-xl xl:max-w-2xl 2xl:max-w-2xl">
            <p className="xs2:text-left text-center 3xl:text-3xl text-black text-sm xs2:text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Forderungskatalog
            </p>

            <button className="rounded-md bg-[#b7410e] 3xl:px-10 px-4 xs2:px-4 xs:px-2 3xl:py-6 py-2 xs2:py-2 xs:py-1 font-semibold 3xl:text-3xl text-sm text-white xs2:text-xs xs:text-xs shadow-xl sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3 md:text-base lg:px-7 lg:py-3.5 lg:text-lg xl:px-8 xl:py-4 xl:text-xl 2xl:px-9 2xl:py-4.5 2xl:text-2xl ">
              <Link
                href={`/files/forderungskatalog_anti_schwarzer_rassismus`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="3xl:h-10 h-4 3xl:w-10 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download</span>
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
