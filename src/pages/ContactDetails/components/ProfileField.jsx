import { useState } from 'react'

// Строка контактных данных: значение + ссылка "Change" (по клику превращается в поле ввода)
export default function ProfileField({ label, value, masked = false }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)

  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray">{label}</p>
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={() => setEditing(false)}
            className="mt-1 w-full max-w-xs rounded-lg border border-primary px-3 py-1.5 text-sm outline-none"
          />
        ) : (
          <p className="mt-1 font-medium">{masked ? '•'.repeat(8) : draft}</p>
        )}
      </div>

      <button type="button" onClick={() => setEditing(true)} className="shrink-0 text-sm font-medium text-primary hover:underline">
        Change
      </button>
    </div>
  )
}
