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
        className="absolute inset-0 h-full w-full object-cover object-[70%_15%] opacity-40 md:object-[70%_center] md:opacity-100"
      />

      <div className="relative container-page flex min-h-[420px] flex-col justify-center py-16 text-white md:min-h-[716px] md:pl-[5%] xl:pl-[5%]">
        <p className="text-xl font-medium md:text-[32px]">{slide.label}</p>
        <h1 className="mt-6 max-w-[460px] font-accent text-5xl leading-tight font-extrabold md:mt-10 md:text-[78px] md:leading-[1.15]">
          {slide.title}
        </h1>
        <p className="mt-6 text-xl md:mt-10 md:text-[32px]">{slide.text}</p>
        <Link
          to={ROUTES.PRODUCT_LIST}
          className="mt-8 w-fit rounded-lg bg-white px-14 py-4 text-lg font-bold text-dark transition-all duration-200 hover:scale-[1.03] hover:bg-light active:scale-95 md:mt-12 md:text-2xl"
        >
          Shop Now
        </Link>
      </div>

      {/*
        Стрелки — рядом с точками пагинации, не сбоку: на md/lg (768–1279px) текст заголовка
        подъезжает почти к самому краю секции (pl-[5%]), и боковые стрелки на фиксированном
        left-8/right-8 залезали прямо на слово "Value". Внизу коллизий с текстом не бывает.
      */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-dark active:scale-95 md:grid"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex">
          {SLIDES.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 w-16 cursor-pointer transition-colors duration-300 first:rounded-l-full last:rounded-r-full ${i === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-dark active:scale-95 md:grid"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  )
}
