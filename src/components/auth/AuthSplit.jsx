// Каркас всех страниц авторизации: фото слева, форма справа
export default function AuthSplit({ image, title, subtitle, children }) {
  return (
    <div className="grid w-full md:grid-cols-[46%_1fr]">
      <img src={image} alt="" className="hidden h-full max-h-[963px] w-full object-cover md:block" />

      <div className="px-4 py-10 sm:px-10 md:py-14 lg:px-16 xl:px-[88px]">
        <div className="max-w-[532px]">
          <h1 className="text-3xl font-semibold text-dark md:text-[34px]">{title}</h1>
          {subtitle && <p className="mt-3 text-gray">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
