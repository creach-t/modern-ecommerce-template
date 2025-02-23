import { ProductCard } from '@/components/product-card'
import { ProductFilters } from '@/components/product-filters'

const products = [
  {
    id: 1,
    name: 'Produit 1',
    price: 99.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 1',
  },
  {
    id: 2,
    name: 'Produit 2',
    price: 149.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 2',
  },
  {
    id: 3,
    name: 'Produit 3',
    price: 199.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 1',
  },
  {
    id: 4,
    name: 'Produit 4',
    price: 79.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 3',
  },
  {
    id: 5,
    name: 'Produit 5',
    price: 129.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 2',
  },
  {
    id: 6,
    name: 'Produit 6',
    price: 89.99,
    image: '/api/placeholder/400/400',
    category: 'Catégorie 1',
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex gap-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Nos Produits</h1>
            <div className="flex items-center gap-4">
              <select className="rounded-md border p-2">
                <option>Les plus récents</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
              </select>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}