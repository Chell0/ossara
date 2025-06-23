import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-white">
      <main className="p-6">
        <NavBar/>
        <div
          className="container mx-auto mt-20 max-w-screen-md rounded-lg bg-[#fff6ea] p-10 shadow-sm">
          {/* News Date */}
          <h3 className="mb-5 text-center text-gray-500 uppercase">10. November
            2023</h3>

          {/* News Title */}
          <h1
            className={`mb-10 text-center font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            Vielfalt im Fokus
          </h1>

          {/* News Image */}
          <div
            className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/news/picture-3.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`rounded-md object-contain object-center`}
              style={{maxHeight: "640px"}}
            />
          </div>

          {/* News Content */}
          <section
            className="prose prose-sm prose-stone prose-a:target:_blank prose-a:rel:noreferrer mx-auto mt-20 max-w-screen-md prose-headings:font-semibold prose-a:text-orange-500 prose-headings:text-2xl prose-headings:text-orange-500">
            <p className="mt-4 text-[#eb7b24] text-base">
              <b>Rückblick:</b>
            </p>
            <p className="mt-2 text-base text-gray-800">
              ✨Vielfalt im Fokus: Perspektiven und Erfahrungen von
              Migrantenselbstorganisationen✨
            </p>
            <p className="mt-4 text-base text-gray-800">
              Vielfalt als Statussymbol? Wer kommt zu kurz und welche Stimmen
              müssen mehr gehört
              werden? In einem interaktiven Live Podcast kommen Expert*innen zu
              Wort, die
              Perspektiven von Migrantenselbstorganisationen zum Thema Vielfalt
              in Hamburg in den
              Blick nehmen. Welche Herausforderungen bringt die Thematik für
              Person of Color? Welche
              Dimensionen finden bis jetzt weniger Achtung oder werden in der
              Diskussion um das
              Thema nicht berücksichtigt? Am 10. November 2023 haben sich, im
              Rahmen der Woche der
              Vielfalt des Bezirkes Hamburg Nord, vier Expert*innen dieser
              Thematik gewidmet und in
              einem Live Podcast über relevante Themen diskutiert. Die
              Veröffentlichung des Live
              Podcast folgt in Kürze.
            </p>
            <p className="mt-4 text-base text-gray-800">Mit dabei waren:</p>
            <ul
              className="mt-4 ml-10 list-disc space-y-2 font-semibold text-[#eb7b24] text-sm">
              <li>Tina Banze, Gründerin der Initiative intersektional deutsch
              </li>
              <li>Nicolas S. Moumouni, Vorsitzender und Gründer des Vereins
                OSSARA e.V.
              </li>
              <li>
                Sally Riedel, Initiatorin und geschäftsführende Vorsitzende des
                Vereins MOSAIQ e.V
              </li>
              <li>
                Konstantin Ulmer, Referent für PR, Ausstellungen und
                Veranstaltungen in der Staats-
                und Universitätsbibliothek, begleitet uns als Moderator durch
                den Abend
              </li>
            </ul>
            <p className="mt-4 text-base text-gray-800">
              Gefördert wurde diese Veranstaltung durch das Bezirksamt Hamburg
              Nord.
            </p>
          </section>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
