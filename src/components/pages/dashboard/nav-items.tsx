"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Página One",
      icon: Newspaper,
      path: "/dashboard/pagina-one",
    },
    {
      label: "Página Two",
      icon: SquareUser,
      path: "/dashboard/pagina-two",
    },
    {
      label: "Página Three",
      icon: SquareUser,
      path: "/dashboard/pagina-three",
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
