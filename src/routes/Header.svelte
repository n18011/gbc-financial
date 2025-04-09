<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between">
	<div class="w-12 h-12">
		<a href="https://svelte.dev/docs/kit" class="flex items-center justify-center w-full h-full">
			<img src={logo} alt="SvelteKit" class="w-8 h-8 object-contain" />
		</a>
	</div>

	<nav class="flex justify-center" style="--background: rgba(255, 255, 255, 0.7);">
		<svg viewBox="0 0 2 3" aria-hidden="true" class="w-8 h-12 block">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="fill-[var(--background)]" />
		</svg>
		<ul class="relative p-0 m-0 h-12 flex justify-center items-center list-none bg-[var(--background)] bg-contain">
			<li class="relative h-full" aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="flex h-full items-center px-2 text-[var(--color-text)] font-bold text-xs uppercase tracking-widest no-underline transition-colors duration-200 hover:text-[var(--color-theme-1)]">Home</a>
			</li>
			<li class="relative h-full" aria-current={page.url.pathname.startsWith('/demo/paraglide') ? 'page' : undefined}>
				<a href="/demo/paraglide" class="flex h-full items-center px-2 text-[var(--color-text)] font-bold text-xs uppercase tracking-widest no-underline transition-colors duration-200 hover:text-[var(--color-theme-1)]">Paraglide</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="w-8 h-12 block">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="fill-[var(--background)]" />
		</svg>
	</nav>

	<div class="w-12 h-12">
		<a href="https://github.com/sveltejs/kit" class="flex items-center justify-center w-full h-full">
			<img src={github} alt="GitHub" class="w-8 h-8 object-contain" />
		</a>
	</div>
</header>

<style>
	/* カスタム要素のスタイル - Tailwindでは難しい部分のみ残す */
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
</style>
