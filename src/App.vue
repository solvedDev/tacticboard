<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './components/common/BaseButton.vue'
import Player from './components/Player.vue'
import Field from './components/Field.vue'
import { useStorage } from '@vueuse/core'

const playerCount = useStorage('playerCount', 0)
const opponentPlayerCount = useStorage('opponentPlayerCount', 0)

function clear() {
	playerCount.value = 0
	opponentPlayerCount.value = 0
}
</script>

<template>
	<Field />

	<BaseButton @click="playerCount++">+</BaseButton>
	<BaseButton @click="clear">Clear</BaseButton>
	<BaseButton class="float-right" @click="opponentPlayerCount++">
		+
	</BaseButton>
	<Player v-for="i in playerCount" :playerNumber="i" />
	<Player
		v-for="i in opponentPlayerCount"
		:playerNumber="i"
		:isOpponent="true"
	/>
</template>

<style>
html {
	overflow-y: hidden !important;
	overscroll-behavior: contain;
}
body {
	@apply bg-white;

	overscroll-behavior: contain;
}
#app {
	@apply mx-[4rem] bg-lime-600 border border-2 border-white;

	height: 100vh;
	width: calc(100vw - 8rem);
}
</style>
