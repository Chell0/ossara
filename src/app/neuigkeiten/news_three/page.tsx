import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="relative bg-white">
        <NavBar />
        <div className="container mx-auto mt-20 max-w-screen-md rounded-lg bg-[#fff6ea] p-10 shadow-sm">
          {/* News Date */}
          <h3 className="mb-5 text-center text-gray-500 uppercase">12. Dezember 2023</h3>

          {/* News Title */}
          <h1
            className={`mb-10 text-center font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            Newsletter MachtBewusst: Dekoloniale Perspektiven
          </h1>

          {/* News Image */}
          <div className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/news/picture-4.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`rounded-md object-contain object-center`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* Text */}
          <section className="prose prose-sm prose-stone prose-a:target:_blank prose-a:rel:noreferrer mx-auto mt-20 max-w-screen-md prose-headings:font-semibold prose-a:text-orange-500 prose-headings:text-2xl prose-headings:text-orange-500">
            <p className="mt-4 text-base text-gray-800">
              Du möchtest Neuigkeiten von Ossara e.V. und aktuelle Debatten und News zum Thema
              Dekolonisierung und Anti-Rassismus innerhalb Hamburgs verfolgen oder über
              Veranstaltungen zu diesen Thematiken informiert bleiben?
            </p>
            <p className="text-base">
              Dann abonniere unseren Newsletter{" "}
              <button className="bg-[#eb7b24] p-0.5 text-white">
                <Link
                  href={`https://39dff525.sibforms.com/serve/MUIFAOZ7L48ggutm_jNF7tYry6C5ZYqVW8siJVL8b884tlY5b1VNz1FhlCnABBVeJNpk5uoeBUwZCxreapwZngQmf7hmmmkeduQwCzNri_t920cVKW9kkgE_S-4s5FxL1vrftWnBNIJFz78O5c5zMtTeZy62Qb3b8Sdq1pZbEVAnVFz9EZXogILY5tfmN-Gk8QEG6IyJldrXKxRr`}
                  target={`_blank`}
                  rel={`noopener noreferrer`}
                >
                  hier
                </Link>
              </button>
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
