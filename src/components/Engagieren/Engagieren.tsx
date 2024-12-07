import { bebasNeue } from "@/app/fonts";
import Link from "next/link";

export default function Engagieren() {
  return (
    <>
      <div className="min-h-screen">
        {/* Page Header */}
        <header className="text-[#ffb400] py-12 text-center mt-20">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-header font-bold leading-tight uppercase`}
          >
            Engagieren
          </h1>
        </header>

        {/* Stellenausschreibungen */}
        <section
          id="stellenausschreibungen"
          className="px-6 py-16 mt-20 bg-white"
        >
          <h2 className="text-4xl font-bold text-center text-gray-600">
            Job Openings
          </h2>
          <p className="mt-4 text-sm text-center text-gray-500">
            Join our team and help us make a difference!
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 border shadow-lg borer-gray-200 rounded-2xl bg-main-bg"
              >
                <h3 className="text-lg font-semibold text-gray-600">
                  Job Title {index + 1}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Short description of the job role.
                </p>
                <Link
                  href={`/apply`}
                  className="mt-6 inline-block bg-[#ffb400] font-semibold text-sm text-white px-4 py-2 rounded-xl hover:bg-blended-gradient"
                >
                  Learn More & Apply
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              href={`/jobs`}
              className="text-white text-md font-semibold bg-[#ffb400] hover:bg-blended-gradient p-3 rounded-2xl"
            >
              View All Jobs
            </Link>
          </div>
        </section>

        {/* Mitglied Werden */}
        <section
          id="mitglied_werden"
          className="px-6 py-16 mt-20 bg-gray-100 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-600">
            Become a Member
          </h2>
          <p className="mt-4 text-center text-gray-500">
            Join our community and contribute to our mission!
          </p>
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <button className="px-6 py-3 font-semibold text-white bg-blended-gradient rounded-2xl">
              Join Now
            </button>
          </div>
        </section>

        {/* Ehrenamtliches Engagement */}
        <section id="ehrenamtliches_engagement" className="px-6 py-16 mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-600">
            Volunteer Opportunities
          </h2>
          <p className="mt-4 text-sm text-center text-gray-500">
            Make a difference by volunteering with us.
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Volunteer Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 shadow-lg rounded-2xl bg-main-bg"
              >
                <h3 className="text-lg font-semibold text-gray-600">
                  Volunteer Role {index + 1}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description of the role.
                </p>
                <Link
                  href={`#volunteer`}
                  className="mt-6 inline-block bg-[#ffb400] text-white font-semibold px-4 py-2 rounded-xl hover:bg-blended-gradient"
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              href={`/volunteer_opportunities`}
              className="text-white text-md font-semibold bg-[#ffb400] hover:bg-blended-gradient p-3 rounded-2xl"
            >
              View All Volunteer Opportunities
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
