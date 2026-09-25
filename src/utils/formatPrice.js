// $123.00 — единый формат цены везде (Cart, Checkout, заказы...)
export const formatPrice = (value) => `$${value.toFixed(2)}`
