import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import coziness from '@/assets/images/home/banner-coziness.webp'
import breezy from '@/assets/images/home/banner-breezy.webp'

const BANNERS = [
  { label: 'Low Price', title: 'High Coziness', discount: 'UPTO 50% OFF', image: coziness, position: 'object-[80%_center]' },
  { label: 'Beyoung Presents', title: 'Breezy Summer Style', discount: 'UPTO 50% OFF', image: breezy, position: 'object-[75%_center]' },
]

export default function PromoBanners() {
  return (
    <Container className="grid gap-8 py-16 md:grid-cols-2 md:py-[124px]">
      {BANNERS.map((banner) => (
        <article
          key={banner.title}
          className="relative h-[355px] overflow-hidden rounded-xl text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
          <img src={banner.image} alt="" className={`absolute inset-0 h-full w-full object-cover ${banner.position}`} />
          {/* На телефоне фото уже, текст ложится на человека — затемняем для читаемости */}
          <div className="absolute inset-0 bg-black/30 sm:hidden" />
          <div className="relative flex h-full flex-col justify-center p-8 sm:max-w-[60%]">
            <p className="text-lg font-extrabold">{banner.label}</p>
            <h3 className="mt-6 text-3xl font-extrabold md:text-[34px]">{banner.title}</h3>
            <p className="mt-4 text-sm font-medium">{banner.discount}</p>
            <Link
              to={ROUTES.PRODUCT_LIST}
              className="mt-10 w-fit border-b border-white pb-0.5 text-lg font-extrabold hover:opacity-80"
            >
              Explore Items
            </Link>
          </div>
        </article>
      ))}
    </Container>
  )
}
