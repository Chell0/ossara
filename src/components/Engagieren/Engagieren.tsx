import { bebasNeue } from "@/app/fonts";
import Link from "next/link";

export default function Engagieren() {
  return (
    <>
      <div className="min-h-screen">
        {/* Page Header */}
        <header className="text-[#ffb400] py-12 text-center mt-20">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-9xl font-bold leading-tight uppercase`}
          >
            Engagieren
          </h1>
        </header>

        {/* Stellenausschreibungen */}
        <section
          id="stellenausschreibungen"
          className="px-6 py-16 bg-white mt-20"
        >
          <h2 className="text-4xl font-semibold text-center text-gray-600">
            Job Openings
          </h2>
          <p className="mt-4 text-base text-center text-gray-800">
            Join our team and help us make a difference!
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 border shadow-lg borer-gray-200 rounded-3xl bg-main-bg"
              >
                <h3 className="text-2xl font-semibold text-gray-600">
                  Job Title {index + 1}
                </h3>
                <p className="mt-2 text-base text-gray-800">
                  Short description of the job role.
                </p>
                <button className="mt-6 inline-block bg-[#ffb400] font-semibold text-lg text-white px-7 py-4 rounded-2xl hover:bg-blended-gradient">
                  <Link
                    href={`/apply`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Learn More & Apply"
                  >
                    Apply
                  </Link>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button className="text-white text-lg font-semibold bg-[#ffb400] hover:bg-blended-gradient px-8 py-4 rounded-2xl">
              <Link href={`/jobs`}>Jobs Available</Link>
            </button>
          </div>
        </section>

        {/* Mitglied Werden */}
        <section
          id="mitglied_werden"
          className="px-6 py-16 mt-20 bg-gray-100 rounded-xl"
        >
          <h2
            className={`${bebasNeue.className} text-7xl font-semibold text-center text-blue-500`}
          >
            Become a Member
          </h2>
          <p className="mt-4 text-base text-center text-gray-800">
            Join our community and contribute to our mission!
          </p>
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-[#ffb400] hover:bg-blended-gradient rounded-2xl">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Now"
              >
                Join Now
              </Link>
            </button>
          </div>
        </section>

        {/* Ehrenamtliches Engagement */}
        <section id="ehrenamtliches_engagement" className="px-6 py-16 mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-600">
            Volunteer Opportunities
          </h2>
          <p className="mt-4 text-base text-center text-gray-500">
            Make a difference by volunteering with us.
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Volunteer Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 shadow-lg rounded-3xl bg-main-bg"
              >
                <h3 className="text-2xl font-semibold text-gray-600">
                  Volunteer Role {index + 1}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Brief description of the role.
                </p>
                <button className="mt-6 inline-block bg-[#ffb400] text-white font-semibold px-7 py-3 rounded-2xl text-lg hover:bg-blended-gradient">
                  <Link
                    href={`#volunteer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sign Up"
                  >
                    Sign Up
                  </Link>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button className="text-white text-lg font-semibold bg-[#ffb400] hover:bg-blended-gradient px-8 py-4 rounded-2xl">
              <Link href={`/volunteer_opportunities`}>
                Opportunities Available
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
