<template>
	<section class="hero">
		<div class="hero-text">
			<h1>Hi, <br> I'm <span ref="username">Brojor</span>, <br> web developer </h1>
			<p>I like to create amazing things using web technologies</p>
		</div>
		<ScreenCard />
	</section>
	<section>
		<h2>
			Skills and experience:
		</h2>
		<IconCards />
	</section>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconCards from './components/IconCards.vue';
import ScreenCard from './components/ScreenCard.vue';
import { useHackerText } from './composables/useHackerText';

const username = ref<HTMLElement | null>(null)

onMounted(() => {
	const { shuffleLetters } = useHackerText(username.value!)
	shuffleLetters()
})


</script>


<style scoped>
section {
	width: calc(100% - 100px);
	max-width: 716px;
	margin: 3.5rem auto;
}

.hero {
	display: flex;
	margin-top: 7rem;
	justify-content: space-between;
	aspect-ratio: 179/68;
}

.hero-text {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 430px;
}

.hero p {
	font-size: 1.5rem;
	margin: 0;
	font-family: 'Roboto Mono', monospace;
	color: #979797;
	margin-top: 1.5rem;
}

h1 {
	font-size: 3.5rem;
	color: #fff;
	margin: 0;
	line-height: 1.1;
}

h1 span {
	font-family: 'Roboto Mono', monospace;
	background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

@media screen and (max-width: 550px) {
	h1 {
		font-size: 10vw;
	}
	.hero p {
		font-size: 4.3vw;
		margin-top: 4vw;
	}
	section {
		width: calc(100% - 50px);
	}
}
</style>