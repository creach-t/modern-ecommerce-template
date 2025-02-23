import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="border-b p-0">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="grid gap-2 p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-semibold">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <p className="font-semibold">{product.price.toFixed(2)} €</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  )
}