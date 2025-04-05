import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full bg-cover bg-center relative 
    h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] md2:h-[70vh] tab:h-[85vh] tab-xl:h-[90vh] lg:h-[95vh] xl:h-screen 2xl:h-screen"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#fcc41b] font-extrabold leading-tight uppercase 
        text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] 
        pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 
        pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48"
            >
              Fördern.
              <br />
              Und.
              <br />
              Spenden.
            </h1>
          </div>
        </header>

        {/* Donation Form */}
        <DonationForm />
        {/* Donation Questions */}
        <DonationQuestions />
      </div>
    </>
  );
}
