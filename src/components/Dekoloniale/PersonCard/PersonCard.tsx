import Image from 'next/image';
import { PersonCardProps } from "@/app/lib/interface";



export default function PersonCard({ name, role, description, imageSrc }: PersonCardProps){
    return (
        <div className="bg-white rounded-xl shadow-gray-300 shadow-lg flex flex-col items-center p-6 text-center max-w-xs mx-auto">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src={imageSrc} alt={`${name} photo`} width={96} height={96} className="object-cover" />
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

            {/* Role */}
            <p className="text-gray-500 uppercase text-xs tracking-wider mb-4">{role}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">{description}</p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-gray-400">
                <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
};