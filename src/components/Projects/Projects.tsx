export default function Projects() {
  return (
    <>
      <div className="mx-auto">
        <header
          className="h-screen w-full bg-cover bg-center relative mb-10 p-10"
          style={{ backgroundImage: "url('/bgs/img1.jpg')" }}
        >
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start`}
          >
            <h1
              className={`text-[#d3103e] text-[8rem] font-extrabold leading-tight drop-shadow-xl uppercase p-6 ml-10 mt-20`}
            >
              Unsere.
              <br />
              Projekts.
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}
