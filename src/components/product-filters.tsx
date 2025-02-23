'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const categories = [
  { id: 1, name: 'Catégorie 1' },
  { id: 2, name: 'Catégorie 2' },
  { id: 3, name: 'Catégorie 3' },
]

const priceRanges = [
  { id: 1, name: 'Moins de 50€', min: 0, max: 50 },
  { id: 2, name: '50€ - 100€', min: 50, max: 100 },
  { id: 3, name: '100€ - 200€', min: 100, max: 200 },
  { id: 4, name: 'Plus de 200€', min: 200, max: null },
]

export function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = React.useState<number[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<number | null>(
    null
  )

  const toggleCategory = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const togglePriceRange = (rangeId: number) => {
    setSelectedPriceRange((prev) => (prev === rangeId ? null : rangeId))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Catégories</CardTitle>
          <CardDescription>Filtrer par catégorie</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <Button
                  variant={selectedCategories.includes(category.id) ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.name}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prix</CardTitle>
          <CardDescription>Filtrer par prix</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center">
                <Button
                  variant={selectedPriceRange === range.id ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => togglePriceRange(range.id)}
                >
                  {range.name}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}