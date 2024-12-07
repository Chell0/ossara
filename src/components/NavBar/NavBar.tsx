"use client";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  return (
    <nav className="w-full">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Menu Icon */}
        <div className="flex items-center space-x-2">
          <button
            className="block text-orange-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
          <span className="text-xl font-bold text-orange-600">Menu</span>
        </div>

        {/* Logo */}
        <div className="hidden md:block">
          <Link href="/">
            <Image
              src="/logos/ossara-logo.png"
              alt="Ossara Logo"
              className="object-contain"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>

      {/* Full-Viewport Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 p-6 overflow-y-auto bg-main-bg sm:p-8">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <h1 className="text-3xl font-bold text-orange-600">Ossara</h1>
            </Link>
          </div>
          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <XIcon className="w-8 h-8 text-orange-700" />
            </button>
          </div>

          <div className="flex flex-col mt-8 md:flex-row md:mt-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Column: Main Menu with Sub-Menus */}
            <ul className="w-full pr-0 text-xl font-bold text-orange-600 space-y-6 md:text-2xl md:w-1/2 md:pr-8">
              {[
                { name: "NEUIGKEITEN", items: [], href: "/neuigkeiten" },
                {
                  name: "VERANSTALTUNGEN",
                  items: [],
                  href: "/veranstaltungen",
                },
                {
                  name: "ÜBER UNS",
                  items: ["Verein", "Team", "Gechichte"],
                  href: "/uber",
                },
                {
                  name: "ENGAGIEREN",
                  items: [
                    "Stellenausschreibungen",
                    `Mitglied Werden`,
                    "Ehrenamtliches Engagement",
                  ],
                  href: "/engagieren",
                },
                {
                  name: "FÖRDERN & SPENDEN",
                  items: ["Donate", "Partnerships"],
                  href: "/fordern",
                },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={menu.href}
                      className={`cursor-pointer ${
                        activeSubMenu === menu.name ? "text-gray-600" : ""
                      }`}
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
                    <ul className="pl-4 text-sm text-gray-600 space-y-1 sm:text-base">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="cursor-pointer"
                          >
                            - {item}
                          </Link>
                          {/* <Link href={`/${menu.name.toLowerCase()}#${item.toLowerCase().replace(/ /g, "-")}`} className="cursor-pointer">- {item}</Link> */}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Column: Sub-Menus */}
            <ul className="w-full pl-0 text-xl font-bold text-orange-600 space-y-6 md:text-2xl md:w-1/2 md:pl-8">
              {[
                {
                  name: "INTEGRATIVE STADTTEILARBEIT",
                  items: ["Bewerbungstraining", "Sprachforderung"],
                  href: "/integrative",
                },
                { name: "LOBBY UND NETZWERKARBEIT", items: [], href: "/lobby" },
                {
                  name: "DEKOLONIALE BILDUNGSARBEIT",
                  items: [
                    "Eine Welt-Promotorinnen Programm",
                    "Machtbewusst-Hamburg",
                  ],
                  href: "/bildungsarbeit",
                },
                {
                  name: "ANTI-SCHWARZER RASSISMUS",
                  items: [],
                  href: "/rassismus",
                },
                {
                  name: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
                  items: ["Projekte"],
                  href: "/dekoloniale",
                },
                { name: "DOWNLOADS", items: [], href: "/downloads" },
              ].map((menu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={menu.href}
                      className={`cursor-pointer ${
                        activeSubMenu === menu.name ? "text-gray-600" : ""
                      }`}
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
                    <ul className="pl-4 text-sm text-gray-600 space-y-1 sm:text-base">
                      {menu.items.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="cursor-pointer"
                          >
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
