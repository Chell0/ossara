import { bebasNeue } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        {/* Date */}
        <section className="text-center text-gray-800">
          <p className="text-base font-semibold">12. Dezember 2023</p>
        </section>
        {/* Title */}
        <section className="text-[#ffb400] text-center py-6 mt-5">
          <h2
            className={`${bebasNeue.className} drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Newsletter MachtBewusst: Dekoloniale Perspektiven
          </h2>
        </section>
        {/* Image */}
        <section className="flex items-center justify-center mt-20">
          <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
              src={`/news/picture-4.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width={400}
              height={400}
              className={`object-cover object-center`}
              quality={100}
            />
          </div>
        </section>
        {/* Text */}
        <section className="flex flex-col items-center justify-center mt-10">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-base text-gray-800">
              Du möchtest Neuigkeiten von Ossara e.V. und aktuelle Debatten und
              News zum Thema Dekolonisierung und Anti-Rassismus innerhalb
              Hamburgs verfolgen oder über Veranstaltungen zu diesen Thematiken
              informiert bleiben?
            </p>
            <p className="text-base">
              Dann abonniere unseren Newsletter{" "}
              <button className="p-1 font-semibold text-white rounded-xl bg-[#ffb400]">
                <Link
                  href={`https://39dff525.sibforms.com/serve/MUIFAOZ7L48ggutm_jNF7tYry6C5ZYqVW8siJVL8b884tlY5b1VNz1FhlCnABBVeJNpk5uoeBUwZCxreapwZngQmf7hmmmkeduQwCzNri_t920cVKW9kkgE_S-4s5FxL1vrftWnBNIJFz78O5c5zMtTeZy62Qb3b8Sdq1pZbEVAnVFz9EZXogILY5tfmN-Gk8QEG6IyJldrXKxRr`}
                  target={`_blank`}
                  rel={`noopener noreferrer`}
                >
                  hier
                </Link>
              </button>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
