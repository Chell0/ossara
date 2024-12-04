import { bebasNeue } from "@/app/layout";
import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";
import Image from "next/image";
import Link from "next/link";

export default function FördernUndSpenden() {
    return (
        <>
            <div className="container mx-auto">
                {/* Banner Section */}
                <section
                    className="text-[#ffb400] text-center py-12">
                    <h1 className={`${bebasNeue.className} text-header font-bold leading-tight uppercase`}>Fördern und Spenden</h1>
                </section>

                <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <Image
                            src={`/bgs/donate.jpg`}
                            alt="About Photo"
                            width={350}
                            height={350}
                            quality={100}
                            className="object-contain w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl uppercase font-bold text-[#ffb400]">
                            Hilf uns mit Deiner Spende
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Einmalige und regelmäßige Spenden der <span className="font-bold">OSSARA Community</span> ermöglichen unsere Arbeit. Durch Deinen Beitrag stellst Du sicher, dass wir uns auf unsere Arbeit konzentrieren und diese auch in Zukunft unabhängig gestalten können.
                        </p>
                        <button className="bg-[#ffb400] hover:bg-blended-gradient mt-5 p-3 rounded-2xl shadow-xl">
                            <Link href="#donation-form" className="uppercase text-white font-bold">
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
};
