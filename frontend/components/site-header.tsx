"use client";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [locationText, setLocationText] = useState('')

  useEffect(() => {
    if (pathname === '/dashboard') {
      setLocationText('Dashboard')
    }
    if (pathname === '/transactions') {
      setLocationText('Transaction Ledger')
    }
    if (pathname === '/alumni') {
      setLocationText('Alumni Archives')
    }
    if (pathname === '/budget') {
      setLocationText('Budget Planner')
    }

  }, [pathname])
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{locationText}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/drew-tom1/TreasureChest"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub Repository
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
