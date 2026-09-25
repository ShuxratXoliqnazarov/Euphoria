import { useSyncExternalStore } from 'react'

// Глобальная корзина: {productId, qty}[], хранится в localStorage.
// Товары по id подтягиваются отдельно через getProductById — здесь только id и количество.
const STORAGE_KEY = 'euphoria-cart'

function readInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    /* localStorage недоступен — начинаем с демо-корзины */
  }
  return [
    { productId: 11, qty: 1, color: 'Yellow', size: 'M', shipping: 0 },
    { productId: 3, qty: 2, color: 'Levender', size: 'XXL', shipping: 0 },
    { productId: 1, qty: 2, color: 'Black', size: 'XXL', shipping: 5 },
  ]
}

let items = readInitial()
const listeners = new Set()

function emit() {
  listeners.forEach((listener) => listener())
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* доступ к localStorage запрещён (приватный режим и т.п.) — просто не сохраняем */
  }
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return items
}

export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot)

  return {
    items: snapshot,
    count: snapshot.reduce((sum, item) => sum + item.qty, 0),

    add(productId, qty = 1) {
      const existing = items.find((item) => item.productId === productId)
      items = existing
        ? items.map((item) => (item.productId === productId ? { ...item, qty: item.qty + qty } : item))
        : [...items, { productId, qty }]
      emit()
    },

    setQty(productId, qty) {
      items =
        qty <= 0
          ? items.filter((item) => item.productId !== productId)
          : items.map((item) => (item.productId === productId ? { ...item, qty } : item))
      emit()
    },

    remove(productId) {
      items = items.filter((item) => item.productId !== productId)
      emit()
    },

    clear() {
      items = []
      emit()
    },
  }
}
