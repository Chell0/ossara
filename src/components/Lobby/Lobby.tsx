import { bebasNeue } from "@/app/fonts";
import Image from "next/image";

export default function Lobby() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-header font-bold leading-tight uppercase`}
          >
            Lobby und Netzwerkarbeit
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

        {/* Ansprechppartner */}
        <section className="flex items-center justify-center w-full mt-28 sm:px-2">
          <div className="max-w-md rounded-lg shadow-lg bg-blended-gradient sm:px-4">
            <h2 className="px-4 py-4 text-xl font-semibold text-center text-white sm:text-2xl md:text3xl lg:text-4xl">
              Ansprechpartner
            </h2>
          </div>
        </section>

        {/* Ansprechpartner */}
        <section className="flex flex-col items-center py-10 mx-10 mt-20 mb-20 md:flex-row gap-10">
          <div className="flex justify-center flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={400}
              height={400}
              className="object-cover shadow-xl rounded-xl sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
            />
          </div>
          <div className="w-full max-w-sm p-4 mx-auto bg-gray-200 md:w-1/2 rounded-md">
            <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Kontakt:{" "}
                <span className={`font-medium text-orange-600`}>John Doe</span>
              </p>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Email:{" "}
                <span className={`font-medium text-orange-600`}>
                  johndoe[a]ossara.de
                </span>
              </p>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Cell:{" "}
                <span className={`font-medium text-orange-600`}>
                  (+49) 123-4567-8910
                </span>
              </p>
            </div>
          </div>
        </section>

        {/*Netzwerkarbeit*/}
        <section className="flex items-center justify-center w-full mt-28 sm:px-2">
          <div className="max-w-md rounded-lg shadow-lg bg-blended-gradient sm:px-4">
            <h2 className="px-4 py-4 text-xl font-semibold text-center text-white sm:text-2xl md:text3xl lg:text-4xl">
              Netzwerkarbeit
            </h2>
          </div>
        </section>

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
      </div>
    </>
  );
}
