"use client"

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }


  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Menu Icon */}
        <div className="flex items-center space-x-2">
          <button className="block focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <span className="text-lg font-semibold">Menu</span>
        </div>

        {/* Logo */}
        <div className="hidden md:block">
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <Image src="/logos/ossara-logo.png" alt="Ossara Logo" className="object-contain" width={200} height={200} />
          </Link>
        </div>
      </div>


      {/* Full-Viewport Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-teal-900 text-gray-200 z-50 p-6 sm:p-8 overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-start">
	          <Link href="/" target="_blank" rel="noopener noreferrer">
              <h1 className="text-3xl text-orange-500 font-semibold">Ossara</h1>
					  </Link>
          </div>
          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <XIcon className="h-8 w-8 text-orange-400" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row mt-8 md:mt-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Column: Main Menu with Sub-Menus */}
            <ul className="space-y-6 text-xl md:text-2xl font-bold w-full md:w-1/2 pr-0 md:pr-8">
              {[
                { name: "NEWS", items: ["Neuigkeiten", "Archiv"], href: "/news" },
                { name: "VERANSTALTUNGEN", items: [], href: "/veranstaltungen" },
                { name: "ÜBER UNS", items: ["Verein", "Team", "Gechichte"], href: "/uber" },
                { name: "ENGAGIEREN", items: ["Stellenausschreibungen", "Mitglied Werden", "Ehrenamtliches Engagement"], href: "/engagieren" },
                { name: "FÖRDERN & SPENDEN", items: ["Donate", "Partnerships"], href: "/fordern" },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link href={menu.href}
                      className={`cursor-pointer ${activeSubMenu === menu.name ? "text-orange-400" : ""}`}
                      onClick={() => toggleSubMenu(menu.name)}
                    >
                      {menu.name}
                    </Link>
                    {menu.items.length > 0 && (
                      <button onClick={() => toggleSubMenu(menu.name)}>{activeSubMenu === menu.name ? "−" : "+"}</button>
                    )}
                  </div>
                  {activeSubMenu === menu.name && menu.items.length > 0 && (
                    <ul className="pl-4 space-y-1 text-sm sm:text-base text-gray-300">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="cursor-pointer">- {item}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Column: Sub-Menus */}
            <ul className="space-y-6 text-xl md:text-2xl font-bold w-full md:w-1/2 pl-0 md:pl-8">
              {[
                { name: "INTEGRATIVE STADTTEILARBEIT", items: ["Ansprechpartner", "Bewerbungstraining", "Sprachforderung"], href: "/integrative" },
                { name: "LOBBY UND NETZWERKARBEIT", items: ["Ansprechpartner", "Netz:Werkstatt"], href: "/lobby" },
                { name: "DEKOLONIALE BILDUNGSARBEIT", items: ["Ansprechpartner", "Eine Welt-Promotorinnen Programm", "Dekoloniale Offentlichkeitsarbeit", "Machtbewusst-Hamburg"], href: "/bildungsarbeit" },
                { name: "ANTI-SCHWARZER RASSISMUS", items: ["Ansprechpartner", "Re_Member"], href: "/rassismus" },
                { name: "ENTWICKLUNGSZUSAMMENARBEIT", items: ["Ansprechpartner", "Schwerpunkte", "Richtlinien", "Projekte", "Archiv"], href: "/dekoloniale" },
                { name: "FAQ", items: [], href: "/faq" },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link href={menu.href}
                      className={`cursor-pointer ${activeSubMenu === menu.name ? "text-orange-400" : ""}`}
                      onClick={() => toggleSubMenu(menu.name)}
                    >
                      {menu.name}
                    </Link>
                    {menu.items.length > 0 && (
                      <button onClick={() => toggleSubMenu(menu.name)}>
                        {activeSubMenu === menu.name ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  {activeSubMenu === menu.name && menu.items.length > 0 && (
                    <ul className="pl-4 space-y-1 text-sm sm:text-base text-gray-300">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`}>
                            - {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                )}
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
