import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import hawaiian from '@/assets/images/home/saving-hawaiian.webp'
import printed from '@/assets/images/home/saving-printed.webp'
import cargo from '@/assets/images/home/saving-cargo.webp'
import urban from '@/assets/images/home/saving-urban.webp'
import oversized from '@/assets/images/home/saving-oversized.webp'

// side — где стоит текст; light — белый текст на тёмном фото
const TOP_ROW = [
  // На исходном фото человек слева — отражаем картинку, чтобы он встал справа, как в макете
  { title: 'Hawaiian Shirts', text: 'Dress up in summer vibe', discount: 'UPTO 50% OFF', image: hawaiian, side: 'left', light: true, position: 'object-[20%_center] -scale-x-100' },
  { title: 'Printed T-Shirt', text: 'New Designs Every Week', discount: 'UPTO 40% OFF', image: printed, side: 'right', light: true, badge: 'Limited Stock', position: 'object-[77%_center]' },
  { title: 'Cargo Joggers', text: 'Move with style & comfort', discount: 'UPTO 50% OFF', image: cargo, side: 'right', position: 'object-[45%_center]' },
]

const BOTTOM_ROW = [
  { title: 'Urban Shirts', text: 'Live In Confort', discount: 'FLAT 60% OFF', image: urban, side: 'right', position: 'object-[20%_center]' },
  { title: 'Oversized T-Shirts', text: 'Street Style Icon', discount: 'FLAT 60% OFF', image: oversized, side: 'right', position: 'object-[20%_center]' },
]

function SavingCard({ item, className }) {
  const color = item.light ? 'text-white' : 'text-dark'

  return (
    <article className={`relative h-[393px] overflow-hidden rounded-xl ${className}`}>
      <img src={item.image} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${item.position}`} />

      {item.badge && (
        <span className="absolute top-5 right-5 rounded bg-dark px-3 py-2 text-xs font-bold text-white">
          {item.badge}
        </span>
      )}

      <div
        className={`relative flex h-full w-1/2 flex-col justify-center gap-4 p-6 ${color} ${
          item.side === 'right' ? 'ml-auto items-end text-right md:items-start md:text-left' : ''
        }`}
      >
        <h3 className="max-w-[170px] text-[28px] leading-tight font-bold md:text-[34px]">{item.title}</h3>
        <p className="text-sm font-medium">{item.text}</p>
        <p className="font-extrabold">{item.discount}</p>
        <ArrowDown className="mx-6 size-6" />
        <Link
          to={ROUTES.PRODUCT_LIST}
          className={`w-fit rounded-lg border px-6 py-3 text-sm font-medium ${
            item.light ? 'border-white hover:bg-white hover:text-dark' : 'border-dark hover:bg-dark hover:text-white'
          }`}
        >
          SHOP NOW
        </Link>
      </div>
    </article>
  )
}

export default function BigSavingZone() {
  return (
    <Container className="py-16 md:py-[100px]">
      <SectionTitle>Big Saving Zone</SectionTitle>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-6">
        {TOP_ROW.map((item) => (
          <SavingCard key={item.title} item={item} className="md:col-span-2" />
        ))}
        {BOTTOM_ROW.map((item) => (
          <SavingCard key={item.title} item={item} className="md:col-span-3" />
        ))}
      </div>
    </Container>
  )
}
