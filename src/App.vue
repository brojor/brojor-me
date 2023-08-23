<template>
	<div id="cards">
		<div class="card" v-for="(card, i) in 6" :key="i" @mousemove="onMouseMove">
			<div class="card-border"></div>
			<div class="card-content"></div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';

const coords = reactive({
	x: "0px",
	y: "0px",
})

const onMouseMove = (ev: MouseEvent) => {
	const target = ev.currentTarget as HTMLElement
	const rect = target.getBoundingClientRect()

	coords.x = `${ev.clientX - rect.left}px`
	coords.y = `${ev.clientY - rect.top}px`

	console.log(coords);
}

</script>


<style scoped>
#cards {
	display: flex;
	flex-wrap: wrap;
	max-width: 916px;
	gap: 8px;
	width: calc(100% - 20px);
}

.card {
	height: 260px;
	width: 300px;
	background-color: rgba(255, 255, 255, 0.02);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	cursor: pointer;
	position: relative;
}

.card::before,
.card > .card-border {
	content: "";
	border-radius: inherit;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.card::before {
	background: radial-gradient(800px circle at v-bind('coords.x') v-bind('coords.y'),
			rgba(255, 255, 255, 0.06),
			transparent 40%);
	z-index: 3;
}

.card > .card-border {
	background: radial-gradient(400px circle at v-bind('coords.x') v-bind('coords.y'),
			rgba(255, 255, 255, 0.3),
			transparent 40%);
	z-index: 1;
}

.card:hover::before,
.card:hover .card-border {
	opacity: 1;
}

.card .card-content {
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	background-color: var(--card-color);
	border-radius: inherit;
	margin: 1px;
	z-index: 2;
	position: relative;
}
</style>