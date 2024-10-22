"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  interface linkType {
    title: string;
    link: string;
  }

  const myLinks: linkType[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Formulário",
      link: `/form/step_1`,
    },
  ];

  return (
    <header className="fixed top-0 z-20 flex h-12 w-screen flex-row items-center justify-between bg-blue-100 px-5">
      <div className="size-10 rounded-full bg-gray-800 text-xs flex justify-center items-center text-white">LOGO</div>
      <nav className="flex flex-row gap-4">
        {myLinks.map((ref, index) => (
          <Link
            href={ref.link}
            key={index}
            className={clsx(
              "font-medium text-black transition-colors",
              { "text-blue-600 hover:text-blue-300": pathname === ref.link },
              { "hover:text-black/60": pathname !== ref.link },
            )}
          >
            {ref.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
