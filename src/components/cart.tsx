'use client'

import * as React from 'react'
import { useCartStore } from '@/store/cart'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <p className="text-center text-muted-foreground">
          Votre panier est vide
        </p>
        <Link href="/products">
          <Button>Découvrir nos produits</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.price.toFixed(2)} €
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <p className="font-medium">
                  {(item.price * item.quantity).toFixed(2)} €
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex justify-between py-2">
          <span className="font-medium">Total</span>
          <span className="font-medium">{total.toFixed(2)} €</span>
        </div>
        <Button className="mt-4 w-full">Passer la commande</Button>
      </div>
    </div>
  )
}