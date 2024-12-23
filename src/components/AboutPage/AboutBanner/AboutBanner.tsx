import { bebasNeue } from "@/app/fonts";

export default function AboutBanner() {
  return (
    <>
      <div className="container mx-auto">
        <header className="py-10 text-center">
          <h1
            className={`${bebasNeue.className} text-[#ffb400] text-8xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-xl uppercase`}
          >
            Über Uns
          </h1>
        </header>
      </div>
    </>
  );
}
