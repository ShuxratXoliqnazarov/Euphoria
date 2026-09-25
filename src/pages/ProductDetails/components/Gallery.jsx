import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Gallery({ images, alt }) {
  const [active, setActive] = useState(images.length - 1)
  const go = (step) => setActive((active + step + images.length) % images.length)

  return (
    <div className="flex flex-col-reverse bg-light md:flex-row lg:w-1/2">
      <div className="flex items-center justify-center gap-5 p-6 md:w-[160px] md:flex-col md:py-10">
        {images.map((image, i) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(i)}
            className={`overflow-hidden rounded-lg border-2 ${i === active ? 'border-dark' : 'border-transparent'}`}
          >
            <img src={image} alt="" className="size-[70px] object-cover" />
          </button>
        ))}
        <div className="hidden flex-col items-center gap-3 md:flex">
          <button type="button" onClick={() => go(-1)} aria-label="Previous image" className="grid size-6 place-items-center rounded-full bg-white">
            <ChevronUp className="size-4" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next image" className="grid size-6 place-items-center rounded-full bg-dark text-white">
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>

      <img src={images[active]} alt={alt} className="aspect-[520/785] w-full flex-1 object-cover md:max-h-[785px]" />
    </div>
  )
}
