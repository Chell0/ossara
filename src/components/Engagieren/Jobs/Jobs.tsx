import { bebasNeue } from "@/app/fonts";
import Link from "next/link";

export default function Jobs() {
  return (
    <>
      <div className="min-h-screen">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl sm:text-6xl md:text-7xl lg:text-8xl font-bold`}
          >
            All Vacancies
          </h1>
        </header>
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-3xl shadow-lg bg-main-bg"
              >
                <h3 className="text-2xl font-semibold text-gray-600">
                  Job Title {index + 1}
                </h3>
                <p className="mt-2 text-gray-800 text-base">
                  Short description of the job role.
                </p>
                <button className="mt-6 inline-block bg-[#ffb400] font-semibold text-lg text-white px-6 py-2 rounded-xl hover:bg-blended-gradient">
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
        </section>
      </div>
    </>
  );
}
