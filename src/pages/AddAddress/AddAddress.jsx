// Страница: AddAddress (/account/add-address)
// Figma: "Add Address"
// Ответственный: Burhoniddin
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import AccountSidebar from '@/components/account/AccountSidebar'
import { ROUTES } from '@/constants/routes'
import { useAddresses } from '@/hooks/useAddresses'

const FIELD_CLASS =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary'
const LABEL_CLASS = 'mb-2 block text-sm font-medium text-dark'

export default function AddAddress() {
  const navigate = useNavigate()
  const { add } = useAddresses()

  const [form, setForm] = useState({
    label: 'Home',
    firstName: '',
    lastName: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  })

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    add({
      label: form.label,
      fullName: `${form.firstName} ${form.lastName}`.trim(),
      line: form.apartment ? `${form.street}, ${form.apartment}` : form.street,
      cityState: `${form.city}${form.state ? `, ${form.state}` : ''} ${form.zip}`.trim(),
      phone: form.phone,
    })
    navigate(ROUTES.CONTACT_DETAILS)
  }

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          items={[
            { label: 'Home', to: ROUTES.HOME },
            { label: 'My Profile', to: ROUTES.CONTACT_DETAILS },
            { label: 'Add New Address' },
          ]}
        />
        <h1 className="text-3xl font-bold md:text-4xl">Add New Address</h1>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <AccountSidebar />

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
          <label>
            <span className={LABEL_CLASS}>Address Label</span>
            <select value={form.label} onChange={update('label')} className={FIELD_CLASS}>
              <option>Home</option>
              <option>Office</option>
              <option>Other</option>
            </select>
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className={LABEL_CLASS}>First Name</span>
              <input required value={form.firstName} onChange={update('firstName')} className={FIELD_CLASS} />
            </label>
            <label>
              <span className={LABEL_CLASS}>Last Name</span>
              <input required value={form.lastName} onChange={update('lastName')} className={FIELD_CLASS} />
            </label>

            <label className="sm:col-span-2">
              <span className={LABEL_CLASS}>Street Address</span>
              <input required value={form.street} onChange={update('street')} className={FIELD_CLASS} />
            </label>
            <label className="sm:col-span-2">
              <span className={LABEL_CLASS}>Apartment, suite, etc. (optional)</span>
              <input value={form.apartment} onChange={update('apartment')} className={FIELD_CLASS} />
            </label>

            <label>
              <span className={LABEL_CLASS}>City</span>
              <input required value={form.city} onChange={update('city')} className={FIELD_CLASS} />
            </label>
            <label>
              <span className={LABEL_CLASS}>State</span>
              <input required value={form.state} onChange={update('state')} className={FIELD_CLASS} />
            </label>

            <label>
              <span className={LABEL_CLASS}>ZIP Code</span>
              <input required value={form.zip} onChange={update('zip')} className={FIELD_CLASS} />
            </label>
            <label>
              <span className={LABEL_CLASS}>Phone Number</span>
              <input required type="tel" value={form.phone} onChange={update('phone')} className={FIELD_CLASS} />
            </label>
          </div>

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

          <div className="flex items-center gap-6">
            <Button type="submit">Save Address</Button>
            <Button to={ROUTES.CONTACT_DETAILS} variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}
