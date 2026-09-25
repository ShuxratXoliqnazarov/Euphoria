import { useState } from 'react'
import { Check, Pencil } from 'lucide-react'

// Строка профиля с инлайн-редактированием: значение ⇄ поле ввода по клику на карандаш
export default function ProfileField({ label, value }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)

  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray">{label}</p>
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            className="mt-1 w-full rounded-lg border border-primary px-3 py-2 text-sm outline-none"
          />
        ) : (
          <p className="mt-1 truncate font-medium">{draft}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setEditing(!editing)}
        aria-label={editing ? 'Save' : `Edit ${label}`}
        className="grid size-9 shrink-0 place-items-center rounded-full text-gray hover:bg-light hover:text-primary"
      >
        {editing ? <Check className="size-4" /> : <Pencil className="size-4" />}
      </button>
    </div>
  )
}
