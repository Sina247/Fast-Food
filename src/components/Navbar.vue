<template>
	<nav class="navbar">
		<router-link to="/">Home</router-link>

		<router-link to="/menu">Menu</router-link>

		<router-link to="/cart">Shopping Cart ({{ cartCount }})</router-link>
	</nav>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
const cartCount = computed(() => cart.items.length);
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: center;
	gap: 2rem;
	background: #1f1f1f;
	padding: 1rem;
}

a {
	color: var(--text);
	text-decoration: none;
	font-weight: bold;
}

a.router-link-active {
	color: var(--accent);
}
</style>
