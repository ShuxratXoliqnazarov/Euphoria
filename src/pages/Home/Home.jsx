// Страница: Home (/)
// Figma: "home page"
// Ответственный: Shuhrat
import { menCategories, womenCategories } from '@/data/categories'
import Hero from './components/Hero'
import PromoBanners from './components/PromoBanners'
import NewArrival from './components/NewArrival'
import BigSavingZone from './components/BigSavingZone'
import FashionBanner from './components/FashionBanner'
import CategoryGrid from './components/CategoryGrid'
import TopBrands from './components/TopBrands'
import Limelight from './components/Limelight'
import Feedback from './components/Feedback'

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanners />
      <NewArrival />
      <BigSavingZone />
      <FashionBanner />
      <CategoryGrid title="Categories For Men" categories={menCategories} category="men" />
      <CategoryGrid title="Categories For Women" categories={womenCategories} category="women" />
      <TopBrands />
      <Limelight />
      <Feedback />
    </>
  )
}
