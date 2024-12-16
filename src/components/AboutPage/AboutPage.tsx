import AboutBanner from "@/components/AboutPage/AboutBanner/AboutBanner";
import AboutSection from "@/components/AboutPage/AboutSection/AboutSection";
import History from "@/components/AboutPage/History/History";
import TeamSection from "@/components/AboutPage/TeamSection/TeamSection";

export default function AboutPage() {
  return (
    <>
      <main className="container p-6 mx-auto">
        <AboutBanner />
        <AboutSection />
        <TeamSection />
        <History />
      </main>
    </>
  )
}
