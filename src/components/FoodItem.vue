<template>
	<div class="card">
		<img :src="food.image" class="food-img" />

		<h3>{{ food.name }}</h3>

		<p>{{ food.price }} Dollar</p>

		<button @click="addToCart(food)">Add to Cart</button>
	</div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const props = defineProps({ food: Object });
const cart = useCartStore();
const addToCart = (food) => cart.addToCart(food);
</script>

<style scoped>
.food-img {
	width: 100%;
	border-radius: 10px;
	margin-bottom: 0.5rem;
}
</style>
