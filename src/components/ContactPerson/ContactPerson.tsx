import Image from "next/image";
import type { ContactPersonProps } from "@/app/lib/interface";

const ContactPerson: React.FC<ContactPersonProps> = ({
  name,
  position,
  email,
  phone,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row">
      {/* Profile Image */}
      <div className="h-32 w-32 shrink-0 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44">
        <Image
          src={imageSrc}
          alt={name}
          width={192}
          height={192}
          quality={100}
          className="h-full w-full rounded-full bg-[#5a8e8e] object-cover shadow-md"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-black lg:text-left">
        <h2 className="mb-2 font-semibold text-base sm:text-lg md:text-xl">
          {name}
        </h2>
        <p className="mb-3 text-xs sm:text-sm md:text-base">{position}</p>
        <p className="text-xs sm:text-sm md:text-base">
          <span className="font-semibold">E-Mail:</span> {email}
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          <span className="font-semibold">Telefon:</span> {phone}
        </p>
      </div>
    </div>
  );
};

export default ContactPerson;
