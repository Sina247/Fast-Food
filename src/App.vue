<template>
	<div>
		<Navbar />
		<router-view />
	</div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
html,
body,
#app {
	height: 100%;
}
</style>
