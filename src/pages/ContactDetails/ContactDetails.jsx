// Страница: ContactDetails (/account)
// Figma: "Contact Details"
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import AccountSidebar from '@/components/layout/AccountSidebar'
import { ROUTES } from '@/constants/routes'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactDetails() {
  const breadcrumbs = [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'My Account', to: ROUTES.CONTACT_DETAILS },
    { label: 'My Info' },
  ]

  return (
    <div className="pb-24">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Account Sidebar */}
          <AccountSidebar />

          {/* Main Content Area */}
          <section className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-[28px] font-bold text-dark mb-6">
              My Info
            </h1>

            {/* Contact Details Card */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-dark mb-4">
                  Contact Details
                </h2>

                <div className="rounded-xl border border-border/30 bg-white p-6 space-y-4 shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-border/20">
                    <div>
                      <p className="text-xs text-gray font-medium">Your Name</p>
                      <p className="text-base font-bold text-dark mt-1">Jhanvi Shah</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray font-medium">Email Address</p>
                      <p className="text-base font-bold text-dark mt-1">jhanvidesai@gmail.com</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray font-medium">Phone Number</p>
                      <p className="text-base font-bold text-dark mt-1">+91 8980252445</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray font-medium">Password</p>
                      <p className="text-base font-bold text-dark mt-1">••••••••••••</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-dark">
                    Address
                  </h2>
                  <Link to={ROUTES.ADD_ADDRESS}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark cursor-pointer transition-colors"
                    >
                      <Plus className="size-4" />
                      <span>Add New</span>
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Address Card 1 */}
                  <div className="rounded-xl border border-border/30 bg-light/40 p-5 space-y-3 relative hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-dark text-base">Jhanvi Shah</h3>
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-dark shadow-xs border border-border/20">
                        Home
                      </span>
                    </div>
                    <p className="text-sm text-gray">
                      +91 8980252445
                    </p>
                    <p className="text-sm text-dark/80 leading-relaxed">
                      1/4 Pragatinagar flats, opp. jain derasar, near Jain derasar, Vijaynagar road, Naranpura Ahmedabad
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        Default delivery address
                      </span>
                    </div>
                  </div>

                  {/* Address Card 2 */}
                  <div className="rounded-xl border border-border/30 bg-light/40 p-5 space-y-3 relative hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-dark text-base">Jhanvi Shah</h3>
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-dark shadow-xs border border-border/20">
                        Office
                      </span>
                    </div>
                    <p className="text-sm text-gray">
                      +91 8980252445
                    </p>
                    <p className="text-sm text-dark/80 leading-relaxed">
                      Athena Tech Park, 4th Floor, Block B, S.G. Highway, Ahmedabad - 380054
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
