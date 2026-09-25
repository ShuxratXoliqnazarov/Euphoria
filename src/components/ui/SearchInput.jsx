import { Search } from 'lucide-react'

export default function SearchInput({ className = '' }) {
  return (
    <label className={`flex items-center gap-2 rounded-lg bg-light px-4 py-3 text-gray ${className}`}>
      <Search className="size-5 shrink-0" />
      <input type="search" placeholder="Search" className="w-full bg-transparent text-sm text-dark outline-none" />
    </label>
  )
}
