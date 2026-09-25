import menShirts from '@/assets/images/categories/men-shirts.webp'
import menPrinted from '@/assets/images/categories/men-printed.webp'
import menPlain from '@/assets/images/categories/men-plain.webp'
import menPolo from '@/assets/images/categories/men-polo.webp'
import menHoodies from '@/assets/images/categories/men-hoodies.webp'
import menJeans from '@/assets/images/categories/men-jeans.webp'
import menActivewear from '@/assets/images/categories/men-activewear.webp'
import menBoxers from '@/assets/images/categories/men-boxers.webp'
import womenHoodies from '@/assets/images/categories/women-hoodies.webp'
import womenCoats from '@/assets/images/categories/women-coats.webp'
import womenTees from '@/assets/images/categories/women-tees.webp'
import womenBoxers from '@/assets/images/categories/women-boxers.webp'
import fullSleeve from '@/assets/images/products/full-sleeve.webp'
import activeTshirt from '@/assets/images/products/active-tshirt.webp'
import urbanShirt from '@/assets/images/products/urban-shirt.webp'

export const newArrivals = [
  { id: 1, title: 'Knitted Joggers', image: menActivewear },
  { id: 2, title: 'Full Sleeve', image: fullSleeve },
  { id: 3, title: 'Active T-Shirts', image: activeTshirt },
  { id: 4, title: 'Urban Shirts', image: urbanShirt },
  { id: 5, title: 'Hoodies & Sweetshirt', image: menHoodies },
  { id: 6, title: 'Jeans', image: menJeans },
]

export const menCategories = [
  { id: 1, title: 'Shirts', image: menShirts },
  { id: 2, title: 'Printed T-Shirts', image: menPrinted },
  { id: 3, title: 'Plain T-Shirt', image: menPlain },
  { id: 4, title: 'Polo T-Shirt', image: menPolo },
  { id: 5, title: 'Hoodies & Sweetshirt', image: menHoodies },
  { id: 6, title: 'Jeans', image: menJeans },
  { id: 7, title: 'Activewear', image: menActivewear },
  { id: 8, title: 'Boxers', image: menBoxers },
]

export const womenCategories = [
  { id: 1, title: 'Hoodies & Sweetshirt', image: womenHoodies },
  { id: 2, title: 'Coats & Parkas', image: womenCoats },
  { id: 3, title: 'Tees & T-Shirt', image: womenTees },
  { id: 4, title: 'Boxers', image: womenBoxers },
]

// Фильтры на странице списка товаров
export const filterCategories = ['Tops', 'Printed T-shirts', 'Plain T-shirts', 'Kurti', 'Boxers', 'Full sleeve T-shirts', 'Joggers', 'Payjamas', 'Jeans']
export const dressStyles = ['Classic', 'Casual', 'Business', 'Sport', 'Elegant', 'Formal (evening)']
export const sizes = ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']
export const colors = [
  { name: 'Purple', value: '#8434e1' },
  { name: 'Black', value: '#252525' },
  { name: 'Red', value: '#f35528' },
  { name: 'Orange', value: '#f16f2b' },
  { name: 'Navy', value: '#345eff' },
  { name: 'White', value: '#ffffff' },
  { name: 'Broom', value: '#d67e3b' },
  { name: 'Green', value: '#48bc4e' },
  { name: 'Yellow', value: '#fdc761' },
  { name: 'Grey', value: '#e4e5e8' },
  { name: 'Pink', value: '#e08d9d' },
  { name: 'Blue', value: '#3fdeff' },
]
