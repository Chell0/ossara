import { acme } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        <h1
          className={`${acme.className} drop-shadow-xl text-[#ffb400] text-header py-2 px-4 font-semibold text-center leading-tight uppercase`}
        >
          Impressum
        </h1>
        <div className="p-10 mx-5 mt-20">
          <div>
            <h2 className="text-xl font-semibold text-orange-600">
              Gemäß §5 TMG:
            </h2>
            <p className="text-sm text-gray-800">
              Dieses Impressum gilt für die Website MachtBewusst-Hamburg.de
              sowie für die Onlinepräsenzen von Ossara auf YouTube, Facebook und
              Instagram.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Herausgeberin:
            </h2>
            <p className="text-sm text-gray-800">Ossara e.V.</p>
            <p className="text-sm text-gray-800">Papenreye 65</p>
            <p className="text-sm text-gray-800">22453 Hamburg</p>
            <p className="text-sm text-gray-800">E-Mail: info[at]ossara.de</p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Vertreten durch:
            </h2>
            <p className="text-sm text-gray-800">Nicolas A. S. Moumouni</p>
            <p className="text-sm text-gray-800">Vorstandsvorsitzender</p>
            <p className="text-sm text-gray-800">Tel.: +49 15213062798</p>
            <p className="text-sm text-gray-800">
              E-Mail: vorstand[at]ossara.de
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Vereinsregister:
            </h2>
            <p className="text-sm text-gray-800">
              Ossara ist gemeinnützig anerkannt und Spenden an uns sind
              steuerlich absetzbar.
            </p>
            <p className="text-sm text-gray-800">
              Registergericht: Amtsgericht Hamburg
            </p>
            <p className="text-sm text-gray-800">Registernummer: VR 23447</p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Verantwortlich für den redaktionellen Inhalt:
            </h2>
            <p className="text-sm text-gray-800">
              Julia Karimi - info[at]ossara.de
            </p>
            <p className="text-sm text-gray-800">
              Sonia Octavio - sonia.octavio[at]ossara.de
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Haftung für Inhalte
            </h2>
            <p className="text-sm text-gray-800">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Haftung für Links
            </h2>
            <p className="text-sm text-gray-800">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-orange-600">
              Urheberrecht
            </h2>
            <p className="text-sm text-gray-800">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
