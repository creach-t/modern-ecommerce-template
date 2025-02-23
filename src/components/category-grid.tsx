import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Catégorie 1',
    image: '/api/placeholder/600/400',
    description: 'Description de la catégorie 1',
  },
  {
    id: 2,
    name: 'Catégorie 2',
    image: '/api/placeholder/600/400',
    description: 'Description de la catégorie 2',
  },
  {
    id: 3,
    name: 'Catégorie 3',
    image: '/api/placeholder/600/400',
    description: 'Description de la catégorie 3',
  },
]

export function CategoryGrid() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Nos Catégories
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explorez notre sélection de produits par catégorie
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[3/2] w-full overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-2xl font-bold">{category.name}</h3>
              <p className="mt-2">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}