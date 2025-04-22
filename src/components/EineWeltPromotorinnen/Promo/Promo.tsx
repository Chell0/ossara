import Link from "next/link";

export default function Promo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-10">
      {/* Dekolonisierung */}
      <div className="w-full md:basis-1/2">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-md border border-[#eb7b24] p-4 shadow-sm">
          <p className="text-base md:text-lg text-black">
            Promo Dekolonisierung Flyer
          </p>
          <Link
            href="/files/dekolonisierung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 rounded-md bg-[#eb7b24] px-4 py-2 text-sm md:text-base font-semibold text-white shadow-xl transition-colors hover:bg-[#d96e1f]"
          >
            <DownloadIcon />
            <span className="hidden sm:inline">Download Now</span>
          </Link>
        </div>
      </div>

      {/* Promotorinnen */}
      <div className="w-full md:basis-1/2">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-md border border-[#eb7b24] p-4 shadow-sm">
          <p className="text-base md:text-lg text-black">
            Flyer HH Promotorinnen
          </p>
          <Link
            href="/files/dekolonisierung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 rounded-md bg-[#eb7b24] px-4 py-2 text-sm md:text-base font-semibold text-white shadow-xl transition-colors hover:bg-[#d96e1f]"
          >
            <DownloadIcon />
            <span className="hidden sm:inline">Download Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>
  );
}
