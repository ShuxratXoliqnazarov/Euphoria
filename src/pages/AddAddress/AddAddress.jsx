// Страница: AddAddress (/account/add-address)
// Figma: "Delivery Address"
// Ответственный: Burhoniddin
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import AccountSidebar from '@/components/account/AccountSidebar'
import { ROUTES } from '@/constants/routes'
import { useAddresses } from '@/hooks/useAddresses'

const FIELD_CLASS = 'w-full rounded-lg bg-light px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary'
const LABEL_CLASS = 'mb-2 block text-sm font-medium text-dark'

export default function AddAddress() {
  const navigate = useNavigate()
  const { add } = useAddresses()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    company: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    phone: '',
    postalCode: '',
    instructions: '',
  })

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    add({
      label: 'Home',
      fullName: `${form.firstName} ${form.lastName}`.trim(),
      phone: form.phone,
      line: form.apartment ? `${form.street}, ${form.apartment}` : form.street,
      defaultType: null,
    })
    navigate(ROUTES.CONTACT_DETAILS)
  }

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: ROUTES.HOME },
          { label: 'My Account', to: ROUTES.CONTACT_DETAILS },
          { label: 'Delivery Address' },
        ]}
      />

      <div className="flex flex-col gap-10 md:flex-row">
        <AccountSidebar />

        <div className="flex-1">
          <h1 className="flex items-center gap-3 text-2xl font-bold">
            <span className="h-6 w-1.5 shrink-0 rounded-full bg-primary" />
            My Info
          </h1>
          <h2 className="mt-6 mb-6 text-lg font-semibold">Add Address</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className={LABEL_CLASS}>First Name*</span>
                <input required placeholder="First Name" value={form.firstName} onChange={update('firstName')} className={FIELD_CLASS} />
              </label>
              <label>
                <span className={LABEL_CLASS}>Last Name*</span>
                <input required placeholder="Last Name" value={form.lastName} onChange={update('lastName')} className={FIELD_CLASS} />
              </label>

              <label>
                <span className={LABEL_CLASS}>Country / Region*</span>
                <input required placeholder="Country / Region" value={form.country} onChange={update('country')} className={FIELD_CLASS} />
              </label>
              <label>
                <span className={LABEL_CLASS}>Company Name</span>
                <input placeholder="Company (optional)" value={form.company} onChange={update('company')} className={FIELD_CLASS} />
              </label>

              <label>
                <span className={LABEL_CLASS}>Street Address*</span>
                <input required placeholder="House number and street name" value={form.street} onChange={update('street')} className={FIELD_CLASS} />
              </label>
              <label>
                <span className={LABEL_CLASS}>Apt, suite, unit</span>
                <input placeholder="apartment, suite, unit, etc. (optional)" value={form.apartment} onChange={update('apartment')} className={FIELD_CLASS} />
              </label>

              <label>
                <span className={LABEL_CLASS}>City*</span>
                <input required placeholder="Town / City" value={form.city} onChange={update('city')} className={FIELD_CLASS} />
              </label>
              <label>
                <span className={LABEL_CLASS}>State*</span>
                <select required value={form.state} onChange={update('state')} className={FIELD_CLASS}>
                  <option value="" disabled>
                    State
                  </option>
                  <option>Connecticut</option>
                  <option>South Dakota</option>
                  <option>Kentucky</option>
                </select>
              </label>

              <label>
                <span className={LABEL_CLASS}>Phone*</span>
                <input required type="tel" placeholder="Phone" value={form.phone} onChange={update('phone')} className={FIELD_CLASS} />
              </label>
              <label>
                <span className={LABEL_CLASS}>Postal Code*</span>
                <input required placeholder="Postal Code" value={form.postalCode} onChange={update('postalCode')} className={FIELD_CLASS} />
              </label>
            </div>

            <label>
              <span className={LABEL_CLASS}>Delivery Instruction</span>
              <textarea
                rows={4}
                placeholder="Delivery Instruction"
                value={form.instructions}
                onChange={update('instructions')}
                className={`${FIELD_CLASS} resize-none`}
              />
            </label>

            <div className="flex flex-col gap-3 text-sm text-gray">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-primary" />
                Set as default shipping address
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-primary" />
                Set as default billing address
              </label>
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit">Save</Button>
              <Button type="button" variant="white" onClick={() => navigate(ROUTES.CONTACT_DETAILS)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
