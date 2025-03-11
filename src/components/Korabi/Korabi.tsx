export default function Korabi() {
  return (
    <>
      <div>
        {/* Header Setion */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4"
          style={{ backgroundImage: "url(/bgs/img-29.jpg)" }}
        >
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#eb7b24] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              KoRaBi.
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}
