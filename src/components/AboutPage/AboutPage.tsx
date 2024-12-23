import { bebasNeue } from "@/app/fonts";
import AboutBanner from "@/components/AboutPage/AboutBanner/AboutBanner";
import AboutSection from "@/components/AboutPage/AboutSection/AboutSection";
import History from "@/components/AboutPage/History/History";
import TeamSection from "@/components/AboutPage/TeamSection/TeamSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="container p-6 mx-auto">
        <AboutBanner />
        <AboutSection />
        {/* Team Section */}
        <div className="mt-20">
          <h3
            id="team"
            className={`${bebasNeue.className} text-[#ffb400] text-center text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl uppercase`}
          >
            Das Team
          </h3>
        </div>
        <div className="container mx-auto w-1/2 px-4 mt-10">
          <p className="text-base text-gray-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis
            voluptatibus exercitationem facilis libero perferendis suscipit
            distinctio, recusandae consequuntur, deleniti veniam neque nam
            obcaecati in numquam corrupti quisquam accusantium necessitatibus!
          </p>
        </div>
        {/* Team group photo */}
        <div className="relative flex flex-col flex-shrink-0 items-center justify-center mt-20">
          <Image
            src={`/team/team.jpg`}
            alt="Team Photo"
            quality={100}
            width={500}
            height={400}
            className="w-1/2 rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-28">
          <h3
            id="team"
            className={`${bebasNeue.className} text-[#ffb400] text-center text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl uppercase`}
          >
            Deine Ansprechpartner*innen
          </h3>
        </div>

        {/* Team Individual photo  */}
        <TeamSection />

        <History />
      </main>
    </>
  );
}
