import { ContactPersonProps } from "@/app/lib/interface";
import Image from "next/image";

const ContactPerson: React.FC<ContactPersonProps> = ({
  name,
  position,
  email,
  phone,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {/* Profile Image */}
      <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          width={192}
          height={192}
          quality={100}
          className="w-full h-full rounded-full object-cover bg-[#5a8e8e] shadow-md"
        />
      </div>

      {/* Contact Info */}
      <div className="text-black text-center lg:text-left">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base mb-3">{position}</p>
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
