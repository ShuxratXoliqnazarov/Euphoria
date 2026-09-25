import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'

export default function SeoText({ label }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mt-20">
      <SectionTitle className="md:text-[28px]">Clothing for {label} Online in India</SectionTitle>

      <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray md:ml-6">
        <h3 className="font-semibold">Reexplore {label}&apos;s Clothing Collection Online at Euphoria</h3>
        <p>
          {label}&apos;s Clothing – Are you searching for the best website to buy Clothing for {label} online in India?
          Well, your search for the coolest and most stylish clothing ends here. From trendy Casual Wear Online
          shopping to premium quality cotton apparel, <b>Euphoria</b> has closet of Collection covered with the
          latest and best designs of Clothing Online.
        </p>
        <p>
          Our collection of clothes will make you the trendsetter with an iconic resemblance of choice in Wear.
        </p>
        <h3 className="font-semibold">One-Stop Destination to Shop Every Clothing for {label}: Euphoria</h3>
        <p>
          Today, Clothing is gaining more popularity above all. This is because gone are the days when people were
          used to carrying uncomfortable fashion. Today, one looks better in Casual Wear which is a comfortable
          outfit. Concerning this, <b>Euphoria</b> has a big fat range of Stylish Clothing that would make you the
          winner wherever you go.
        </p>
        {expanded && (
          <p>
            Our collection of clothes will make you the trendsetter with an iconic resemblance of choice. It is quite
            evident to say that there are very few Clothing online stores where you can buy Western Wear comprising
            the premium material and elegant design that you are always seeking for.
          </p>
        )}
        <button type="button" onClick={() => setExpanded(!expanded)} className="font-semibold text-dark hover:text-primary">
          {expanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  )
}
