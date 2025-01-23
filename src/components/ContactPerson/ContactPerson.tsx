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
    <div className="flex items-center space-x-6 mx-auto p-6">
      {/* Profile Image */}
      <div className="w-48 h-48 md:w-52 md:h-52">
        <Image
          src={imageSrc}
          alt={name}
          width={208} // 52 x 4 (Tailwind's md:52)
          height={208}
          className="w-full h-full rounded-full object-cover bg-[#5a8e8e] shadow-lg"
        />
      </div>

      {/* Contact Information */}
      <div className="text-left">
        <h2 className="text-3xl font-bold text-[#5a8e8e] mb-2">{name}</h2>
        <p className="text-[#5a8e8e] text-xl">{position}</p>
        <p className="text-[#5a8e8e] text-xl">
          <span className="text-xl">E-Mail:</span> {email}
        </p>
        <p className="text-[#5a8e8e] text-xl">
          <span>Telephone:</span> {phone}
        </p>
      </div>
    </div>
  );
};

export default ContactPerson;
