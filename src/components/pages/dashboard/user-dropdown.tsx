import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Dione Pereira</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <Link passHref href="#">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações user
          </DropdownMenuItem>
        </Link>
        <Link passHref href="#">
          <DropdownMenuItem className="gap-2 text-red-500">
            <LogOut size={16} />
            Sair
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
