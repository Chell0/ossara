export default function MemberForm() {
  return (
    <section className="bg-white p-6 max-w-4xl mx-auto shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6">
        Beitrittserklärung
      </h2>
      <form className="space-y-6">
        {/* Form Fields */}
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          {/* Vorname */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vorname
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        {/* Address */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Straße und Hausnummer
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PLZ
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ort
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
        {/* Telefon and Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefon
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        {/* Membership Agreement */}
        <div className="mt-6">
          <p className="font-bold">
            Mit meinem Beitritt als Mitglied erkläre ich mich bereit, _________{" "}
            <span className="text-yellow-500">(mindestens 40,-€)</span> als{" "}
            <span className="text-yellow-500">Jahresbeitrag</span> zu zahlen.
          </p>
          <p className="text-gray-700 mt-2">
            Der Betrag ist zu Beginn der Mitgliedschaft zu überweisen und dann
            jeweils zum 01.04. eines jeden Jahres fällig.
          </p>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full text-white text-md font-medium py-2 px-4 rounded-md bg-[#ffb400] hover:bg-[#e6a200] transition-colors"
          >
            Senden
          </button>
        </div>
      </form>
    </section>
  );
}
