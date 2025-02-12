import Image from "next/image";

import { ContactPersonProps } from "@/app/lib/interface";
import PhoneIcon from "@heroicons/react/solid/PhoneIcon";

const ContactPerson: React.FC<ContactPersonProps> = ({
  name,
  position,
  email,
  phone,
  imageSrc,
}) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden mx-4 transition-transform duration-300 hover:transform hover:scale-105">
      {/* Image Container */}
      <div className="w-full h-64 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-lg text-gray-800 mt-1">{position}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-[#fcc41b] mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a
              href={`mailto:${email}`}
              className="text-gray-800 hover:text-gray-950 transition-colors"
            >
              {email}
            </a>
          </div>

          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 text-[#fcc41b] mr-2" />
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="text-gray-800 hover:text-gray-950 transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPerson;
