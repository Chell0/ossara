import Image from "next/image";

import DonationForm from "@/components/Spenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/Spenden/DonationQuestions/DonationQuestions";

export default function Spenden() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/bgs/donate.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover"
              priority
              sizes="(max-width: 319px) 100vw, (max-width: 424px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, (max-width: 1439px) 100vw, (max-width: 2559px) 100vw, 100vw"
            />
          </div>
          {/* Text Content */}
          <div className="absolute bottom-4 left-4 xs:bottom-5 xs:left-5 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-section lg:left-section xl:bottom-section-lg xl:left-section-lg">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
              <h1
                className="text-[#fcc41b] text-3xl font-extrabold leading-[1.1] uppercase
                      xs:text-4xl
                      xs2:text-5xl
                      sm:text-6xl
                      md:text-7xl
                      lg:text-8xl
                      xl:text-9xl
                      2xl:text-[140px]
                      3xl:text-[160px]"
              >
                <span className="block">Spenden.</span>
              </h1>
            </div>
          </div>
        </header>
        {/* Donation Form */}
        <DonationForm />
        {/* Donation Questions */}
        <section className="pt-24">
          <DonationQuestions />
        </section>
      </div>
    </>
  );
}
