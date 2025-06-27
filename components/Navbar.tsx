"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Search, Bell } from "lucide-react"
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

// Component list for dropdown
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
  const { setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/20 dark:border-white/10 shadow-lg transition-all duration-300">

      {/* Theme Toggle Button */}
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

      {/* Notification Icon */}
      <Link href="/notifications">
        <Bell className="w-5 h-5 ml-4" />
      </Link>

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

      {/* Navigation Dropdown */}
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

      {/* Navigation Links */}
      <Menubar className="ml-auto mr-4">
        <div className="flex space-x-2">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link
                href="/"
                className="px-3 py-2 text-sm text-foreground hover:text-primary 
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none"
              >
                Home
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/about" className="px-3 py-2 text-sm text-foreground hover:text-primary 
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">About</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/projects" className="px-3 py-2 text-sm text-foreground hover:text-primary 
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Projects</Link>
            </MenubarTrigger>
          </MenubarMenu>
          {/* <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/friends" className="px-3 py-2 text-sm text-foreground hover:text-primary 
               !bg-transparent hover:!bg-transparent active:!bg-transparent 
               focus:!bg-transparent focus:outline-none focus:ring-0 
               shadow-none hover:shadow-none active:shadow-none">Friends</Link>
            </MenubarTrigger>
          </MenubarMenu> */}
        </div>
      </Menubar>

      {/* Profile or Name Section */}
      <Menubar style={{ marginRight: 15 }}>
        <MenubarMenu >
          <h4 className="ml-4 min-w-[140px]">Abhikr | अभिषेक ヤ</h4>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

// ListItem Component for dropdown menu
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
