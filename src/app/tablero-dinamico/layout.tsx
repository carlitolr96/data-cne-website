"use client";

import SideBarNav from "@/components/tablero-dinamico/SideBarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideBarNav />
      <main className="p-7 flex-1">{children}</main>
    </div>
  );
}
