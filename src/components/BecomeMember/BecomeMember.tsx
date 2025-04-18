import MemberForm from "@/components/BecomeMember/MemberForm/MemberForm";

export default function BecomeMember() {
  return (
    <>
      <div>
        {/* Membership form */}
        <section
          id="ehrenamtliches_engagement"
          className="relative h-screen w-full"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <MemberForm />
          </div>
        </section>
      </div>
    </>
  );
}
