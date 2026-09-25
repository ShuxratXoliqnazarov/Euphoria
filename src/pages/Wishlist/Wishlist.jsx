// Страница: Wishlist (/account/wishlist)
// Figma: "wishlist + Empty wishlist"
// Ответственный: Nozina
import { useState } from 'react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import AccountSidebar from '@/components/layout/AccountSidebar'
import WishlistItem from './components/WishlistItem'
import WishlistEmpty from './components/WishlistEmpty'
import RecentlyViewed from './components/RecentlyViewed'
import { initialWishlistItems } from '@/data/wishlist'
import { ROUTES } from '@/constants/routes'

export default function Wishlist() {
  const [items, setItems] = useState(initialWishlistItems)

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleRestore = () => {
    setItems(initialWishlistItems)
  }

  const handleClearAll = () => {
    setItems([])
  }

  const breadcrumbs = [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'My Account', to: ROUTES.CONTACT_DETAILS },
    { label: 'Wishlist' },
  ]

  return (
    <div className="pb-20">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Account Sidebar */}
          <AccountSidebar />

          {/* Main Content Area */}
          <section className="flex-1 min-w-0">
            {items.length > 0 ? (
              <div className="animate-in fade-in duration-300">
                {/* Header row with Title and actions */}
                <div className="flex items-center justify-between border-b border-border/30 pb-4 mb-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl md:text-[28px] font-bold text-dark">
                      Wishlist
                    </h1>
                    <span className="grid place-items-center size-6 rounded-full bg-light text-xs font-bold text-gray">
                      {items.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs md:text-sm font-medium text-gray hover:text-danger transition-colors cursor-pointer"
                  >
                    Clear Wishlist
                  </button>
                </div>

                {/* Items List */}
                <div className="flex flex-col">
                  {items.map((item) => (
                    <WishlistItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <WishlistEmpty onRestore={handleRestore} />
            )}
          </section>
        </div>

        {/* Recently Viewed (Figma: Empty State has Recently Viewed section) */}
        {items.length === 0 && <RecentlyViewed />}
      </Container>
    </div>
  )
}
