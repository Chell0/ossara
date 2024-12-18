import { bebasNeue } from "@/app/fonts";
import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";
import Image from "next/image";
import Link from "next/link";

export default function FördernUndSpenden() {
  return (
    <>
      <div className="container mx-auto">
        {/* Banner Section */}
        <section className="text-[#ffb400] text-center py-12">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercase`}
          >
            Fördern und Spenden
          </h1>
        </section>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 mb-20 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/donate.jpg`}
              alt="About Photo"
              width={350}
              height={350}
              quality={100}
              className="object-contain w-full h-auto shadow-lg rounded-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2
              className={`${bebasNeue.className} text-6xl uppercase font-semibold text-[#ffb400]`}
            >
              Hilf uns mit Deiner Spende
            </h2>
            <p className="mt-4 text-gray-500 text-base">
              Einmalige und regelmäßige Spenden der{" "}
              <span className="font-bold text-black">OSSARA Community</span>{" "}
              ermöglichen unsere Arbeit. Durch Deinen Beitrag stellst Du sicher,
              dass wir uns auf unsere Arbeit konzentrieren und diese auch in
              Zukunft unabhängig gestalten können.
            </p>
            <button className="bg-[#ffb400] hover:bg-blended-gradient mt-5 px-8 py-4 rounded-2xl shadow-xl">
              <Link
                href="#donation-form"
                className="font-semibold text-white text-lg"
              >
                Jetzt Spenden
              </Link>
            </button>
          </div>
        </section>

        {/* Donation Form */}
        <DonationForm />
        {/* Donation Questions */}
        <DonationQuestions />
      </div>
    </>
  );
}
