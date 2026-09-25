// Страница: NotFound (*)
// Figma: "Error Page"
// Ответственный: Nozina
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'
import notFoundGirl from '@/assets/images/not-found/not-found-girl.jpg'

export default function NotFound() {
  return (
    <div className="py-16 md:py-24">
      <Container className="flex flex-col items-center justify-center text-center">
        {/* Stylized 404 Graphic */}
        <div className="relative flex items-center justify-center select-none animate-in fade-in zoom-in-95 duration-500">
          {/* Left '4' */}
          <span className="font-accent text-[120px] font-black leading-none text-dark tracking-tighter sm:text-[180px] md:text-[240px] lg:text-[280px]">
            4
          </span>

          {/* Middle '0' with fashion photo cutout */}
          <div className="group relative -mx-2 sm:-mx-4 z-10 h-[140px] w-[95px] sm:h-[200px] sm:w-[135px] md:h-[270px] md:w-[185px] lg:h-[310px] lg:w-[210px] overflow-hidden rounded-[999px] shadow-lg ring-4 ring-white transition-transform duration-500 ease-out hover:scale-105">
            <img
              src={notFoundGirl}
              alt="Fashion shopper in red coat"
              className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Subtle glow / glass reflection on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Right '4' */}
          <span className="font-accent text-[120px] font-black leading-none text-dark tracking-tighter sm:text-[180px] md:text-[240px] lg:text-[280px]">
            4
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="mt-6 md:mt-8 max-w-lg space-y-3">
          <h1 className="font-accent text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Oops! Page not found
          </h1>
          <p className="text-sm font-medium text-gray md:text-base">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </p>
        </div>

        {/* Back to HomePage CTA */}
        <div className="mt-8 md:mt-10">
          <Link to={ROUTES.HOME}>
            <Button className="!px-10 !py-4 text-base font-bold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              Back to HomePage
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
