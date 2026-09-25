import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'

// Используется дважды: Categories For Men / Categories For Women
export default function CategoryGrid({ title, categories, category }) {
  return (
    <Container className="pb-16 md:pb-[100px]">
      <SectionTitle>{title}</SectionTitle>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-14">
        {categories.map((item) => (
          <Link key={item.id} to={`${ROUTES.PRODUCT_LIST}?category=${category}`} className="group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[270/393] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-2">
              <div>
                <p className="font-bold text-dark">{item.title}</p>
                <p className="mt-1 text-sm text-gray">Explore Now!</p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-gray transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
