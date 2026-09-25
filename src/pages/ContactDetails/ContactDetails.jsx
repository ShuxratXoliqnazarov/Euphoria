// Страница: ContactDetails (/account)
// Figma: "Contact Details"
// Ответственный: Burhoniddin
import { Plus } from 'lucide-react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import AccountSidebar from '@/components/account/AccountSidebar'
import { ROUTES } from '@/constants/routes'
import { profile } from '@/data/account'
import { useAddresses } from '@/hooks/useAddresses'
import ProfileField from './components/ProfileField'
import AddressCard from './components/AddressCard'

export default function ContactDetails() {
  const { addresses, remove } = useAddresses()

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'My Profile' }]} />
        <h1 className="text-3xl font-bold md:text-4xl">My Profile</h1>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <AccountSidebar />

        <div className="flex flex-1 flex-col gap-10">
          <section className="rounded-xl border border-border p-6">
            <h2 className="mb-2 text-lg font-semibold">Personal Information</h2>
            <ProfileField label="Full Name" value={profile.name} />
            <ProfileField label="Email Address" value={profile.email} />
            <ProfileField label="Phone Number" value={profile.phone} />
          </section>

          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">My Addresses</h2>
              <Button to={ROUTES.ADD_ADDRESS} variant="outline" className="px-4 py-2 text-sm">
                <Plus className="size-4" />
                Add New
              </Button>
            </div>

            {addresses.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border p-6 text-center text-gray">
                Адресов пока нет — добавьте первый.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {addresses.map((address) => (
                  <AddressCard key={address.id} address={address} onDelete={() => remove(address.id)} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </Container>
  )
}
