import { AboutRowProps } from "@/app/lib/interface";
import Image from "next/image";


export default function AboutRow({ title, text, imageUrl, reverse = false, id }: AboutRowProps) {
  return (
    <>
      <div id={id} className={`flex flex-col md:flex-row items-center gap-10 py-20 ${ reverse ? 'md:flex-row-reverse' : '' }`}>
        <div className="w-full md:w-1/2 flex-shrink-0">
        <Image src={imageUrl} alt="About Photo" width={200} height={200} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-4 text-gray-700 text-md">{text}</p>
        </div>
      </div>
    </>
  )
}
