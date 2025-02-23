"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { CartSheet } from '@/components/cart-sheet'
import { User } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'A propos', href: '/about' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Store</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-lg font-medium transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Mon compte</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button className="w-full">Se connecter</Button>
                <Button variant="outline" className="w-full">
                  S'inscrire
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <CartSheet />
        </div>
      </div>
    </header>
  )
}