import Link from "next/link";

export default function Promo() {
  return (
    <>
      <section className="relative w-full min-h-fit flex justify-center items-center pt-20">
        <div className="flex md:flex-grow flex-row gap-3">
          {/* Left: Image */}
          <div className="basis-1/2 p-4">
            {/* Dekolonisierung */}
            <div
              className={`flex justify-between items-center border border-[#eb7b24] rounded-xl p-4 shadow-sm max-w-md  mx-auto`}
            >
              <p className={`text-base text-black`}>
                Promo Dekolonisierung Flyer
              </p>
              <button className="px-4 py-4 text-md font-semibold rounded-xl shadow-xl bg-[#eb7b24] text-white">
                <Link
                  href={`/files/dekolonisierung.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`flex items-center space-x-2`}
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
              </button>
            </div>
          </div>

          {/* Promotorinnen */}
          <div className="basis-1/2 p-4">
            <div
              className={`flex justify-between items-center border border-[#eb7b24] rounded-xl p-4 shadow-sm max-w-md`}
            >
              <p className={`text-base text-black`}>Flyer HH Promotorinnen</p>
              <button className="px-4 py-4 text-md font-semibold rounded-xl shadow-xl bg-[#eb7b24] text-white">
                <Link
                  href={`/files/dekolonisierung.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`flex items-center space-x-2`}
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
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
