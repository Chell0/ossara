export default function Korabi() {
  return (
    <>
      <div>
        {/* Header Setion */}
        <header
          className="h-screen w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(/images/Bildungsarbeit/OSSARA_Integrative_Stadtarbeit.jpg)",
          }}
        >
          {/* Spacer matching navbar height */}
          <div
            className="
    h-16 xs:h-18 sm:h-20 md:h-22 md2:h-24 
    tab:h-28 tab-xl:h-30 lg:h-32 xl:h-40 
    2xl:h-44 3xl:h-48 land-xs:h-16 land-sm:h-20"
          />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#eb7b24] font-extrabold leading-tight uppercase 
      xs:text-3xl sm:text-5xl md:text-6xl md2:text-7xl tab:text-8xl tab-xl:text-9xl 
      lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] 3xl:text-[13rem] 
      
      /* Horizontal alignment matching navbar */
      xs:ml-3 sm:ml-4 md:ml-6 md2:ml-8 tab:ml-10 tab-xl:ml-12 
      lg:ml-14 xl:ml-16 2xl:ml-18 3xl:ml-20
      
      /* Increased vertical spacing */
      mt-8 xs:mt-10 sm:mt-12 md:mt-14 md2:mt-16 
      tab:mt-20 tab-xl:mt-24 lg:mt-28 xl:mt-32 
      2xl:mt-36 3xl:mt-40
      land-xs:mt-6 land-sm:mt-8
      
      /* Fine-tune positioning */
      transform translate-y-1"
            >
              KoRaBi.
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}
