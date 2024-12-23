import { bebasNeue } from "@/app/fonts";

export default function DonationForm() {
  return (
    <>
      <section className="px-4 py-20 mt-10 sm:px-8 lg:px-16">
        <div id="donation-form" className="max-w-4xl mx-auto text-center">
          <h3
            className={`${bebasNeue.className} text-[#ffb400] text-5xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-center drop-shadow-sm`}
          >
            Deine Spende
          </h3>
          <p className="mt-4 text-gray-800 text-base">
            Mit Deiner Hilfe können wir wichtige Arbeit leisten, die sonst nicht
            möglich wäre. <b>OSSARA e.V.</b> empowert Schwarze Menschen,
            Menschen afrikanischer Herkunft. Dafür brauchen wir einen langen
            Atem! Hier kannst Du uns einmalig mit Deiner Spende oder regelmäßig
            als <b>OSSARA Community Support</b> unterstützen:
          </p>
        </div>
      </section>
    </>
  );
}
