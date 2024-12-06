import { bebasNeue } from "@/app/fonts";

export default function AboutBanner() {
  return (
    <>
      <div className="container mx-auto">
        <header className="text-[#ffb400] py12  text-center py-10">
          <h1
            className={`${bebasNeue.className} text-header font-bold leading-tight drop-shadow-xl uppercase`}
          >
            Über Uns
          </h1>
        </header>
      </div>
    </>
  );
}
