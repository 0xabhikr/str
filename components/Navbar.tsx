"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Search, Bell, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Navbar() {
  const { setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-2 rounded-xl backdrop-blur-md bg-white/60 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="hidden h-5 w-5 dark:block" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex items-center">
            <div className="relative w-[200px] mx-4 font-['Oxanium']">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pr-8"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Menubar className="hidden md:flex backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
            <div className="flex space-x-2">
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none ">Home</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/cybernote" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Cyber Note</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/projects" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Projects</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/friends" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Friends</Link>
                </MenubarTrigger>
              </MenubarMenu>
            </div>
          </Menubar>
          <img
            src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1759546975/abhikr_uvns8e.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <Menubar className="-mr-[1px] hidden md:flex backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
            <MenubarMenu>
              <div className="ml-4 min-w-[80px] flex items-center space-x-2">
                <h4 className="text-base font-semibold">Abhikr |</h4>
                <img
                  src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1759546975/abhikr_uvns8e.png"
                  alt="Logo"
                  className="h-8 w-8"
                />
              </div>
            </MenubarMenu>
          </Menubar>
          <Button variant="ghost" size="icon" className="md:hidden -mr-2" onClick={() => setSidebarOpen(true)}>
            <Menu />
          </Button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative w-72 bg-white dark:bg-zinc-900 p-6 space-y-4 z-50 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pr-8"
              />
            </div>
            <nav className="flex flex-col space-y-3 text-base pt-2">
              <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link href="/cybernote" onClick={() => setSidebarOpen(false)}>Cyber Note</Link>
              <Link href="/projects" onClick={() => setSidebarOpen(false)}>Projects</Link>
              <Link href="/friends" onClick={() => setSidebarOpen(false)}>Friends</Link>
            </nav>
            <div className="absolute bottom-4 text-sm text-muted-foreground">
              Abhikr ✿
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
