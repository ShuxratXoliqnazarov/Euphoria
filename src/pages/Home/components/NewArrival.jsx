import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { newArrivals } from '@/data/categories'

export default function NewArrival() {
  const listRef = useRef(null)
  const scroll = (direction) => listRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' })

  return (
    <Container>
      <SectionTitle>New Arrival</SectionTitle>

      <div className="relative mt-12 md:mt-16">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="absolute top-[130px] -left-1 z-10 hidden md:block"
        >
          <ArrowLeft className="size-5" />
        </button>

        <div ref={listRef} className="no-scrollbar flex snap-x gap-8 overflow-x-auto md:mx-10">
          {newArrivals.map((item) => (
            <Link key={item.id} to={ROUTES.PRODUCT_LIST} className="w-[262px] shrink-0 snap-start">
              <img src={item.image} alt={item.title} className="aspect-[262/262] w-full rounded-xl object-cover" />
              <p className="mt-8 font-medium text-dark">{item.title}</p>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next"
          className="absolute top-[130px] -right-1 z-10 hidden md:block"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </Container>
  )
}
