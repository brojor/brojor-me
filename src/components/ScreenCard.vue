<template>
	<div class="screen">
		<div class="screen-image" />
		<div class="screen-overlay"></div>
		<div class="screen-content"></div>
	</div>
</template>


<script setup lang="ts">

</script>


<style scoped>
.screen {
	min-width: 180px;
	border: 1px solid rgb(var(--primary-rgb)/80%);
	aspect-ratio: 2/3;
	border-radius: 10px;
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
	filter: sepia(1) hue-rotate(150deg);
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
	background-size: 100% 6px;
	height: 100%;
	width: 100%;
	animation: pan-overlay 22s infinite linear;
	position: absolute;
	z-index: 2;
	left: 0px;
	top: 0px;
}
</style>