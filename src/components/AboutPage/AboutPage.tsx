import AboutBanner from "@/components/AboutPage/AboutBanner/AboutBanner";
import AboutSection from "@/components/AboutPage/AboutSection/AboutSection";
import History from "@/components/AboutPage/History/History";
import TeamSection from "@/components/AboutPage/TeamSection/TeamSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div>
        <AboutBanner />
        <AboutSection />
        <TeamSection />
        <History />

        {/* Ossara e.V. Weihnachtsbrief */}
        <div className={`flex justify-between items-center border border-gray-300 rounded-3xl p-8 shadow-md bg-title-bg max-w-4xl mx-auto mt-10`}>
          <h2 className={`text-md font-semibold text-gray-600`}>Ossara e.V. Weihnachtsbrief 2021</h2>
          <Link
            href={`/files/weihnachtsbrief_2021.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2 bg-main-bg text-gray-600 font-semibold rounded-2xl p-4 hover:bg-blended-gradient hover:text-white transition-colors`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </div>
      </div>
    </>
  )
}
