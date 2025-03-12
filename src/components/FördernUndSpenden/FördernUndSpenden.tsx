import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="min-h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          <div
            id="fordern"
            className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start"
          >
            <h1 className="text-[#fcc41b] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
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
