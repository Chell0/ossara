import Link from "next/link";

export default function Engagieren() {
  return (
    <>
      <div>
        {/* Page Header */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            id="engagieren"
            className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center md:items-start md:justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl font-extrabold uppercase p-4 ml-0 mt-20 md:ml-10 md:mt-28 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
            >
              Engagieren.
            </h1>
          </div>
        </header>

        {/* Stellenausschreibungen */}
        <section className="relative h-screen w-full">
          <div
            id="stellenausschreibungen"
            className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8"
          >
            <h2 className="text-8xl font-semibold text-center text-[#fcc41b]">
              Job Openings
            </h2>
            <p className="mt-3 text-lg text-center text-gray-800">
              Join our team and help us make a difference!
            </p>
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Job Cards */}
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="p-6 border shadow-lg border-gray-200 rounded-lg bg-white"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Job Title {index + 1}
                  </h3>
                  <p className="mt-2 mb-3 text-base text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium aspernatur commodi cum cupiditate, dolore id in
                    libero maxime nostrum perferendis qui rem sunt vitae!
                    Aperiam autem ducimus est id sit?
                  </p>
                  <Link
                    href={`#apply`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Learn More & Apply"
                    className="px-6 py-2 text-md font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                  >
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mitglied Werden */}
        <section
          className="h-screen w-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            id="mitglied-werden"
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center pl-10 gap-8"
          >
            <h2 className="text-[#fcc41b] drop-shadow-md text-6xl xl:text-[6rem] font-extrabold leading-tight uppercase">
              Become a Member
            </h2>
            <p className="text-2xl text-white max-w-xl">
              Join our community and contribute to our mission!
            </p>
            <Link
              href="/member"
              rel="noopener noreferrer"
              aria-label="Become A Member"
              className="px-8 py-4 text-xl font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
            >
              Join Now
            </Link>
          </div>
        </section>

        {/* Ehrenamtliches Engagement */}
        <section className="relative h-screen w-full">
          <div
            id="ehrenamt"
            className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8"
          >
            <h2 className="text-8xl font-semibold text-center text-[#fcc41b]">
              Volunteer Opportunities
            </h2>
            <p className="mt-3 text-lg text-center text-gray-800">
              Make a difference by volunteering with us.
            </p>
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Volunteer Cards */}
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="p-6 border shadow-lg border-gray-200 rounded-lg bg-white"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Volunteer Role {index + 1}
                  </h3>
                  <p className="mt-2 mb-3 text-base text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium aspernatur commodi cum cupiditate, dolore id in
                    libero maxime nostrum perferendis qui rem sunt vitae!
                    Aperiam autem ducimus est id sit?
                  </p>
                  <Link
                    href={`#volunteer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sign Up"
                    className="px-6 py-2 text-md font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
