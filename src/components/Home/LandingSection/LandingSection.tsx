import Image from "next/image";

export default function LandingSection() {
  return (
    <section className={`w-full`}>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/bgs/img1.jpg"
            width={5472}
            height={3648}
            alt="Hero Image"
            className="h-auto w-full object-contain"
          />
        </div>
        <div
          className="relative z-10 flex items-end justify-end pb-8 pl-4 text-left text-white">
          <h1
            className="font-bold text-4xl uppercase leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span
              className="block animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
              GEMEINSAM GEGEN
            </span>
            <span
              className="block animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
              Loremipsum dolor
            </span>
            <span
              className="block animate-[slideUp_0.8s_ease-out_0.6s_forwards]">Lorem sit</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
