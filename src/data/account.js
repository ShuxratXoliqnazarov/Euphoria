// Моковые данные личного кабинета: профиль и адресная книга.
// Когда появится бэкенд/авторизация — заменить на данные из API.

export const profile = {
  name: 'Jaden Smith',
  email: 'jaden.smith@email.com',
  phone: '+1 (555) 012-3456',
}

export const defaultAddresses = [
  {
    id: 1,
    label: 'Home',
    fullName: 'Jaden Smith',
    line: '2118 Thornridge Cir, Syracuse',
    cityState: 'Connecticut 35624',
    phone: '+1 (555) 012-3456',
  },
  {
    id: 2,
    label: 'Office',
    fullName: 'Jaden Smith',
    line: '2715 Ash Dr, San Jose',
    cityState: 'South Dakota 83475',
    phone: '+1 (555) 012-3456',
  },
  {
    id: 3,
    label: 'Home',
    fullName: 'Jaden Smith',
    line: '4517 Washington Ave, Manchester',
    cityState: 'Kentucky 39495',
    phone: '+1 (555) 012-3456',
  },
]
