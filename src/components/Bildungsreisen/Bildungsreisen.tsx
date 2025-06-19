export default function Bildungsreisen() {
  return (
    <>
      <div>
        {/* Header Setion */}
        <header
          className="relative h-screen w-full bg-center bg-cover p-4"
          style={{ backgroundImage: "url(/bgs/img-46.jpg)" }}
        >
          <div className="absolute inset-0 top-0 right-0 left-0 flex items-start justify-start">
            <h1 className="mt-2 p-2 font-extrabold text-5xl text-[#eb7b24] uppercase leading-tight sm:mt-4 sm:p-4 sm:text-6xl md:mt-6 md:p-6 md:text-7xl lg:mt-8 lg:p-8 lg:text-8xl xl:text-9xl">
              Dekoloniale.
              <br />
              Bildungsreisen.
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}
