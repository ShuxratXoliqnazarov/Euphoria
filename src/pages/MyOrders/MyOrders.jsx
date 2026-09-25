// Страница: My Orders (/account/orders)
// Figma: "My Order"
// Ответственный: Nozina
import { useState } from 'react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import AccountSidebar from '@/components/layout/AccountSidebar'
import OrderCard from './components/OrderCard'
import { ordersData } from '@/data/orders'
import { ROUTES } from '@/constants/routes'

const TABS = [
  { id: 'active', label: 'Active' },
  { id: 'cancelled', label: 'Cancelled' },
  { id: 'completed', label: 'Completed' },
]

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState('active')

  const orders = ordersData[activeTab] || []

  const breadcrumbs = [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'My Account', to: ROUTES.CONTACT_DETAILS },
    { label: 'My Orders' },
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
              My Orders
            </h1>

            {/* Tabs */}
            <div className="flex border-b border-border/30 mb-8">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative py-3.5 px-6 md:px-8 text-base md:text-lg font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-dark bg-light/70 rounded-t-lg font-bold'
                        : 'text-gray hover:text-dark hover:bg-light/30'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-dark rounded-t-sm" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Orders List */}
            {orders.length > 0 ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                {orders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-light/40 rounded-xl border border-border/20">
                <p className="text-gray text-base">
                  No {activeTab} orders found.
                </p>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  )
}
