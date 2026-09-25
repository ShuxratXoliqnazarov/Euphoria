// Поле формы: подпись, инпут, подсказка/ошибка. action — элемент справа от подписи (например, Hide)
export default function FormField({ label, id, error, hint, action, className = '', ...inputProps }) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-dark">
          {label}
        </label>
        {action}
      </div>
      <input
        id={id}
        className={`h-14 w-full rounded-lg border px-5 text-dark outline-none transition-colors placeholder:text-sm placeholder:text-gray/70 focus:border-primary ${
          error ? 'border-danger' : 'border-dark/60'
        }`}
        {...inputProps}
      />
      {hint && !error && <p className="mt-2 text-sm text-gray">{hint}</p>}
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  )
}
