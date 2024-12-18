import Image from "next/image";
import Link from "next/link";

export default function PersonCard() {
  return (
    <div className="flex flex-col items-center max-w-xs p-6 mx-auto text-center bg-gray-100 shadow-lg rounded-xl">
      {/* Profile Image */}
      <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
        <Image
          src={`/team/img1.jpg`}
          alt={` Manager photo`}
          width={150}
          height={150}
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-semibold text-[#ffb400]">Carol Kent</h2>

      {/* Role */}
      <p className="mt-2 text-md font-semibold tracking-wider text-blue-600">
        Projektkoordinator
      </p>

      {/* Description */}
      <p className="mt-2 mb-6 text-base text-gray-800">
        Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.Aenean
        tortor est, vulputate quis leo in, vehicula rhoncus lacusAenean tortor
        est, vulputate quis leo in, vehicula rhoncus lacus..
      </p>

      {/* Social Icons */}
      <div className="flex text-orange-600 space-x-4">
        <Link href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
}
