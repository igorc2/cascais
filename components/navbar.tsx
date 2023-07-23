import { Menu } from "lucide-react";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex-1"></div>
    </div>
  );
}
