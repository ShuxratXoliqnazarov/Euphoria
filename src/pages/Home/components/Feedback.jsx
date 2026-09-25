import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Rating from '@/components/ui/Rating'
import { feedbacks } from '@/data/feedbacks'

export default function Feedback() {
  return (
    <Container className="pb-16 md:pb-[100px]">
      <SectionTitle>Feedback</SectionTitle>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {feedbacks.map((item) => (
          <article key={item.id} className="rounded-xl border border-border p-6">
            <div className="flex items-start justify-between">
              <img src={item.avatar} alt={item.name} className="size-14 rounded-sm object-cover" />
              <Rating value={item.rating} />
            </div>
            <h3 className="mt-5 text-2xl font-medium">{item.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-1.5">
        <span className="size-1.5 rounded-full bg-dark" />
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-border" />
      </div>
    </Container>
  )
}
