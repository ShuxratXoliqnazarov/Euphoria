import savingPrinted from '@/assets/images/home/saving-printed.webp'
import savingHawaiian from '@/assets/images/home/saving-hawaiian.webp'
import savingUrban from '@/assets/images/home/saving-urban.webp'
import blackShorts from '@/assets/images/products/black-shorts.webp'

export const ordersData = {
  active: [
    {
      id: '123456789',
      orderNumber: '#123456789',
      orderDate: '2 June 2023 2:40 PM',
      estimatedDelivery: '8 June 2023',
      status: 'Inprogress',
      paymentMethod: 'Cash on delivery',
      total: 23.0,
      items: [
        {
          id: 1,
          title: 'Black Printed T-shirt',
          color: 'Pink',
          quantity: 1,
          price: 23.0,
          image: savingPrinted,
        },
      ],
    },
    {
      id: '123456790',
      orderNumber: '#123456789',
      orderDate: '2 June 2023 2:40 PM',
      estimatedDelivery: '8 June 2023',
      status: 'Shipped',
      paymentMethod: 'Cash on delivery',
      total: 143.0,
      items: [
        {
          id: 2,
          title: 'Printed blue & white Cote',
          color: 'White',
          quantity: 1,
          price: 143.0,
          image: savingHawaiian,
        },
      ],
    },
    {
      id: '123456791',
      orderNumber: '#123456789',
      orderDate: '2 June 2023 2:40 PM',
      estimatedDelivery: '8 June 2023',
      status: 'Inprogress',
      paymentMethod: 'Cash on delivery',
      total: 96.0,
      items: [
        {
          id: 3,
          title: 'Blue Shirt',
          color: 'Blue',
          quantity: 1,
          price: 96.0,
          image: savingUrban,
        },
      ],
    },
  ],
  cancelled: [
    {
      id: '123456792',
      orderNumber: '#123456780',
      orderDate: '28 May 2023 11:15 AM',
      estimatedDelivery: 'Cancelled',
      status: 'Cancelled',
      paymentMethod: 'Credit Card',
      total: 37.0,
      items: [
        {
          id: 4,
          title: 'Black Shorts',
          color: 'Black',
          quantity: 1,
          price: 37.0,
          image: blackShorts,
        },
      ],
    },
  ],
  completed: [
    {
      id: '123456793',
      orderNumber: '#123456770',
      orderDate: '15 May 2023 09:30 AM',
      estimatedDelivery: '20 May 2023',
      status: 'Delivered',
      paymentMethod: 'Cash on delivery',
      total: 143.0,
      items: [
        {
          id: 5,
          title: 'Printed white cote',
          color: 'White',
          quantity: 1,
          price: 29.0,
          image: savingHawaiian,
        },
        {
          id: 6,
          title: 'Men Blue Shirt',
          color: 'Blue',
          quantity: 1,
          price: 29.0,
          image: savingUrban,
        },
      ],
    },
  ],
}

// Детальные данные заказа для страницы OrderDetails
export const defaultOrderDetails = {
  id: '123456789',
  orderNumber: '#123456789',
  placedOn: '2 June 2023 2:40 PM',
  total: 143.0,
  currentStep: 2, // 1: Order Placed, 2: Inprogress, 3: Shipped, 4: Delivered
  steps: [
    { number: 1, title: 'Order Placed' },
    { number: 2, title: 'Inprogress' },
    { number: 3, title: 'Shipped' },
    { number: 4, title: 'Delivered' },
  ],
  statusNote: {
    date: '8 June 2023 3:40 PM',
    message: 'Your order has been successfully verified.',
  },
  items: [
    {
      id: 1,
      title: 'Printed white cote',
      color: 'White',
      quantity: 1,
      price: 29.0,
      image: savingHawaiian,
    },
    {
      id: 2,
      title: 'Men Blue Shirt',
      color: 'Blue',
      quantity: 1,
      price: 29.0,
      image: savingUrban,
    },
  ],
}
