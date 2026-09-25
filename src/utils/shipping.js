// Условная доставка: бесплатно от $150, иначе фикс $15. Используется в Cart и Checkout.
export const FREE_SHIPPING_FROM = 150
export const SHIPPING_FEE = 15

export const getShipping = (subtotal) => (subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE)
