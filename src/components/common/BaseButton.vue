<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<template>
	<button
		class="bg-white m-2 px-3 py-1 drop-shadow-lg hover:drop-shadow-2xl rounded-lg active:bg-lime-100 focus:ring focus:ring-lime-800"
		@click="emit('click')"
	>
		<slot />
	</button>
</template>
