import { bebasNeue } from "@/app/fonts";

export default function DonationForm() {
  return (
    <>
      <section className="px-4 py-20 mt-10 sm:px-8 lg:px-16">
        <div id="donation-form" className="max-w-4xl mx-auto text-center">
          <h2
            className={`${bebasNeue.className} uppercase text-[#ffb400] font-semibold text-6xl`}
          >
            Deine Spende
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            Mit Deiner Hilfe können wir wichtige Arbeit leisten, die sonst nicht
            möglich wäre.{" "}
            <span className="font-semibold text-black">OSSARA e.V.</span>{" "}
            empowert Schwarze Menschen, Menschen afrikanischer Herkunft. Dafür
            brauchen wir einen langen Atem! Hier kannst Du uns einmalig mit
            Deiner Spende oder regelmäßig als{" "}
            <span className="font-semibold text-black">
              OSSARA Community Support
            </span>{" "}
            unterstützen:
          </p>
        </div>
      </section>
    </>
  );
}
