import { bebasNeue } from "@/app/fonts";
import Image from "next/image";

export default function History() {
  return (
    <>
      <section className="flex items-center justify-center w-full mt-40">
        <div className="max-w-lg mx-auto">
          <h2
            className={`${bebasNeue.className} text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
          >
            Unsere Geschichte
          </h2>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center gap-20 py-10 mx-10`}
      >
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            width={560}
            height={640}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-800 text-base">
            Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine dekoloniale
            und machtkritische internationale Zusammenarbeit zu fördern. Der
            Name „Ossara“, der in der Lamba-Sprache aus dem Norden Togos „Alles
            wird gut!“ bedeutet, steht für unsere Vision einer positiven
            Veränderung, die durch eine gleichwertige Zusammenarbeit und die
            Stärkung der Selbstbestimmung erreicht wird.
          </p>
          <p className="text-base mt-4 text-gray-800">
            Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
            Partner:innen Bildungs- und Infrastrukturprojekte durchführten. Im
            Laufe der Jahre haben wir unsere Arbeit auf weitere westafrikanische
            Länder ausgeweitet und gleichzeitig ein neues Arbeitsfeld in Hamburg
            etabliert, das sich auf die Stärkung von BIPoC-Communities sowie die
            Bekämpfung von Rassismus und Diskriminierung konzentriert.
          </p>
          <p className="text-base mt-4 text-gray-800">
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
