// Страница: ContactDetails (/account)
// Figma: "Personal Info" (My Info → Contact Details)
// Ответственный: Burhoniddin
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import AccountSidebar from '@/components/account/AccountSidebar'
import { ROUTES } from '@/constants/routes'
import { profile } from '@/data/account'
import { useAddresses } from '@/hooks/useAddresses'
import ProfileField from './components/ProfileField'
import AddressCard from './components/AddressCard'

export default function ContactDetails() {
  const { addresses, remove, setDefault } = useAddresses()

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <Breadcrumbs
        items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'My Account', to: ROUTES.CONTACT_DETAILS }, { label: 'Personal Info' }]}
      />

      <div className="flex flex-col gap-10 md:flex-row">
        <AccountSidebar />

        <div className="flex flex-1 flex-col gap-10">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-bold">
              <span className="h-6 w-1.5 shrink-0 rounded-full bg-primary" />
              My Info
            </h1>
            <h2 className="mt-6 mb-2 text-lg font-semibold">Contact Details</h2>
            <div>
              <ProfileField label="Your Name" value={profile.name} />
              <ProfileField label="Email Address" value={profile.email} />
              <ProfileField label="Phone Number" value={profile.phone} />
              <ProfileField label="Password" value={profile.password} masked />
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Address</h2>
              <Link className="text-sm font-medium text-primary hover:underline" to={ROUTES.ADD_ADDRESS}>
                Add New
              </Link>
            </div>

            {addresses.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border p-6 text-center text-gray">
                Адресов пока нет — добавьте первый.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {addresses.map((address) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    onRemove={() => remove(address.id)}
                    onSetDefault={() => setDefault(address.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
