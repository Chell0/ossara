"use client";

import Image from "next/image";
import Link from "next/link";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubMenu(null); // Reset submenu when closing main menu
  };

  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  // Unified menu configuration
  const menuItems = [
    // Left Column
    {
      name: "ÜBER UNS",
      href: "/uber",
      items: [
        { name: "Uber Uns", href: "#uber" },
        { name: "Verein", href: "#verein" },
        { name: "Team", href: "#team" },
        { name: "Geschichte", href: "#geschichte" }, // Fixed typo
      ],
    },

    // Right Column
    {
      name: "INTEGRATIVE STADTTEILARBEIT",
      href: "/integrative",
      items: [
        { name: "Integrative Stadtteilarbeit", href: "#integrative" },
        { name: "Bewerbungstraining", href: "#bewerbungstraining" },
        { name: "Sprachforderung", href: "#sprachforderung" },
      ],
    },
    // Left Column
    {
      name: "VERANSTALTUNGEN",
      href: "/veranstaltungen",
      items: [],
    },
    // Right Column
    {
      name: "LOBBY UND NETZWERKARBEIT",
      href: "/lobby",
      items: [],
    },
    // Left Column
    {
      name: "NEUIGKEITEN",
      href: "/neuigkeiten",
      items: [],
    },

    // Right Column
    {
      name: "DEKOLONIALE BILDUNGSARBEIT",
      href: "/bildungsarbeit",
      items: [
        { name: "Dekoloniale Bildungsarbeit", href: "#bildungsarbeit" },
        { name: "Machtbewusst-Hamburg", href: "#machtbewusst" },
        { name: "Eine Welt-Promotorinnen Programm", href: "#promotorinnen" },
      ],
    },
    // Left Column
    {
      name: "ENGAGIEREN",
      href: "/engagieren",
      items: [
        { name: "Engagieren", href: "#engagieren" },
        { name: "Stellenausschreibungen", href: "#stellenausschreibungen" }, // Fixed typo
        { name: "Mitglied Werden", href: "#mitglied-werden" },
        { name: "Ehrenamtliches Engagement", href: "#ehrenamt" },
      ],
    },
    // Right Column
    {
      name: "ANTI-SCHWARZER RASSISMUS",
      href: "/rassismus",
      items: [],
    },
    // Left Column
    {
      name: "FÖRDERN & SPENDEN",
      href: "/fordern",
      items: [
        { name: "Fördern & Spenden", href: "#fordern" },
        { name: "Donate", href: "#donate" },
      ],
    },
    // Right Column
    {
      name: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
      href: "/dekoloniale",
      items: [
        {
          name: "Dekolonial Global",
          href: "#dekoloniale",
        },
        { name: "Projekte", href: "#projekte" },
      ],
    },
    // Left Column
    { name: "DOWNLOADS", href: "/downloads", items: [] },
  ];

  return (
    <>
      <nav className="bg-main-bg bg-opacity-20 fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu Toggle Button */}
            <div className="flex items-center space-x-2">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <XIcon className="w-8 h-8" />
                ) : (
                  <MenuIcon className="w-8 h-8" />
                )}
              </button>
              <span className="font-medium mt-1 text-2xl text-black">Menu</span>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logos/ossara_logo.png"
                  alt="Ossara Logo"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Screen Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#fef5db] overflow-y-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-10">
                <Link
                  href="/"
                  className="text-5xl font-bold text-[#f7cc55] hover:text-[#e6b845] uppercase"
                >
                  Ossara
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <XIcon className="w-10 h-10" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {menuItems.map((menu, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center">
                      <Link
                        href={menu.items.length > 0 ? "#" : menu.href}
                        className={`text-3xl lg:text-4xl font-bold ${
                          menu.items.length > 0
                            ? "cursor-pointer text-[#f7cc55] hover:text-[#e6b845]"
                            : "text-[#f7cc55] hover:text-[#e6b845]"
                        }`}
                        onClick={(e) => {
                          if (menu.items.length > 0) {
                            e.preventDefault();
                            toggleSubMenu(menu.name);
                          }
                        }}
                      >
                        {menu.name}
                      </Link>
                      {menu.items.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(menu.name)}
                          className="text-[#f7cc55] hover:text-[#e6b845] ml-4 text-3xl w-8 h-8 flex items-center justify-center"
                        >
                          {activeSubMenu === menu.name ? "−" : "+"}
                        </button>
                      )}
                    </div>

                    {activeSubMenu === menu.name && menu.items.length > 0 && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={`${menu.href}${item.href}`}
                              className="text-lg text-[#f7cc55]"
                              onClick={toggleMenu}
                            >
                              - {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
