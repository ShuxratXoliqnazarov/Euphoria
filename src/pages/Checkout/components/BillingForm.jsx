const FIELD_CLASS =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary'
const LABEL_CLASS = 'mb-2 block text-sm font-medium text-dark'

// Личные данные и адрес доставки (Figma: "Billing Details")
export default function BillingForm() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <label>
        <span className={LABEL_CLASS}>First Name</span>
        <input required type="text" placeholder="Jaden" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>Last Name</span>
        <input required type="text" placeholder="Smith" className={FIELD_CLASS} />
      </label>

      <label>
        <span className={LABEL_CLASS}>Email Address</span>
        <input required type="email" placeholder="jaden.smith@email.com" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>Phone Number</span>
        <input required type="tel" placeholder="+1 (555) 012-3456" className={FIELD_CLASS} />
      </label>

      <label className="sm:col-span-2">
        <span className={LABEL_CLASS}>Street Address</span>
        <input required type="text" placeholder="2118 Thornridge Cir" className={FIELD_CLASS} />
      </label>
      <label className="sm:col-span-2">
        <span className={LABEL_CLASS}>Apartment, suite, etc. (optional)</span>
        <input type="text" className={FIELD_CLASS} />
      </label>

      <label>
        <span className={LABEL_CLASS}>Town / City</span>
        <input required type="text" placeholder="Syracuse" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>Country</span>
        <select required defaultValue="" className={FIELD_CLASS}>
          <option value="" disabled>
            Select country
          </option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Uzbekistan</option>
        </select>
      </label>

      <label>
        <span className={LABEL_CLASS}>State</span>
        <input required type="text" placeholder="Connecticut" className={FIELD_CLASS} />
      </label>
      <label>
        <span className={LABEL_CLASS}>ZIP Code</span>
        <input required type="text" placeholder="35624" className={FIELD_CLASS} />
      </label>
    </div>
  )
}
