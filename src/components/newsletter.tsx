'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simuler l'inscription à la newsletter
    toast({
      title: 'Inscription réussie!',
      description: 'Vous êtes maintenant inscrit à notre newsletter.',
    })
    
    setEmail('')
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Restez informé
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}