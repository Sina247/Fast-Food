import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(food) {
      const exist = this.items.find(i => i.name === food.name)
      if (exist) exist.qty++
      else this.items.push({ ...food, qty: 1 })
    },
    removeFromCart(name) {
      this.items = this.items.filter(i => i.name !== name)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    totalPrice: state =>
      state.items.reduce((acc, i) => acc + i.price * i.qty, 0)
  }
})
