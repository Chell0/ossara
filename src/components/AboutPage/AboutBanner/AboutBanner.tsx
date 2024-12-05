import { galdeano } from "@/app/fonts";

export default function AboutBanner() {
  return (
    <>
      <div className="container mx-auto">
        <header className="text-[#ffb400] py12  text-center py-10">
          <h1
            className={`${galdeano.className} text-[140px] font-bold leading-tight drop-shadow-xl uppercase`}
          >
            Über Uns
          </h1>
        </header>
      </div>
    </>
  );
}
