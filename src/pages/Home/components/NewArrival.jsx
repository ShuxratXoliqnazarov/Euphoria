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
          className="absolute top-[110px] -left-1 z-10 hidden size-10 place-items-center rounded-full bg-light text-gray transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-95 md:grid"
        >
          <ArrowLeft className="size-5" />
        </button>

        <div ref={listRef} className="no-scrollbar flex snap-x gap-8 overflow-x-auto md:mx-10">
          {newArrivals.map((item) => (
            <Link key={item.id} to={ROUTES.PRODUCT_LIST} className="group w-[262px] shrink-0 snap-start">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[262/262] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-8 font-medium text-dark transition-colors group-hover:text-primary">{item.title}</p>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next"
          className="absolute top-[110px] -right-1 z-10 hidden size-10 place-items-center rounded-full bg-light text-gray transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-95 md:grid"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </Container>
  )
}
