import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#fcc41b] font-extrabold leading-tight uppercase 
        text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10"
            >
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
