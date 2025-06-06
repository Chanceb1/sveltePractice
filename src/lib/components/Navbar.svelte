<script>
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Menu, X, Code, Github, Linkedin, Mail } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	$effect(() => {
		// Close mobile menu when route changes
		return page.subscribe(() => {
			mobileMenuOpen = false;
		});
	});
</script>

<nav class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2 font-bold text-xl">
				<Code class="w-6 h-6 text-emerald-600" />
				<span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
					John Doe
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				<div class="flex items-center gap-6">
					<a 
						href="/" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/'}
						class:dark:text-emerald-400={$page.url.pathname === '/'}
					>
						Home
					</a>
					<a 
						href="/about" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/about'}
						class:dark:text-emerald-400={$page.url.pathname === '/about'}
					>
						About
					</a>
					<a 
						href="/experience" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/experience'}
						class:dark:text-emerald-400={$page.url.pathname === '/experience'}
					>
						Experience
					</a>
					<a 
						href="/projects" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/projects'}
						class:dark:text-emerald-400={$page.url.pathname === '/projects'}
					>
						Projects
					</a>
					<a 
						href="/education" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/education'}
						class:dark:text-emerald-400={$page.url.pathname === '/education'}
					>
						Education
					</a>
					<a 
						href="/contact" 
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						class:text-emerald-600={$page.url.pathname === '/contact'}
						class:dark:text-emerald-400={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
				</div>

				<div class="flex items-center gap-3">
					<a href="https://github.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
						<Github class="w-5 h-5" />
					</a>
					<a href="https://linkedin.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
						<Linkedin class="w-5 h-5" />
					</a>
					<Button href="/contact" size="sm" class="bg-emerald-600 hover:bg-emerald-700">
						<Mail class="w-4 h-4 mr-1" />
						Hire Me
					</Button>
				</div>
			</div>

			<!-- Mobile Menu Button -->
			<button 
				onclick={toggleMobileMenu}
				class="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
			>
				{#if mobileMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
				<div class="flex flex-col gap-4">
					<a 
						href="/" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/'}
						class:dark:text-emerald-400={$page.url.pathname === '/'}
					>
						Home
					</a>
					<a 
						href="/about" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/about'}
						class:dark:text-emerald-400={$page.url.pathname === '/about'}
					>
						About
					</a>
					<a 
						href="/experience" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/experience'}
						class:dark:text-emerald-400={$page.url.pathname === '/experience'}
					>
						Experience
					</a>
					<a 
						href="/projects" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/projects'}
						class:dark:text-emerald-400={$page.url.pathname === '/projects'}
					>
						Projects
					</a>
					<a 
						href="/education" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/education'}
						class:dark:text-emerald-400={$page.url.pathname === '/education'}
					>
						Education
					</a>
					<a 
						href="/contact" 
						onclick={closeMobileMenu}
						class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
						class:text-emerald-600={$page.url.pathname === '/contact'}
						class:dark:text-emerald-400={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
					
					<div class="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
						<a href="https://github.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
							<Github class="w-5 h-5" />
						</a>
						<a href="https://linkedin.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
							<Linkedin class="w-5 h-5" />
						</a>
						<Button href="/contact" size="sm" class="bg-emerald-600 hover:bg-emerald-700" onclick={closeMobileMenu}>
							<Mail class="w-4 h-4 mr-1" />
							Hire Me
						</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>
