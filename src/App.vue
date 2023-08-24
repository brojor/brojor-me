<template>
	<div class="screen">
		<div class="screen-image" />
		<div class="screen-overlay"></div>
		<div class="screen-content"></div>
	</div>
	<IconCards />
</template>


<script setup lang="ts">
import IconCards from './components/IconCards.vue';


</script>


<style scoped>
.screen {
	width: 300px;
	border: 2px solid rgb(var(--primary-rgb)/80%);
	aspect-ratio: 10/16;
	border-radius: 1rem;
	background-color: rgb(var(--primary-rgb)/15%);
	overflow: hidden;
	position: relative;
	display: flex;
}

.screen>.screen-image {
	background-image: url('@/assets/photo.png');
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
	left: 0px;
	top: 0px;
	background-size: 150%;
	background-position: 60% 100%;
	filter: sepia(1) hue-rotate(118deg);
	opacity: 0.8;
}

@keyframes pan-overlay {
	from {
		background-position: 0% 0%;
	}

	to {
		background-position: 0% -100%;
	}
}

.screen-overlay {
	background: linear-gradient(rgb(var(--primary-rgb) / 0.15),
			rgb(var(--primary-rgb) / 0.15) 3px,
			transparent 3px,
			transparent 6px);
	background-size: 100% 9px;
	height: 100%;
	width: 100%;
	animation: pan-overlay 22s infinite linear;
	position: absolute;
	z-index: 2;
	left: 0px;
	top: 0px;
}

.screen>.screen-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	flex-grow: 1;
	gap: 4rem;
	position: relative;
	z-index: 3;
	margin: 1rem;
	padding-bottom: 6rem;
	border: 1px solid rgb(var(--primary-rgb) / 70%);
	border-radius: 0.6rem;
}

.screen:after,
.screen:before {
	content: "";
	height: 3px;
	position: absolute;
	z-index: 4;
	left: 50%;
	translate: -50% 0%;
	background-color: white;
}

.screen:before {
	width: 15%;
	top: 0rem;
	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;
}

.screen:after {
	width: 25%;
	bottom: 0rem;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
}
</style>