<template>
	<div id="cards" @mousemove="onMouseMove">
		<div class="card" v-for="(card, i) in cards" :key="i">
			<div class="card-border"></div>
			<div class="card-content">
				<div class="logo">
					<i :class="`i-${card.icon}`"></i>
				</div>	
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import cards from '../cards'

const onMouseMove = (ev: MouseEvent) => {
	const target = ev.currentTarget as HTMLElement

	for (const card of target.children as HTMLCollectionOf<HTMLElement>) {
		const rect = card.getBoundingClientRect()
		card.style.setProperty('--mouse-x', `${ev.clientX - rect.left}px`)
		card.style.setProperty('--mouse-y', `${ev.clientY - rect.top}px`)
	}
}
</script>


<style scoped>
#cards {
	display: flex;
	flex-wrap: wrap;
	max-width: 766px;
	gap: 4px;
	width: calc(100% - 20px);
}

#cards:hover>.card>.card-border {
	opacity: 1;
}

.card {
	height: 130px;
	width: 150px;
	background-color: rgba(255, 255, 255, 0.02);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	cursor: pointer;
	position: relative;
}

.card::before,
.card>.card-border {
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
	background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%);
	z-index: 3;
}

.card>.card-border {
	background: radial-gradient(200px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.3),
			transparent 40%);
	z-index: 1;
}

.card:hover::before {
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
	display: flex;
	align-items: center;
}

.logo {
	width: 50px;
	height: 50px;
	margin: auto;
}

i {
	display: block;
	width: 100%;
	height: 100%;
}
</style>