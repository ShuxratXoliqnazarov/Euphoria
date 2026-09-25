import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

import Home from '@/pages/Home/Home'
import ProductList from '@/pages/ProductList/ProductList'
import ProductDetails from '@/pages/ProductDetails/ProductDetails'

import Cart from '@/pages/Cart/Cart'
import Checkout from '@/pages/Checkout/Checkout'
import ConfirmedOrder from '@/pages/ConfirmedOrder/ConfirmedOrder'

import SignIn from '@/pages/SignIn/SignIn'
import SignUp from '@/pages/SignUp/SignUp'
import ResetPassword from '@/pages/ResetPassword/ResetPassword'
import CheckEmail from '@/pages/CheckEmail/CheckEmail'
import Verification from '@/pages/Verification/Verification'
import CreateNewPassword from '@/pages/CreateNewPassword/CreateNewPassword'

import ContactDetails from '@/pages/ContactDetails/ContactDetails'
import AddAddress from '@/pages/AddAddress/AddAddress'
import Wishlist from '@/pages/Wishlist/Wishlist'
import MyOrders from '@/pages/MyOrders/MyOrders'
import OrderDetails from '@/pages/OrderDetails/OrderDetails'

import NotFound from '@/pages/NotFound/NotFound'

// Новая страница = 1) путь в constants/routes.js  2) строчка в children
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      // Магазин
      { index: true, element: <Home /> },
      { path: ROUTES.PRODUCT_LIST, element: <ProductList /> },
      { path: ROUTES.PRODUCT_DETAILS, element: <ProductDetails /> },

      // Корзина и заказ
      { path: ROUTES.CART, element: <Cart /> },
      { path: ROUTES.CHECKOUT, element: <Checkout /> },
      { path: ROUTES.CONFIRMED_ORDER, element: <ConfirmedOrder /> },

      // Личный кабинет
      { path: ROUTES.CONTACT_DETAILS, element: <ContactDetails /> },
      { path: ROUTES.ADD_ADDRESS, element: <AddAddress /> },
      { path: ROUTES.WISHLIST, element: <Wishlist /> },
      { path: ROUTES.MY_ORDERS, element: <MyOrders /> },
      { path: ROUTES.ORDER_DETAILS, element: <OrderDetails /> },

      // Figma: "Error Page"
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ],
  },
  {
    // Авторизация: свой хедер, без футера
    element: <AuthLayout />,
    children: [
      { path: ROUTES.SIGN_IN, element: <SignIn /> },
      { path: ROUTES.SIGN_UP, element: <SignUp /> },
      { path: ROUTES.RESET_PASSWORD, element: <ResetPassword /> },
      { path: ROUTES.CHECK_EMAIL, element: <CheckEmail /> },
      { path: ROUTES.VERIFICATION, element: <Verification /> },
      { path: ROUTES.CREATE_NEW_PASSWORD, element: <CreateNewPassword /> },
    ],
  },
])
