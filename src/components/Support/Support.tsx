import Link from "next/link";

export default function Support() {
    return(
        <>
            <div className="bg-main-bg text-center py-12 px-6 shadow-xl rounded-xl">
                <h2 className="text-[#ffb400] font-bold text-2xl md:text-3xl lg:text-4xl">
                    UNTERSTÜTZE UNS UND WERDE SUPPORTER*IN
                </h2>
                <div className="mt-6">
                    <Link href="/fordern" className="bg-[#ffb400] text-white font-bold py-3 px-6 rounded-2xl shadow-xl transition-all duration-200 hover:bg-blended-gradient">
                        FÖRDERN & SPENDEN
                    </Link>
                </div>
            </div>
        </>
    );
}
