import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <section className="px-1 mt-20 bg-white min-h-fit">
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-4">
          <div className="flex items-center justify-center p-2 font-semibold text-smokyBlack text-base">
            <p>Gefördert durch: ENGAGEMENT GLOBAL</p>
          </div>
          <div className="flex items-center justify-center p-2 font-semibold text-smokyBlack text-base">
            <p>mit Mitteln des</p>
          </div>

          {/* Logo 1 */}
          <div className="relative flex items-center justify-center w-full h-[15vh] text-center">
            <Image
              src="/logos/image-1.png"
              alt="Sponsor Logo"
              width={120}
              height={120}
              quality={100}
              className="object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="relative flex items-center justify-center w-full h-[15vh] text-center">
            <Image
              src="/logos/image-2.jpeg"
              alt="Sponsor Logo"
              width={120}
              height={120}
              quality={100}
              className="object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="relative flex items-center justify-center w-full h-[15vh] text-center">
            <Image
              src="/logos/image-3.jpg"
              alt="Sponsor Logo"
              width={120}
              height={120}
              quality={100}
              className="object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="relative flex items-center justify-center w-full h-[15vh] text-center">
            <Image
              src="/logos/image-4.jpg"
              alt="Sponsor Logo"
              width={120}
              height={120}
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
