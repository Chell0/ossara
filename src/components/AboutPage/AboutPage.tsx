import AboutBanner from "@/components/AboutPage/AboutBanner/AboutBanner"
import AboutSection from "@/components/AboutPage/AboutSection/AboutSection"
import TeamSection from "@/components/AboutPage/TeamSection/TeamSection"
import History from "@/components/AboutPage/History/History";

export default function AboutPage() {
  return (
    <>
      <div>
        <AboutBanner />
        <AboutSection />
        <TeamSection />
        <History />
      </div>
    </>
  )
}
