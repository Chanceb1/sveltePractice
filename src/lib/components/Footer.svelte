<script>
	import { Github, Linkedin, Mail, Heart, Code } from '@lucide/svelte';
</script>

<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
	<div class="max-w-6xl mx-auto px-4 py-12">
		<div class="grid md:grid-cols-4 gap-8">
			<!-- Brand -->
			<div class="md:col-span-1">
				<div class="flex items-center gap-2 mb-4">
					<Code class="w-6 h-6 text-emerald-600" />
					<span class="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
						John Doe
					</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
					Full-stack software engineer passionate about building scalable web applications and solving complex problems.
				</p>
				<div class="flex gap-3">
					<a href="https://github.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
						<Github class="w-5 h-5" />
					</a>
					<a href="https://linkedin.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
						<Linkedin class="w-5 h-5" />
					</a>
					<a href="mailto:john@example.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
						<Mail class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Home</a></li>
					<li><a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">About</a></li>
					<li><a href="/experience" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Experience</a></li>
					<li><a href="/projects" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Projects</a></li>
				</ul>
			</div>

			<!-- More Links -->
			<div>
				<h4 class="font-semibold mb-4">More</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/education" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Education</a></li>
					<li><a href="/contact" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Contact</a></li>
					<li><a href="https://example.com/blog" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Blog</a></li>
					<li><a href="https://example.com/resume" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Resume</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="font-semibold mb-4">Get In Touch</h4>
				<div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
					<p>San Francisco, CA</p>
					<p>john@example.com</p>
					<p>+1 (234) 567-8900</p>
				</div>
			</div>
		</div>

		<div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p class="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
				© {new Date().getFullYear()} John Doe. Made with 
				<Heart class="w-4 h-4 text-red-500" />
				using Svelte & TailwindCSS
			</p>
			<div class="flex gap-6 mt-4 md:mt-0">
				<a href="/privacy" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm">Privacy</a>
				<a href="/terms" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm">Terms</a>
			</div>
		</div>
	</div>
</footer>
