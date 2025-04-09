<script lang="ts">
	import { Spring } from 'svelte/motion';

	const count = new Spring(0);
	const offset = $derived(modulo(count.current, 1));

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="flex border-t border-b border-black/10 my-4">
	<button 
		onclick={() => (count.target -= 1)} 
		aria-label="Decrease the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent text-2xl hover:bg-[var(--color-bg-1)]"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1" class="w-1/4 h-1/4">
			<path d="M0,0.5 L1,0.5" class="[vector-effect:non-scaling-stroke] stroke-2 stroke-[#444]" />
		</svg>
	</button>

	<div class="w-32 h-16 overflow-hidden text-center relative">
		<div class="absolute w-full h-full" style="transform: translate(0, {100 * offset}%)">
			<strong class="absolute -top-full w-full h-full font-normal text-[var(--color-theme-1)] text-4xl flex items-center justify-center select-none" aria-hidden="true">{Math.floor(count.current + 1)}</strong>
			<strong class="absolute w-full h-full font-normal text-[var(--color-theme-1)] text-4xl flex items-center justify-center">{Math.floor(count.current)}</strong>
		</div>
	</div>

	<button 
		onclick={() => (count.target += 1)} 
		aria-label="Increase the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent text-2xl hover:bg-[var(--color-bg-1)]"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1" class="w-1/4 h-1/4">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="[vector-effect:non-scaling-stroke] stroke-2 stroke-[#444]" />
		</svg>
	</button>
</div>
