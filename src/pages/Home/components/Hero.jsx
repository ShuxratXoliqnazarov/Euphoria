import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import hero from '@/assets/images/home/hero.webp'

const SLIDES = [
  { label: 'T-Shirt / Tops', title: 'Summer Value Pack', text: 'cool / colorful / comfy' },
  { label: 'Dresses / Skirts', title: 'New Season Collection', text: 'light / bright / breezy' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]
  const go = (step) => setActive((active + step + SLIDES.length) % SLIDES.length)

  return (
    <section className="relative overflow-hidden bg-[#00b3e3]">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-40 md:opacity-100"
      />

      <div className="relative container-page flex min-h-[420px] flex-col justify-center py-16 text-white md:min-h-[716px] md:pl-[5%] xl:pl-[5%]">
        <p className="text-xl font-medium md:text-[32px]">{slide.label}</p>
        <h1 className="mt-6 max-w-[460px] font-accent text-5xl leading-tight font-extrabold md:mt-10 md:text-[78px] md:leading-[1.15]">
          {slide.title}
        </h1>
        <p className="mt-6 text-xl md:mt-10 md:text-[32px]">{slide.text}</p>
        <Link
          to={ROUTES.PRODUCT_LIST}
          className="mt-8 w-fit rounded-lg bg-white px-14 py-4 text-lg font-bold text-dark hover:bg-light md:mt-12 md:text-2xl"
        >
          Shop Now
        </Link>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-8 hidden -translate-y-1/2 p-2 text-white md:block"
      >
        <ChevronLeft className="size-8 md:size-10" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-8 hidden -translate-y-1/2 p-2 text-white md:block"
      >
        <ChevronRight className="size-8 md:size-10" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2">
        {SLIDES.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 w-16 first:rounded-l-full last:rounded-r-full ${i === active ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}
