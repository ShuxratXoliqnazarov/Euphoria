import Container from '@/components/ui/Container'
import { brands } from '@/data/brands'

export default function TopBrands() {
  return (
    <Container className="pb-16 md:pb-[100px]">
      <div className="rounded-xl bg-dark px-6 py-14 text-center text-white md:py-[68px]">
        <h2 className="font-accent text-4xl font-extrabold md:text-[50px]">Top Brands Deal</h2>
        <p className="mt-5 text-lg md:text-[22px]">
          Up To <span className="font-bold text-[#fbd103]">60%</span> off on brands
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:mt-16 md:gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="grid h-[70px] w-[140px] place-items-center rounded-xl bg-white p-3 md:h-[86px] md:w-[178px]">
              <img src={brand.logo} alt={brand.name} loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
