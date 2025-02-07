"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

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
    <>
      <nav className="bg-opacity-70 fixed w-full z-50">
        <div className="flex justify-between items-center mx-10 mt-3">
          {/* Menu Icon */}
          <div className="flex items-center space-x-4 -mt-6">
            <button
              className="block focus:outline-none text-[#58bc90]"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <XIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8" />
              )}
            </button>
            <span className="font-medium text-2xl text-white">Menu</span>
          </div>

          {/* Logo */}
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/logos/ossara_logo.png"
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
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fef5db] text-[#f7cc55] sm:p-8">
            {/* Logo */}
            <div className="flex justify-start">
              <Link href="/">
                <h1 className={` text-6xl font-bold drop-shadow-sm uppercase `}>
                  Ossara
                </h1>
              </Link>
            </div>
            {/* Close Icon */}
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <XIcon className="w-10 h-10" />
              </button>
            </div>

            <div className="flex flex-col mt-8 md:flex-row md:mt-10 space-y-8 md:space-y-0 md:space-x-8">
              {/* Left Column: Main Menu with Sub-Menus */}
              <ul
                className={` w-full pr-0 text-4xl font-bold space-y-6 md:w-1/2 md:pr-8`}
              >
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
                  { name: "DOWNLOADS", items: [], href: "/downloads" },
                ].map((menu, index) => (
                  <li key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={menu.href}
                        className={`cursor-pointer ${
                          activeSubMenu === menu.name ? "text-[#f7cc55]" : ""
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
                      <ul className="pl-4 font-medium text-base space-y-1">
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
              <ul
                className={` w-full pl-0 text-4xl font-bold space-y-6 md:w-1/2 md:pl-8`}
              >
                {[
                  {
                    name: "INTEGRATIVE STADTTEILARBEIT",
                    items: ["Bewerbungstraining", "Sprachforderung"],
                    href: "/integrative",
                  },
                  {
                    name: "LOBBY UND NETZWERKARBEIT",
                    items: [],
                    href: "/lobby",
                  },
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
                ].map((menu, index) => (
                  <li key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={menu.href}
                        className={`cursor-pointer ${
                          activeSubMenu === menu.name ? "text-[#f7cc55]" : ""
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
                      <ul className="pl-4 font-medium text-base space-y-1">
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
    </>
  );
}
