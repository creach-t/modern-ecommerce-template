'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShoppingCart, Heart, Share2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

// Simuler un produit pour la démonstration
const product = {
  id: 1,
  name: 'Produit Premium',
  price: 199.99,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam.',
  images: [
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
  ],
  features: [
    'Caractéristique premium 1',
    'Caractéristique premium 2',
    'Caractéristique premium 3',
    'Caractéristique premium 4',
  ],
  specifications: {
    'Matériau': 'Premium',
    'Dimensions': '30 x 20 x 10 cm',
    'Poids': '500g',
    'Garantie': '2 ans',
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: 'Produit ajouté au panier',
      description: `${quantity} x ${product.name} ont été ajoutés à votre panier`,
    })
  }

  const handleAddToWishlist = () => {
    toast({
      title: 'Produit ajouté aux favoris',
      description: `${product.name} a été ajouté à votre liste de souhaits`,
    })
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Images du produit */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Vue ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informations du produit */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold">{product.price.toFixed(2)} €</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg border">
                <button
                  className="px-4 py-2 text-lg disabled:opacity-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 text-lg">{quantity}</span>
                <button
                  className="px-4 py-2 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleAddToCart} className="flex-1 gap-2">
                <ShoppingCart className="h-5 w-5" />
                Ajouter au panier
              </Button>
              <Button variant="outline" onClick={handleAddToWishlist}>
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Caractéristiques</h2>
            <ul className="list-inside list-disc space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Spécifications</h2>
            <dl className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="font-medium text-muted-foreground">{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </div>
  )
}