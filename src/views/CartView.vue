<template>
	<div class="container">		
		<h2>🛒 Your shopping cart</h2>

		<div v-if="!items.length">Your cart is empty</div>

		<div v-else>
			<div v-for="item in items" :key="item.name" class="card" style="display: flex; justify-content: space-between; align-items: center">
				<span>{{ item.name }} × {{ item.qty }}</span>

				<span>{{ item.price * item.qty }} Dollar</span>

				<button @click="removeFromCart(item.name)">Delete</button>
			</div>

			<h3>💰 Total : {{ totalPrice }} Dollar</h3>

			<button @click="clearCart">Empty Cart</button>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const cart = useCartStore();
const { items, totalPrice } = storeToRefs(cart);
const { removeFromCart, clearCart } = cart;
</script>
