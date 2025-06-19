export default function MemberForm() {
  return (
    <section className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center font-bold text-4xl">
        Beitrittserklärung
      </h2>
      <form className="space-y-6">
        {/* Form Fields */}
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
          {/* Vorname */}
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Vorname
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
        </div>
        {/* Address */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Straße und Hausnummer
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 text-sm">
                PLZ
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 text-sm">
                Ort
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
            </div>
          </div>
        </div>
        {/* Telefon and Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Telefon
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
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
          <p className="mt-2 text-gray-700">
            Der Betrag ist zu Beginn der Mitgliedschaft zu überweisen und dann
            jeweils zum 01.04. eines jeden Jahres fällig.
          </p>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-[#ffb400] px-4 py-2 font-medium text-md text-white transition-colors hover:bg-[#e6a200]"
          >
            Senden
          </button>
        </div>
      </form>
    </section>
  );
}
