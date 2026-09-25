const DEFAULT_LABEL = { billing: 'Default billing address', shipping: 'Default shipping address' }

// Карточка сохранённого адреса (Figma: раздел "Address" на My Info)
export default function AddressCard({ address, onRemove, onSetDefault }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-light p-5 transition-shadow duration-200 hover:shadow-md">
      <div>
        <p className="font-semibold">{address.fullName}</p>
        <p className="mt-1 text-sm text-gray">{address.phone}</p>
        <p className="mt-2 text-sm text-gray">{address.line}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">{address.label}</span>
        {address.defaultType && (
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">
            {DEFAULT_LABEL[address.defaultType]}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <button type="button" onClick={onRemove} className="font-medium text-danger hover:underline">
          Remove
        </button>
        <span className="text-border">|</span>
        <button type="button" className="font-medium hover:underline">
          Edit
        </button>
        {!address.defaultType && (
          <>
            <span className="text-border">|</span>
            <button type="button" onClick={onSetDefault} className="font-medium text-primary hover:underline">
              Set as default
            </button>
          </>
        )}
      </div>
    </div>
  )
}
