"use client";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuColumn from "@/components/MenuColumn/MenuColumn";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= 0 || menuOpen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const leftMenuItems = [
    { name: "NEUIGKEITEN", href: "/neuigkeiten", items: [] },
    { name: "VERANSTALTUNGEN", href: "/veranstaltungen", items: [] },
    {
      name: "ÜBER UNS",
      href: "/uber",
      items: [
        { name: "Verein", href: "#verein" },
        { name: "Team", href: "#team" },
        { name: "Geschichte", href: "#geschichte" },
      ],
    },
    {
      name: "ENGAGIEREN",
      href: "/engagieren",
      items: [
        { name: "Stellenausschreibungen", href: "#stellenausschreibungen" },
        { name: "Mitglied Werden", href: "#mitglied-werden" },
        { name: "Ehrenamtliches Engagement", href: "#ehrenamt" },
      ],
    },
    {
      name: "SPENDEN",
      href: "/spenden",
      items: [],
    },
    { name: "DOWNLOADS", href: "/downloads", items: [] },
  ];

  const rightMenuItems = [
    {
      name: "INTEGRATIVE STADTTEILARBEIT",
      href: "/stadtteilarbeit",
      items: [
        { name: "Stadtteilarbeit", href: "#stadtteilarbeit" },
        { name: "Bewerbungstraining", href: "#bewerbungstraining" },
        { name: "Sprachförderung", href: "#sprachförderung" },
      ],
    },
    { name: "LOKAL VERNETZT", href: "/lokal", items: [] },
    {
      name: "DEKOLONIALE BILDUNGSARBEIT",
      href: "/bildungsarbeit",
      items: [
        { name: "Machtbewusst-Hamburg", href: "#machtbewusst" },
        {
          name: "Eine Welt-Promotorinnen Programm",
          href: "/eine_welt_promotorinnen",
        },
        { name: "Dekoloniale Bildungsreisen", href: "#bildungsreisen" },
        { name: "KoRaBi", href: "/korabi" },
      ],
    },
    { name: "ANTI-SCHWARZER RASSISMUS", href: "/rassismus", items: [] },
    {
      name: "DEKOLONIAL GLOBAL",
      href: "/dekoloniale",
      items: [
        { name: "Projekte", href: "/projects" },
        { name: "Partner", href: "/projekt_partners" },
      ],
    },
  ];

  if (!showNav) return null;

  return (
    <nav className="fixed z-50 w-full bg-transparent">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="rounded-md cursor-pointer p-2 text-black"
          >
            {menuOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
          <span className="pt-1 text-2xl font-semibold text-black">Menü</span>
        </div>

        {/* Logo */}
        <div>
          <Link href="/" className="block">
            <Image
              src="/logos/ossara_logo.png"
              alt="Ossara Logo"
              className="object-contain"
              width={160}
              height={160}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fef5db]">
          <div className="mx-auto px-10 py-10">
            <div className="mb-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-6xl font-extrabold uppercase text-[#f7cc55] hover:text-[#e6b845] md:text-7xl lg:text-8xl"
              >
                Ossara
              </Link>
              <button
                type="button"
                onClick={toggleMenu}
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                className="rounded-md cursor-pointer p-2 text-gray-800">
                <XIcon className="h-8 w-8 md:h-10 md:w-10" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Column */}
              <ul className="space-y-4">
                <MenuColumn
                  items={leftMenuItems}
                  activeSubMenu={activeSubMenu}
                  toggleMenu={toggleMenu}
                  toggleSubMenu={toggleSubMenu}
                />
              </ul>

              {/* Right Column */}
              <ul className="space-y-4 md:space-y-6">
                <MenuColumn
                  items={rightMenuItems}
                  activeSubMenu={activeSubMenu}
                  toggleMenu={toggleMenu}
                  toggleSubMenu={toggleSubMenu}
                />
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
