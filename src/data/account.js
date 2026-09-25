// Моковые данные личного кабинета: профиль и адресная книга.
// Когда появится бэкенд/авторизация — заменить на данные из API.

export const profile = {
  firstName: 'Jhanvi',
  name: 'Jhanvi Shah',
  email: 'Jhanvi@gmail.com',
  phone: '8980252445',
  password: '••••••••',
}

const ADDRESS_LINE = '1/4 Pragatinagar Flats, opp. Jain derasar, near Jain derasar, Vijaynagar road'

// defaultType: какой пилюлей подсвечивать карточку ("billing" / "shipping" / null)
export const defaultAddresses = [
  { id: 1, label: 'Home', fullName: profile.name, phone: profile.phone, line: ADDRESS_LINE, defaultType: 'billing' },
  { id: 2, label: 'Home', fullName: profile.name, phone: profile.phone, line: ADDRESS_LINE, defaultType: 'shipping' },
  { id: 3, label: 'Office', fullName: profile.name, phone: profile.phone, line: ADDRESS_LINE, defaultType: null },
  { id: 4, label: 'Home2', fullName: profile.name, phone: profile.phone, line: ADDRESS_LINE, defaultType: null },
]
