import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const navigation = {
  shop: [
    { name: 'Tous les produits', href: '/products' },
    { name: 'Catégories', href: '/categories' },
    { name: 'Nouveautés', href: '/products?sort=newest' },
    { name: 'Promotions', href: '/products?filter=sale' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carrières', href: '/careers' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Conditions générales', href: '/terms' },
    { name: 'Livraison & Retours', href: '/shipping' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Notre boutique</h3>
            <ul className="space-y-2">
              {navigation.shop.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Notre entreprise</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Informations légales</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>123 Rue du Commerce, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>contact@store.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Store. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}