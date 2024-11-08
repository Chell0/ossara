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
          <button className="block focus:outline-none text-orange-600" onClick={toggleMenu}>
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <span className="text-orange-600 text-xl font-bold">Menu</span>
        </div>

        {/* Logo */}
        <div className="hidden md:block">
          <Link href="/">
            <Image src="/logos/ossara-logo.png" alt="Ossara Logo" className="object-contain" width={200} height={200} />
          </Link>
        </div>
      </div>


      {/* Full-Viewport Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blended-gradient text-white z-50 p-6 sm:p-8 overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <h1 className="text-3xl text-white font-bold">Ossara</h1>
            </Link>
          </div>
          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <XIcon className="h-8 w-8 text-gray-900" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row mt-8 md:mt-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Column: Main Menu with Sub-Menus */}
            <ul className="space-y-6 text-white  text-xl md:text-2xl font-bold w-full md:w-1/2 pr-0 md:pr-8">
              {[
                { name: "NEUIGKEITEN", items: [], href: "/neuigkeiten" },
                { name: "VERANSTALTUNGEN", items: [], href: "/veranstaltungen" },
                { name: "ÜBER UNS", items: ["Verein", "Team", "Gechichte"], href: "/uber" },
                { name: "ENGAGIEREN", items: ["Stellenausschreibungen", "Mitglied Werden", "Ehrenamtliches Engagement"], href: "/engagieren" },
                { name: "FÖRDERN & SPENDEN", items: ["Donate", "Partnerships"], href: "/fordern" },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link href={menu.href}
                      className={`cursor-pointer ${activeSubMenu === menu.name ? "text-gray-600" : ""}`}
                      onClick={() => toggleSubMenu(menu.name)}
                    >
                      {menu.name}
                    </Link>
                    {menu.items.length > 0 && (
                      <button onClick={() => toggleSubMenu(menu.name)}>{activeSubMenu === menu.name ? "−" : "+"}</button>
                    )}
                  </div>
                  {activeSubMenu === menu.name && menu.items.length > 0 && (
                    <ul className="pl-4 space-y-1 text-sm sm:text-base text-gray-600">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="cursor-pointer">- {item}</Link>
                          {/* <Link href={`/${menu.name.toLowerCase()}#${item.toLowerCase().replace(/ /g, "-")}`} className="cursor-pointer">- {item}</Link> */}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Column: Sub-Menus */}
            <ul className="space-y-6 text-white text-xl md:text-2xl font-bold w-full md:w-1/2 pl-0 md:pl-8">
              {[
                { name: "INTEGRATIVE STADTTEILARBEIT", items: ["Bewerbungstraining", "Sprachforderung"], href: "/integrative" },
                { name: "LOBBY UND NETZWERKARBEIT", items: [], href: "/lobby" },
                { name: "DEKOLONIALE BILDUNGSARBEIT", items: ["Eine Welt-Promotorinnen Programm", "Machtbewusst-Hamburg"], href: "/bildungsarbeit" },
                { name: "ANTI-SCHWARZER RASSISMUS", items: [], href: "/rassismus" },
                { name: "ENTWICKLUNGSZUSAMMENARBEIT", items: ["Schwerpunkte", "Richtlinien", "Projekte"], href: "/dekoloniale" },
                { name: "DOWNLOADS", items: [], href: "/downloads" },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link href={menu.href}
                      className={`cursor-pointer ${activeSubMenu === menu.name ? "text-gray-600" : ""}`}
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
                    <ul className="pl-4 space-y-1 text-sm sm:text-base text-gray-600">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="cursor-pointer">
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
