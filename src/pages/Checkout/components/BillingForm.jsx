const FIELD_CLASS = 'w-full rounded-lg bg-light px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary'
const LABEL_CLASS = 'mb-2 block text-sm font-medium text-dark'

// Личные данные и адрес доставки (Figma: "Billing Details")
export default function BillingForm() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <label>
        <span className={LABEL_CLASS}>First Name*</span>
        <input required type="text" placeholder="First Name" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>Last Name*</span>
        <input required type="text" placeholder="Last Name" className={FIELD_CLASS} />
      </label>

      <label>
        <span className={LABEL_CLASS}>Country / Region*</span>
        <input required type="text" placeholder="Country / Region" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>Company Name</span>
        <input type="text" placeholder="Company (optional)" className={FIELD_CLASS} />
      </label>

      <label className="sm:col-span-2">
        <span className={LABEL_CLASS}>Street Address*</span>
        <input required type="text" placeholder="House number and street name" className={FIELD_CLASS} />
      </label>
      <label className="sm:col-span-2">
        <span className={LABEL_CLASS}>Apt, suite, unit</span>
        <input type="text" placeholder="apartment, suite, unit, etc. (optional)" className={FIELD_CLASS} />
      </label>

      <div className="grid gap-5 sm:col-span-2 sm:grid-cols-3">
        <label>
          <span className={LABEL_CLASS}>City*</span>
          <input required type="text" placeholder="Town / City" className={FIELD_CLASS} />
        </label>
        <label>
          <span className={LABEL_CLASS}>State*</span>
          <input required type="text" placeholder="State" className={FIELD_CLASS} />
        </label>
        <label>
          <span className={LABEL_CLASS}>Postal Code*</span>
          <input required type="text" placeholder="Postal Code" className={FIELD_CLASS} />
        </label>
      </div>

      <label className="sm:col-span-2">
        <span className={LABEL_CLASS}>Phone*</span>
        <input required type="tel" placeholder="Phone" className={FIELD_CLASS} />
      </label>
    </div>
  )
}
