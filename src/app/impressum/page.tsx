import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar/>
        <header
          className="relative h-screen w-full bg-center bg-cover p-10"
          style={{backgroundImage: "url(/bgs/img1.jpg)"}}
        >
          <div
            className={`absolute inset-0 top-0 right-0 left-0 flex items-start justify-start bg-black bg-opacity-70`}
          >
            <h1
              className={`mt-20 ml-10 p-6 font-extrabold text-[#ffb400] text-[8rem] uppercase leading-tight drop-shadow-xl`}
            >
              Impressum.
            </h1>
          </div>
        </header>
        <div className="mx-5 mt-10 p-10">
          <div>
            <h4 className="font-semibold text-2xl text-[#ffb400]">Gemäß §5
              TMG:</h4>
            <p className="text-gray-800 text-sm">
              Dieses Impressum gilt für die Website MachtBewusst-Hamburg.de
              sowie für die
              Onlinepräsenzen von Ossara auf YouTube, Facebook und Instagram.
            </p>
          </div>
          <div className="mt-5">
            <h4
              className="font-semibold text-2xl text-[#ffb400]">Herausgeberin:</h4>
            <p className="text-gray-800 text-sm">Ossara e.V.</p>
            <p className="text-gray-800 text-sm">Papenreye 65</p>
            <p className="text-gray-800 text-sm">22453 Hamburg</p>
            <p className="text-gray-800 text-sm">E-Mail: info[at]ossara.de</p>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold text-2xl text-[#ffb400]">Vertreten
              durch:</h4>
            <p className="text-gray-800 text-sm">Nicolas A. S. Moumouni</p>
            <p className="text-gray-800 text-sm">Vorstandsvorsitzender</p>
            <p className="text-gray-800 text-sm">Tel.: +49 15213062798</p>
            <p className="text-gray-800 text-sm">E-Mail:
              vorstand[at]ossara.de</p>
          </div>
          <div className="mt-5">
            <h4
              className="font-semibold text-2xl text-[#ffb400]">Vereinsregister:</h4>
            <p className="text-gray-800 text-sm">
              Ossara ist gemeinnützig anerkannt und Spenden an uns sind
              steuerlich absetzbar.
            </p>
            <p className="text-gray-800 text-sm">Registergericht: Amtsgericht
              Hamburg</p>
            <p className="text-gray-800 text-sm">Registernummer: VR 23447</p>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold text-2xl text-[#ffb400]">
              Verantwortlich für den redaktionellen Inhalt:
            </h4>
            <p className="text-gray-800 text-sm">Julia Karimi -
              info[at]ossara.de</p>
            <p className="text-gray-800 text-sm">Sonia Octavio -
              sonia.octavio[at]ossara.de</p>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold text-2xl text-[#ffb400]">Haftung für
              Inhalte</h4>
            <p className="text-gray-800 text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold text-2xl text-[#ffb400]">Haftung für
              Links</h4>
            <p className="text-gray-800 text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend
              entfernen.
            </p>
          </div>
          <div className="mt-5">
            <h4
              className="font-semibold text-2xl text-[#ffb400]">Urheberrecht</h4>
            <p className="text-gray-800 text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet. Soweit
              die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
