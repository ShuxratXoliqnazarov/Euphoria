// Все пути приложения в одном месте.
// В компонентах пишем <Link to={ROUTES.HOME}>, а не '/'.
export const ROUTES = {
  // Магазин
  HOME: '/',
  PRODUCT_LIST: '/products',
  PRODUCT_DETAILS: '/product/:id',

  // Корзина и заказ
  CART: '/cart',
  CHECKOUT: '/checkout',
  CONFIRMED_ORDER: '/order-confirmed',

  // Авторизация
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  RESET_PASSWORD: '/reset-password',
  CHECK_EMAIL: '/check-email',
  VERIFICATION: '/verification',
  CREATE_NEW_PASSWORD: '/new-password',

  // Личный кабинет
  CONTACT_DETAILS: '/account',
  ADD_ADDRESS: '/account/add-address',
  WISHLIST: '/account/wishlist',
  MY_ORDERS: '/account/orders',
  ORDER_DETAILS: '/account/orders/:id',

  NOT_FOUND: '*',
}

// Для динамических путей: <Link to={productPath(5)}> → /product/5
export const productPath = (id) => `/product/${id}`
export const orderPath = (id) => `/account/orders/${id}`
