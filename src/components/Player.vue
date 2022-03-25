<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useDraggable, useStorage } from '@vueuse/core'

const props = withDefaults(
	defineProps<{ isOpponent?: boolean; playerNumber: number }>(),
	{
		isOpponent: false,
	}
)

// HTMLElement references
const player = ref<HTMLElement | null>(null)
const editInput = ref<HTMLElement | null>(null)
const playerId = props.playerNumber

const state = useStorage(
	props.isOpponent ? `opponent#${playerId}` : `player#${playerId}`,
	{
		playerNumber: playerId,
		position: { x: props.isOpponent ? window.innerWidth - 60 : 12, y: 60 },
	}
)

const mode = ref<'readonly' | 'edit'>('readonly')
const playerNumber = ref(state.value.playerNumber)
const { style } = useDraggable(player, {
	initialValue: state.value.position,
	onStart: () => (mode.value === 'readonly' ? undefined : false),
	onEnd: (position) => {
		state.value = {
			playerNumber: playerNumber.value,
			position,
		}
	},
	preventDefault: true,
	stopPropagation: true,
})

watch(mode, () => {
	if (mode.value === 'edit') {
		nextTick(() => editInput.value?.focus())
	}
})
watch(playerNumber, () => {
	state.value = {
		...state.value,
		playerNumber: playerNumber.value,
	}
})
</script>

<template>
	<div
		ref="player"
		:style="style"
		class="cursor-pointer select-none touch-none absolute h-12 w-12 border border-2 rounded-full bg-white grid content-center text-center"
		:class="{
			'border-lime-900 text-lime-900 bg-white': !props.isOpponent,
			'border-white text-white bg-red-800': props.isOpponent,
		}"
		@dblclick="mode = mode === 'readonly' ? 'edit' : 'readonly'"
	>
		<span v-if="mode === 'readonly'" class="touch-none">
			{{ playerNumber }}
		</span>
		<input
			v-else
			class="w-8 touch-none"
			v-model="playerNumber"
			ref="editInput"
			@keydown.enter="mode = 'readonly'"
			@blur="mode = 'readonly'"
			type="number"
		/>
	</div>
</template>
