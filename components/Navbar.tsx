"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Search, Menu, X } from "lucide-react"
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
      <div className="          
        fixed top-4 left-4 right-4 z-50
        flex items-center justify-between
        px-4 py-2 rounded-2xl
        backdrop-blur-[30px] bg-white/30 dark:bg-black/30
        border border-white/30 dark:border-white/20
        shadow-lg shadow-black/10 dark:shadow-white/10
        transition-all duration-300
        text-black dark:text-white
      ">
        <div className="flex items-center ">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="bg-white/20 dark:bg-black/20 border-none">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="hidden h-5 w-5 dark:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-none">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex items-center">
            <div className="relative w-[200px] mx-4 font-['Oxanium']">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="
                  pr-8
                  bg-white/40 dark:bg-black/40
                  backdrop-blur-md
                  border border-white/20 dark:border-white/10
                  text-black dark:text-white
                "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">


          <Menubar className="hidden md:flex backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
            <div className="flex space-x-2">
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/" className="px-3 py-2 text-sm hover:text-primary !bg-transparent">Home</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/cybernote" className="px-3 py-2 text-sm hover:text-primary !bg-transparent">Cyber Note</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/projects" className="px-3 py-2 text-sm hover:text-primary !bg-transparent">Projects</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/friends" className="px-3 py-2 text-sm hover:text-primary !bg-transparent">Friends</Link>
                </MenubarTrigger>
              </MenubarMenu>
            </div>
          </Menubar>


          <img
            src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1759546975/abhikr_uvns8e.png"
            alt="Logo"
            className="h-8 w-8"
          />


          <Menubar className="hidden md:flex backdrop-blur-md bg-white/10 border border-white/20 shadow-md mr-[-1px]">
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


          <Button variant="ghost" size="icon" className="md:hidden text-black dark:text-white" onClick={() => setSidebarOpen(true)}>
            <Menu />
          </Button>
        </div>
      </div>


      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative w-72 bg-white/30 dark:bg-black/30 backdrop-blur-[25px] p-6 space-y-4 z-50 h-full overflow-y-auto border-r border-white/20 dark:border-white/10 text-black dark:text-white rounded-r-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X />
              </Button>
            </div>


            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pr-8 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 text-black dark:text-white"
              />
            </div>

            <nav className="flex flex-col space-y-3 text-base pt-2">
              <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              <a href="/cybernote" onClick={() => setSidebarOpen(false)}>Cyber Note</a>
              <Link href="/projects" onClick={() => setSidebarOpen(false)}>Projects</Link>
              <Link href="/friends" onClick={() => setSidebarOpen(false)}>Friends</Link>
            </nav>

            <div className="absolute bottom-4 text-sm text-black/70 dark:text-white/50">
              AbhikrX
            </div>
          </div>
        </div>
      )}
    </>
  )
}
