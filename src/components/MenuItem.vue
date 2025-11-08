<template>
	<div class="menu-item">
		<img :src="image" />

		<h3>{{ name }}</h3>

		<p>{{ description }}</p>

		<span class="price">{{ price }} Dollar</span>

		<button @click="addToCart">Add to Cart</button>
	</div>
</template>

<script setup>
import { cart } from "../stores/cart.js";

const props = defineProps({
	name: String,
	description: String,
	price: Number,
	image: String,
});

const addToCart = () => {
	cart.addItem({
		name: props.name,
		price: props.price,
		image: props.image,
	});
	alert(`${props.name} Added to Cart 🛒`);
};
</script>
