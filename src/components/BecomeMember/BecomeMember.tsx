import MemberForm from "@/components/BecomeMember/MemberForm/MemberForm";

export default function BecomeMember() {
  return (
    <>
      <div>
        {/* Page Header */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase p-6 ml-10 mt-20`}
            >
              Become.
              <br /> Member.
              <br /> Today.
            </h1>
          </div>
        </header>

        {/* Membership form */}
        <section
          id="ehrenamtliches_engagement"
          className="relative h-screen w-full"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
            <MemberForm />
          </div>
        </section>
      </div>
    </>
  );
}
