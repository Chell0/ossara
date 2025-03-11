import Image from "next/image";

import { ContactPersonProps } from "@/app/lib/interface";

const ContactPerson: React.FC<ContactPersonProps> = ({
  name,
  position,
  email,
  phone,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
      {/* Profile Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          width={192}
          height={192}
          className="w-full h-full rounded-full object-cover bg-[#5a8e8e] shadow-md"
        />
      </div>

      {/* Contact Information */}
      <div className="text-black text-center sm:text-left">
        <h2 className="text2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          {name}
        </h2>
        <p className="text-xl">{position}</p>
        <p className="text-lg">
          <span className="font-semibold">E-Mail:</span> {email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Telefon:</span> {phone}
        </p>
      </div>
    </div>
  );
};
export default ContactPerson;
