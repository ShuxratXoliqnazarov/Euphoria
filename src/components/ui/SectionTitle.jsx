// Заголовок секции с фиолетовой полоской слева: | New Arrival
export default function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`flex items-center gap-4 text-2xl font-semibold text-dark md:text-[34px] ${className}`}
    >
      <span className="h-7 w-1.5 shrink-0 rounded-full bg-primary" />
      {children}
    </h2>
  )
}
