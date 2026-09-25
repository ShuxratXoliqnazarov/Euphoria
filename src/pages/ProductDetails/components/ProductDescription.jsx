import { useState } from 'react'
import { Play } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const TABS = [
  { name: 'Description' },
  { name: 'User comments', count: 21, color: 'bg-primary' },
  { name: 'Question & Answer', count: 4, color: 'bg-dark' },
]

const SPECS = [
  ['Fabric', 'Bio-washed Cotton'],
  ['Pattern', 'Printed'],
  ['Fit', 'Regular-fit'],
  ['Neck', 'Round Neck'],
  ['Sleeve', 'Half-sleeves'],
  ['Style', 'Casual Wear'],
]

export default function ProductDescription({ product }) {
  const [tab, setTab] = useState('Description')

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionTitle>Product Description</SectionTitle>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
          {TABS.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setTab(item.name)}
              className={`flex items-center gap-2 pb-2 text-lg ${
                tab === item.name ? 'border-b border-dark text-dark' : 'text-gray'
              }`}
            >
              {item.name}
              {item.count && (
                <span className={`rounded px-1.5 text-xs text-white ${item.color}`}>{item.count}</span>
              )}
            </button>
          ))}
        </div>

        {tab === 'Description' ? (
          <>
            <p className="mt-6 leading-relaxed text-gray">
              100% Bio-washed Cotton – makes the fabric extra soft &amp; silky. Flexible ribbed crew neck. Precisely
              stitched with no pilling &amp; no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of
              matte-finish HD prints.
            </p>
            <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl bg-light sm:grid-cols-3">
              {SPECS.map(([term, value]) => (
                <div key={term} className="border-border/40 px-6 py-5 sm:px-12 sm:[&:not(:nth-child(3n))]:border-r [&:nth-child(-n+3)]:border-b">
                  <dt className="text-gray">{term}</dt>
                  <dd className="mt-2 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : (
          <p className="mt-6 text-gray">No {tab.toLowerCase()} yet.</p>
        )}
      </div>

      <div className="relative h-fit overflow-hidden rounded-xl">
        <img src={product.image} alt="" className="aspect-[534/330] w-full object-cover" />
        <div className="absolute inset-0 bg-dark/40" />
        <span className="absolute top-6 right-6 text-white">1:00 M</span>
        <button type="button" aria-label="Play video" className="absolute top-1/2 left-1/2 grid size-14 -translate-1/2 place-items-center rounded-full bg-white">
          <Play className="size-6 fill-dark" />
        </button>
        <p className="absolute right-0 bottom-8 left-0 text-center text-lg font-medium text-white md:text-xl">
          {product.title}
        </p>
      </div>
    </div>
  )
}
