// Моковые товары. Когда появится бэкенд — заменим на запрос к API.
import blackSweatshirt from '@/assets/images/products/black-sweatshirt.webp'
import linePatternHoodie from '@/assets/images/products/line-pattern-hoodie.webp'
import blackShorts from '@/assets/images/products/black-shorts.webp'
import lavenderHoodie from '@/assets/images/products/lavender-hoodie.webp'
import leavesPattern from '@/assets/images/products/leaves-pattern.webp'
import graphicCropTop from '@/assets/images/products/graphic-crop-top.webp'
import graySweatshirt from '@/assets/images/products/gray-sweatshirt.webp'
import yellowSweatshirt from '@/assets/images/products/yellow-sweatshirt.webp'
import flowerCropTop from '@/assets/images/products/flower-crop-top.webp'
import graphicTshirt from '@/assets/images/products/graphic-tshirt.webp'
import whiteTshirt from '@/assets/images/products/white-tshirt.webp'
import urbanJacket from '@/assets/images/products/urban-jacket.webp'
import plainWhiteTshirt from '@/assets/images/products/plain-white-tshirt.webp'
import onePiece from '@/assets/images/products/one-piece.webp'
import pinkHoodie from '@/assets/images/products/pink-hoodie.webp'
import womenTees from '@/assets/images/categories/women-tees.webp'
import womenBoxers from '@/assets/images/categories/women-boxers.webp'
import menHoodies from '@/assets/images/categories/men-hoodies.webp'
import menShirts from '@/assets/images/categories/men-shirts.webp'
import urbanShirtMan from '@/assets/images/home/saving-urban.webp'

export const products = [
  { id: 1, title: 'Black Sweatshirt with Print', brand: "Jhanvi's Brand", price: 123, image: blackSweatshirt, gallery: [pinkHoodie, blackSweatshirt], gender: 'women' },
  { id: 2, title: 'White T-shirt', brand: "Helen's Brand", price: 11, image: womenBoxers, gender: 'women' },
  { id: 3, title: 'Levender Hoodie with Print', brand: "Nike's Brand", price: 119, image: lavenderHoodie, gender: 'women' },
  { id: 4, title: 'Leaves Pattern White Top', brand: "paypal's Brand", price: 77, image: leavesPattern, gender: 'women' },
  { id: 5, title: 'White Graphic Crop Top', brand: "woden's Brand", price: 29, image: graphicCropTop, gender: 'women' },
  { id: 6, title: 'Black Shorts', brand: "MM's Brand", price: 37, image: blackShorts, gender: 'women' },
  { id: 7, title: 'Barboreal Gray Sweatshirt', brand: "Priya's Brand", price: 77, image: graySweatshirt, gender: 'women' },
  { id: 8, title: 'Yellow Sweatshirt', brand: "woden's Brand", price: 29, image: yellowSweatshirt, gender: 'women' },
  { id: 9, title: 'Flower Pattern Black Crop Top', brand: "MM's Brand", price: 37, image: flowerCropTop, gender: 'women' },
  { id: 10, title: "I Don't Graphic T-shirt", brand: "Nisargi's Brand", price: 77, image: graphicTshirt, gender: 'women' },
  { id: 11, title: 'Blue Flower Print Crop Top', brand: "Mellon's Brand", price: 29, image: womenTees, gender: 'women' },
  { id: 12, title: 'line Pattern Black Hoodie', brand: "AS's Brand", price: 37, image: linePatternHoodie, gender: 'women' },

  { id: 13, title: 'White T-Shirt', brand: "Priya's Brand", price: 13, image: whiteTshirt, gender: 'women' },
  { id: 14, title: 'Dark Green Sweatshirt', brand: "Roboto's Brand", price: 127, image: menHoodies, gender: 'men' },
  { id: 15, title: 'Levender Sweatshirt', brand: "Jhanvi's Brand", price: 133, image: lavenderHoodie, gender: 'women' },
  { id: 16, title: 'Urban jacket with white shirt', brand: "Sagar's Brand", price: 79, image: urbanJacket, gender: 'men' },
  { id: 17, title: 'Plain White T-Shirt', brand: "Jhanvi's Brand", price: 123, image: plainWhiteTshirt, gender: 'men' },
  { id: 18, title: 'Checks Shirt with white T-shirt', brand: "H.M's Brand", price: 123, image: menShirts, gender: 'men' },
  { id: 19, title: 'One piece black top & skirt', brand: "Nike's Brand", price: 123, image: onePiece, gender: 'women' },
  { id: 20, title: 'Denim Blue Shirt', brand: "MOMO's Brand", price: 38, image: urbanShirtMan, gender: 'men' },
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))

// Подборки для разных секций
export const limelightProducts = [1, 12, 6, 3].map(getProductById)
export const similarProducts = [13, 14, 15, 16, 17, 18, 19, 20].map(getProductById)
