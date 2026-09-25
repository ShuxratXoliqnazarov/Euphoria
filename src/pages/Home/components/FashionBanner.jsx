import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import leaves from '@/assets/images/home/leaves.webp'
import group from '@/assets/images/home/fashion-group.webp'

export default function FashionBanner() {
  return (
    <Container className="pb-16 md:pb-[100px]">
      <div className="grid overflow-hidden rounded-xl md:grid-cols-2">
        <div className="relative flex min-h-[420px] flex-col justify-center p-8 text-white md:p-[60px]">
          <img src={leaves} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative">
            <h2 className="font-accent text-3xl leading-snug font-extrabold md:text-[34px]">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h2>
            <p className="mt-6 text-lg font-light tracking-wide md:text-[22px]">
              In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable &amp;
              Affordable fashion 24/7
            </p>
            <Link
              to={ROUTES.PRODUCT_LIST}
              className="mt-10 inline-block rounded-lg bg-white px-11 py-3 text-lg font-semibold text-dark hover:bg-light"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <img src={group} alt="Friends in Euphoria clothes" loading="lazy" className="h-full max-h-[640px] w-full object-cover" />
      </div>
    </Container>
  )
}
