import Image from 'next/image';
import {PersonCardProps} from "@/app/lib/interface";
import Link from "next/link";


export default function PersonCard({name, role, description, imageSrc}: PersonCardProps) {
    return (
        <div
            className="flex flex-col items-center max-w-xs p-6 mx-auto text-center bg-white shadow-lg rounded-xl shadow-gray-300">
            {/* Profile Image */}
            <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
                <Image src={imageSrc} alt={`${name} photo`} width={96} height={96} className="object-cover"/>
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

            {/* Role */}
            <p className="mb-4 text-xs tracking-wider text-gray-500 uppercase">{role}</p>

            {/* Description */}
            <p className="mb-6 text-sm text-gray-600">{description}</p>

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
};