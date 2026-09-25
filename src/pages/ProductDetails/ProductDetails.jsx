// Страница: ProductDetails (/product/:id)
// Figma: "Product detail Page"
// Ответственный: Shuhrat
import { useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { getProductById, products } from '@/data/products'
import Gallery from './components/Gallery'
import ProductInfo from './components/ProductInfo'
import ProductDescription from './components/ProductDescription'
import SimilarProducts from './components/SimilarProducts'

export default function ProductDetails() {
  const { id } = useParams()
  // Неизвестный id — показываем первый товар, как в макете
  const product = getProductById(id) ?? products[0]

  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <Gallery key={product.id} images={product.gallery ?? [product.image]} alt={product.title} />
        <ProductInfo product={product} />
      </section>

      <Container className="space-y-20 py-16 md:space-y-24 md:py-24">
        <ProductDescription product={product} />
        <SimilarProducts currentId={product.id} />
      </Container>
    </>
  )
}
