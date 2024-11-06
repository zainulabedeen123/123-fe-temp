import * as React from "react";
import { Menu, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  currentView: string;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ currentView, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-800 bg-[#2d363d] px-6">
      <Button
        variant="ghost"
        size="icon"
        className="mr-4 text-gray-400"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-xl font-semibold text-gray-400">{currentView === "dashboard" ? "My Dashboard" : "Competitors"}</h1>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search..." className="w-64 bg-[#3a4249] pl-8 text-gray-400 placeholder:text-gray-500" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-400">
              EN
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
