import Image from "next/image";

export default function History() {
  return (
    <>
      <section className="w-full flex items-center justify-center mt-20">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[#ffb400] mt-20 text-6xl sm:text-3xl md:text5xl lg:text-7xl font-semibold text-center drop-shadow-sm">
            Unsere Geschichte
          </h2>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20`}
      >
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="mt-2 text-gray-700">
            Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine dekoloniale
            und machtkritische internationale Zusammenarbeit zu fördern. Der
            Name „Ossara“, der in der Lamba-Sprache aus dem Norden Togos „Alles
            wird gut!“ bedeutet, steht für unsere Vision einer positiven
            Veränderung, die durch eine gleichwertige Zusammenarbeit und die
            Stärkung der Selbstbestimmung erreicht wird.
          </p>
          <p className="pt-2 text-gray-700">
            Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
            Partner:innen Bildungs- und Infrastrukturprojekte durchführten. Im
            Laufe der Jahre haben wir unsere Arbeit auf weitere westafrikanische
            Länder ausgeweitet und gleichzeitig ein neues Arbeitsfeld in Hamburg
            etabliert, das sich auf die Stärkung von BIPoC-Communities sowie die
            Bekämpfung von Rassismus und Diskriminierung konzentriert.
          </p>
          <p className="pt-2 text-gray-700">
            Heute ist Ossara e.V. ein Verein, der nicht nur in Westafrika aktiv
            ist, sondern auch auf lokaler Ebene durch entwicklungspolitische
            Bildungsarbeit, Empowerment und Vernetzung einen Beitrag zu einer
            gerechteren und nachhaltigeren Welt leistet. Ebenso ist der Verein
            in vielen regionalen und überregionalen Gremien sowie Netzwerken
            aktiv.
          </p>
        </div>
      </section>
    </>
  );
}
