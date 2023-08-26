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
	width: calc(100% - 20px);
	max-width: 716px;
	margin: 3.5rem auto;
}

.hero {
	display: flex;
	max-width: 716px;
	justify-content: space-between;
}

.hero-text {
	display: flex;
	flex-direction: column;
	width: 75%;
	justify-content: flex-end;
}

.hero p {
	font-size: 1.5rem;
	margin: auto;
	font-family: 'Roboto Mono', monospace;
	color: #979797;
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
</style>