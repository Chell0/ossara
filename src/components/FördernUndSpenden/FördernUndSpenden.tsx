import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Banner Section */}
        <header
          className="min-h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          <div
            id="fordern"
            className={`absolute inset-0 bg-black bg-opacity-70 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight uppercase p-4 sm:p-6 ml-4 sm:ml-6 md:ml-8 lg:ml-10 mt-20 sm:mt-26`}
            >
              Fördern.
              <br /> und.
              <br /> Spenden.
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
