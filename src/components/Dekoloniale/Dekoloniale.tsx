import { bebasNeue } from "@/app/fonts";
import PersonSection from "@/components/Dekoloniale/PersonSection/PersonSection";
import Image from "next/image";

export default function Dekoloniale() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-header font-bold leading-tight uppercase`}
          >
            Dekoloniale Internationale Zusammenarbeit
          </h1>
        </header>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
        </section>

        {/*Team Section*/}
        <PersonSection />

        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
