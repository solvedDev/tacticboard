<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
	<!-- Mittellinie -->
	<div
		:style="{ left: `${width / 2}px` }"
		class="absolute w-[2px] h-full bg-white"
	/>
	<!-- Anstoßkreis -->
	<div
		:style="{
			left: `calc(${width / 2}px - 9rem)`,
			top: `calc(${height / 2}px - 9rem)`,
		}"
		class="absolute w-[18rem] h-[18rem] rounded-full border border-2 border-white"
	/>
	<!-- Anstoßpunkt -->
	<div
		:style="{
			left: `calc(${width / 2}px - 0.5rem)`,
			top: `calc(${height / 2}px - 0.5rem)`,
		}"
		class="absolute w-[1rem] h-[1rem] rounded-full bg-white"
	/>

	<!-- Strafraum 1 -->
	<div
		:style="{
			left: `8rem`,
			top: `calc(${height / 2}px - 6rem)`,
		}"
		class="absolute w-[12rem] h-[12rem] rounded-full border border-2 border-white"
	/>
	<div
		:style="{
			left: `4rem`,
			top: `calc(${height / 2}px - 12rem)`,
		}"
		class="absolute w-[12rem] h-[24rem] bg-lime-600 border border-2 border-white"
	/>
	<div
		:style="{
			left: `4rem`,
			top: `calc(${height / 2}px - 7rem)`,
		}"
		class="absolute w-[4rem] h-[14rem] border border-2 border-white"
	/>
	<div
		:style="{
			left: `12rem`,
			top: `calc(${height / 2}px - 0.5rem)`,
		}"
		class="absolute w-[1rem] h-[1rem] rounded-full bg-white"
	/>

	<!-- Strafraum 2 -->
	<div
		:style="{
			left: `calc(${width}px - 20rem)`,
			top: `calc(${height / 2}px - 6rem)`,
		}"
		class="absolute w-[12rem] h-[12rem] rounded-full border border-2 border-white"
	/>
	<div
		:style="{
			left: `calc(${width}px - 16rem)`,
			top: `calc(${height / 2}px - 12rem)`,
		}"
		class="absolute w-[12rem] h-[24rem] bg-lime-600 border border-2 border-white"
	/>
	<div
		:style="{
			left: `calc(${width}px - 8rem)`,
			top: `calc(${height / 2}px - 7rem)`,
		}"
		class="absolute w-[4rem] h-[14rem] border border-2 border-white"
	/>
	<div
		:style="{
			left: `calc(${width}px - 13rem)`,
			top: `calc(${height / 2}px - 0.5rem)`,
		}"
		class="absolute w-[1rem] h-[1rem] rounded-full bg-white"
	/>
</template>
