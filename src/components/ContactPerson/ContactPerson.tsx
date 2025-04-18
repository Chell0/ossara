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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Profile Image */}
      <div
        className="
          w-24 xs2:w-28 sm:w-32 md:w-36 lg:w-44 xl:w-48 2xl:w-52 3xl:w-96
          h-24 xs2:h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 2xl:h-52 3xl:h-96
          shrink-0
        "
      >
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
        <h2
          className="text-xs xs:text-sm xs2:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
            font-semibold mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5"
        >
          {name}
        </h2>
        <p className="text-[10px] xs:text-xs xs2:text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl mb-2">
          {position}
        </p>
        <p className="text-[10px] xs:text-xs xs2:text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl">
          <span className="font-semibold">E-Mail:</span> {email}
        </p>
        <p className="text-[10px] xs:text-xs xs2:text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl">
          <span className="font-semibold">Telefon:</span> {phone}
        </p>
      </div>
    </div>
  );
};

export default ContactPerson;
