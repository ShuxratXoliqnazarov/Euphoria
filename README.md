# Euphoria

Командный проект — интернет-магазин одежды по макету из Figma.

**Стек:** React + Vite · Tailwind CSS v4 · React Router · JavaScript · [lucide-react](https://lucide.dev/icons) (иконки)

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
├── app/
│   └── router.jsx          # все маршруты приложения
├── constants/
│   └── routes.js           # пути страниц (ROUTES.HOME и т.д.)
├── layouts/
│   ├── MainLayout.jsx      # Header + <Outlet /> + Footer
│   └── AuthLayout.jsx      # AuthHeader + <Outlet /> (страницы входа, без футера)
├── components/
│   ├── layout/             # Header, AuthHeader, Footer, ScrollToTop — части каркаса
│   ├── auth/               # AuthSplit (фото + форма), FormField, PasswordField, SocialLogin
│   └── ui/                 # переиспользуемые: Button, Container, Logo, ProductCard, Rating,
│                           #   SectionTitle, SearchInput, BrandIcons (соцсети)
├── pages/                  # одна папка = одна страница
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── components/     # секции, которые нужны только этой странице (Hero, Feedback...)
│   └── NotFound/
├── hooks/                  # свои хуки (useCart, useToggle...)
├── utils/                  # функции-помощники (formatPrice...)
├── data/                   # моковые данные: products, categories, brands, feedbacks, footer
├── assets/
│   ├── images/             # картинки из Figma (webp), разложены по папкам:
│   │                       #   home, products, categories, brands, avatars, auth
│   └── icons/
├── index.css               # Tailwind + цвета/шрифты из Figma
└── main.jsx
```

## Страницы и кто за что отвечает

Впиши своё имя напротив своей страницы (и в комментарий `// Ответственный:` в самом файле).

| Фрейм в Figma | Путь | Файл | Ответственный |
|---|---|---|---|
| home page | `/` | `pages/Home/Home.jsx` | Shuhrat |
| Products List page | `/products` | `pages/ProductList/ProductList.jsx` | Shuhrat |
| Product detail Page | `/product/:id` | `pages/ProductDetails/ProductDetails.jsx` | Shuhrat |
| Cart Page + Empty Cart | `/cart` | `pages/Cart/Cart.jsx` | — |
| Checkout | `/checkout` | `pages/Checkout/Checkout.jsx` | — |
| Confirmed Order | `/order-confirmed` | `pages/ConfirmedOrder/ConfirmedOrder.jsx` | — |
| Sign In Page | `/sign-in` | `pages/SignIn/SignIn.jsx` | Shuhrat |
| Sign up page | `/sign-up` | `pages/SignUp/SignUp.jsx` | Shuhrat |
| Reset Password | `/reset-password` | `pages/ResetPassword/ResetPassword.jsx` | Shuhrat |
| Check Email | `/check-email` | `pages/CheckEmail/CheckEmail.jsx` | Shuhrat |
| Verification | `/verification` | `pages/Verification/Verification.jsx` | Shuhrat |
| Create New Password | `/new-password` | `pages/CreateNewPassword/CreateNewPassword.jsx` | Shuhrat |
| Contact Details | `/account` | `pages/ContactDetails/ContactDetails.jsx` | — |
| Add Address | `/account/add-address` | `pages/AddAddress/AddAddress.jsx` | — |
| wishlist + Empty wishlist | `/account/wishlist` | `pages/Wishlist/Wishlist.jsx` | Nozina |
| My Order | `/account/orders` | `pages/MyOrders/MyOrders.jsx` | Nozina |
| Order Details | `/account/orders/:id` | `pages/OrderDetails/OrderDetails.jsx` | Nozina |
| Header (общий) | — | `components/layout/Header.jsx` | Shuhrat |
| Footer (общий) | — | `components/layout/Footer.jsx` | Shuhrat |
| Error Page | `*` | `pages/NotFound/NotFound.jsx` | Nozina |

> Empty Cart / Empty wishlist — это не отдельные файлы, а состояние страницы Cart / Wishlist (когда список пустой).

## Правила команды

1. **Импорты через `@`** — `import Button from '@/components/ui/Button'`, без `../../../`.
2. **Одна страница — одна папка** в `pages/`. Секции страницы кладём в `pages/<Page>/components/`.
3. **Компонент нужен на 2+ страницах** → переносим в `components/ui/`.
4. **Цвета только из темы:** `bg-primary`, `text-dark`, `text-gray`, `bg-light`, `border-border`.
   Не пишем `bg-[#8A33FD]` — если цвет меняется, правим один раз в `src/index.css` (`@theme`).
5. Ширина контента — через `<Container>`.
6. Ссылки — через `ROUTES`: `<Link to={ROUTES.HOME}>`.

## Как добавить страницу

1. `src/pages/Cart/Cart.jsx`
2. В `src/constants/routes.js` → `CART: '/cart'`
3. В `src/app/router.jsx` → `{ path: ROUTES.CART, element: <Cart /> }` внутрь `children`
