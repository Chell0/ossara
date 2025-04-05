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
    <div
      className="flex flex-col tab:flex-row items-center 
        gap-4 xs:gap-5 sm:gap-6 md:gap-7 md2:gap-8 tab:gap-10 tab-xl:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20"
    >
      {/* Profile Image */}
      <div
        className="w-24 xs:w-28 sm:w-32 md:w-36 md2:w-40 tab:w-44 tab-xl:w-48 lg:w-52 xl:w-56 2xl:w-64 
          h-24 xs:h-28 sm:h-32 md:h-36 md2:h-40 tab:h-44 tab-xl:h-48 lg:h-52 xl:h-56 2xl:h-64 
          shrink-0"
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

      {/* Contact Information */}
      <div className="text-black text-center tab:text-left">
        <h2
          className="text-[16px] xs:text-lg sm:text-xl md:text-2xl md2:text-2xl tab:text-3xl tab-xl:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
            font-semibold 
            mb-1 xs:mb-2 sm:mb-3 md:mb-4 md2:mb-5 tab:mb-6"
        >
          {name}
        </h2>
        <p
          className="text-[12px] xs:text-sm sm:text-base md:text-lg md2:text-lg tab:text-xl tab-xl:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
            mb-1 xs:mb-1.5 sm:mb-2 md:mb-2.5 md2:mb-3 tab:mb-4"
        >
          {position}
        </p>
        <p className="text-[10px] xs:text-[12px] sm:text-sm md:text-base md2:text-base tab:text-lg tab-xl:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          <span className="font-semibold">E-Mail:</span> {email}
        </p>
        <p className="text-[10px] xs:text-[12px] sm:text-sm md:text-base md2:text-base tab:text-lg tab-xl:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          <span className="font-semibold">Telefon:</span> {phone}
        </p>
      </div>
    </div>
  );
};

export default ContactPerson;
