<template>
	<div class="container">
		<div class="menu-grid">
			<FoodItem v-for="food in foods" :key="food.name" :food="food" />
		</div>
	</div>
</template>

<script setup>
import FoodItem from "../components/FoodItem.vue";

const foods = [
	{
		name: "Pizza",
		price: 1500,
		image: "../../public/pizza.png",
	},

	{
		name: "Sandwich",
		price: 1200,
		image: "../../public/sandwich.png",
	},
	{
		name: "burger",
		price: 6300,
		image: "../../public/burger.png",
	},
	{
		name: "Stake",
		price: 200,
		image: "../../public/stake.png",
	},
	{
		name: "Mix Fast Food",
		price: 1300,
		image: "../../public/sokhari.png",
	},
	{
		name: "Pasta",
		price: 7000,
		image: "../../public/pasta.png",
	},
	{
		name: "Kebab",
		price: 6000,
		image: "../../public/kebab.png",
	},
	{
		name: "Chicken",
		price: 9800,
		image: "../../public/morgh.png",
	},
	{
		name: "Mirza Ghasemi",
		price: 5200,
		image: "../../public/guilani.png",
	},
	{
		name: "Persian Rice",
		price: 9800,
		image: "../../public/polo-irani.png",
	},
	{
		name: "Persian Stew",
		price: 8000,
		image: "../../public/khoresh.png",
	},
		{
		name: "Persian Lamb Stew",
		price: 8000,
		image: "../../public/sonnati.png",
	},
		{
		name: "Grilled Kebab",
		price: 2400,
		image: "../../public/joje-kebab.png",
	},
			{
		name: "Meat Kebab",
		price: 8000,
		image: "../../public/meat-kebab.png",
	},
];
</script>

<style scoped>
.menu-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin-top: 2rem;
}
</style>
