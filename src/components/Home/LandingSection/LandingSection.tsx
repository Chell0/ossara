export default function LandingSection() {
  return (
    <>
      <div className="relative h-screen bg-cover bg-fixed bg-no-repeat bg-center" style={{ backgroundImage: 'url("/bgs/img1.jpg")' }}>
        <div className="absolute inset-0 bg-black/50">
          <div className="relative z-10 flex items-end justify-items-start h-full text-white text-left pl-4 pb-8">
            <h1 className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase">
              <span className="block animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
                GEMEINSAM GEGEN
              </span>
              <span className="block animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
                Loremipsum dolor
              </span>
              <span className="block animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
                Lorem sit
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}