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

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Layered sections of content displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays info on hover or focus.",
  },
]

export default function Navbar() {
  const { setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/20 dark:border-white/10 shadow-lg transition-all duration-300">

        {/* Left Group: Theme toggle and Notification */}
        <div className="flex items-center">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-4">
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

          {/* Notification */}
          <Link href="/notifications">
            <Bell className="w-5 h-5 ml-4" />
          </Link>

          {/* Desktop-only Search and Friends */}
          <div className="hidden md:flex items-center">
            {/* Search Bar */}
            <div className="relative w-[200px] mx-4 font-['Oxanium']">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pr-8"
              />
            </div>

            {/* Friends Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Friends</NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-md p-4 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-md border border-white/30 dark:border-white/10 transition-all duration-300">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Group: Nav links, logo, profile, hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop Nav Links */}
          <Menubar className="hidden md:flex">
            <div className="flex space-x-2">
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Home</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Link href="/about" className="px-3 py-2 text-sm text-foreground hover:text-primary More actions
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">About</Link>
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
            </div>
          </Menubar>
          <img
            src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616297/favicon-32x32_ninnwa.png"
            alt="Logo"
            className="h-8 w-8"
          />

          {/* Desktop Name */}
          <Menubar className="hidden md:flex">
            <MenubarMenu>
              <h4 className="ml-4 min-w-[140px]">Abhikr | अभिषेक ヤ</h4>
            </MenubarMenu>
          </Menubar>

          {/* Logo */}
          

          {/* Mobile Hamburger */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>

          {/* Sidebar Content */}
          <div className="relative w-72 bg-white dark:bg-zinc-900 p-6 space-y-4 z-50 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X />
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pr-8"
              />
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-3 text-base pt-2">
              <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setSidebarOpen(false)}>About</Link>
              <Link href="/projects" onClick={() => setSidebarOpen(false)}>Projects</Link>
              <Link href="/notifications" onClick={() => setSidebarOpen(false)}>Notifications</Link>
            </nav>

            {/* Friends List */}
            <div className="pt-4 border-t border-gray-300 dark:border-zinc-700">
              <p className="text-sm font-semibold mb-2">Friends</p>
              <div className="space-y-3">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className="font-medium">{component.title}</div>
                    <p className="text-xs">{component.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="pt-4 border-t border-gray-300 dark:border-zinc-700">
              <p className="text-sm text-muted-foreground mb-2">Theme</p>
              <div className="flex gap-2">
                <Button onClick={() => setTheme("light")}>Light</Button>
                <Button onClick={() => setTheme("dark")}>Dark</Button>
                <Button onClick={() => setTheme("system")}>System</Button>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 text-sm text-muted-foreground">
              Abhikr | अभिषेक ヤ
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
