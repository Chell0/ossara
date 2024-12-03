import Link from "next/link";

export default function DonationQuestions() {
    return(
        <>
            <div className="bg-[#e8f4f6] text-gray-500 py-16 px-6 sm:px-12 lg:px-24 mt-20 rounded-xl shadow-xl">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 uppercase text-[#ffb400]">Häufige fragen zu spenden an Ossara</h2>
                    <p className="text-lg mb-6">
                        Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend über das Spendenformular spenden. Falls es Euch lieber ist, könnt ihr auch die Kontoverbindung verwenden:
                    </p>
                    <div className="p-6 text-center">
                        <p className="font-bold uppercase text-black">Ossara e.V.</p>
                        <p className="text-orange-500 font-semibold">Steuernummer: <span className="font-semibold text-black">17 / 451 / 09817</span></p>
                        <p className="text-orange-500 font-semibold">Spendenkonto: <span className="font-semibold text-black">Hamburger Volksbank</span></p>
                        <p className="text-orange-500 font-semibold">IBAN: <span className="font-semibold text-black">DE68 2019 0003 0006 0538 07</span></p>
                        <p className="text-orange-500 font-semibold">Amtsgericht Hamburg: <span className="font-semibold text-black">VR 23447</span></p>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="font-bold text-black">Kontakt</p>
                        <p className="text-orange-500 font-semibold">Tel.: <Link href="tel:+4915213062798" className="font-semibold text-black hover:underline">(+49) 152 1306 2798</Link></p>
                        <p className="text-orange-500 font-semibold">E-Mail: <Link href="mailto:spenden@eoto-archiv.de" className="font-semibold text-black hover:underline">info@ossara.de</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
