import { useSyncExternalStore } from 'react'
import { defaultAddresses } from '@/data/account'

// Адресная книга: ContactDetails показывает список, AddAddress — добавляет. Общий стор на двоих.
const STORAGE_KEY = 'euphoria-addresses'

function readInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    /* localStorage недоступен — начинаем со стандартных адресов */
  }
  return defaultAddresses
}

let addresses = readInitial()
const listeners = new Set()

function emit() {
  listeners.forEach((listener) => listener())
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses))
  } catch {
    /* доступ к localStorage запрещён — не сохраняем */
  }
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return addresses
}

export function useAddresses() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot)

  return {
    addresses: snapshot,

    add(address) {
      addresses = [...addresses, { ...address, id: Date.now() }]
      emit()
    },

    remove(id) {
      addresses = addresses.filter((address) => address.id !== id)
      emit()
    },
  }
}
