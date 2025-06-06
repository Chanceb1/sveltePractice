<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Heart, Coffee, Camera, Music, Plane, Book, Code, Users } from '@lucide/svelte';
</script>

<svelte:head>
	<title>About - John Doe</title>
	<meta name="description" content="Learn more about John Doe - software engineer, problem solver, and technology enthusiast" />
</svelte:head>

<div class="py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">About Me</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400">Get to know the person behind the code</p>
		</div>

		<!-- Personal Introduction -->
		<section class="mb-12">
			<Card class="border-l-4 border-l-emerald-500">
				<CardContent class="p-8">
					<div class="grid md:grid-cols-3 gap-8 items-center">
						<div class="md:col-span-1">
							<img src="/placeholder.svg?height=300&width=300" alt="John Doe" class="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
						</div>
						<div class="md:col-span-2">
							<h2 class="text-2xl font-bold mb-4">Hello, I'm John!</h2>
							<div class="space-y-4 text-gray-700 dark:text-gray-300">
								<p>
									I'm a passionate software engineer with over 6 years of experience building scalable web applications 
									and leading development teams. My journey in tech started during college when I built my first website, 
									and I've been hooked on creating digital solutions ever since.
								</p>
								<p>
									What drives me is the intersection of technology and human experience. I believe that great software 
									isn't just about clean code—it's about solving real problems and making people's lives easier. 
									Whether I'm architecting a complex backend system or crafting an intuitive user interface, 
									I always keep the end user in mind.
								</p>
								<p>
									When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
									or sharing knowledge with the developer community through blog posts and mentoring.
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Values & Philosophy -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">My Values & Philosophy</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<Code class="w-5 h-5 text-emerald-600" />
							Clean Code Advocate
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-gray-600 dark:text-gray-400">
							I believe in writing code that is not just functional, but readable, maintainable, and elegant. 
							Code is read more often than it's written, so I prioritize clarity and simplicity.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<Users class="w-5 h-5 text-teal-600" />
							Collaborative Spirit
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-gray-600 dark:text-gray-400">
							The best solutions come from diverse perspectives. I thrive in collaborative environments 
							where ideas are shared freely and everyone's voice is heard.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<Book class="w-5 h-5 text-cyan-600" />
							Continuous Learning
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-gray-600 dark:text-gray-400">
							Technology evolves rapidly, and so do I. I'm committed to staying current with industry trends 
							and continuously expanding my skill set through courses, conferences, and hands-on projects.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<Heart class="w-5 h-5 text-rose-600" />
							User-Centric Approach
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-gray-600 dark:text-gray-400">
							Every line of code I write serves a purpose: to create better experiences for users. 
							I always consider the human impact of the technology I build.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>

		<!-- Interests & Hobbies -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Beyond Coding</h2>
			<Card>
				<CardContent class="p-6">
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div class="flex items-start gap-3">
							<Camera class="w-6 h-6 text-emerald-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Photography</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Capturing moments and exploring composition through street and landscape photography.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<Music class="w-6 h-6 text-teal-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Music Production</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Creating electronic music and experimenting with sound design in my home studio.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<Plane class="w-6 h-6 text-cyan-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Travel</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Exploring different cultures and gaining new perspectives through travel adventures.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<Coffee class="w-6 h-6 text-amber-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Coffee Enthusiast</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Perfecting the art of coffee brewing and exploring different beans from around the world.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<Book class="w-6 h-6 text-indigo-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Reading</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Diving into sci-fi novels, technical books, and philosophy to expand my worldview.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<Users class="w-6 h-6 text-purple-600 mt-1" />
							<div>
								<h4 class="font-semibold mb-1">Mentoring</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400">
									Helping aspiring developers through code reviews, career advice, and technical guidance.
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Fun Facts -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Fun Facts</h2>
			<Card>
				<CardContent class="p-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<h4 class="font-semibold mb-3">Quick Stats</h4>
							<ul class="space-y-2 text-gray-600 dark:text-gray-400">
								<li>☕ Coffee cups per day: 3-4 (quality over quantity!)</li>
								<li>🌍 Countries visited: 15 and counting</li>
								<li>📚 Books read this year: 24</li>
								<li>🎵 Favorite coding music: Lo-fi hip hop & ambient</li>
								<li>🏃‍♂️ Morning routine: 5 AM run, then code</li>
							</ul>
						</div>
						<div>
							<h4 class="font-semibold mb-3">Random Tidbits</h4>
							<ul class="space-y-2 text-gray-600 dark:text-gray-400">
								<li>🎯 Can solve a Rubik's cube in under 2 minutes</li>
								<li>🍕 Believes pineapple belongs on pizza</li>
								<li>🌱 Growing herbs on my apartment balcony</li>
								<li>🎮 Retro gaming enthusiast (NES collector)</li>
								<li>🧘‍♂️ Practices meditation for mental clarity</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Current Focus -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">What I'm Up To Now</h2>
			<Card class="border-l-4 border-l-emerald-500">
				<CardContent class="p-6">
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold mb-2">🚀 Currently Working On</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Leading the architecture redesign for our main product at TechCorp</li>
								<li>Building an open-source developer tool for API testing</li>
								<li>Writing a technical blog series on microservices patterns</li>
							</ul>
						</div>
						
						<div>
							<h4 class="font-semibold mb-2">📖 Currently Learning</h4>
							<div class="flex flex-wrap gap-2">
								<Badge>Rust Programming</Badge>
								<Badge>WebAssembly</Badge>
								<Badge>Machine Learning</Badge>
								<Badge>System Design</Badge>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold mb-2">🎯 2024 Goals</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Contribute to 5 major open source projects</li>
								<li>Speak at 2 tech conferences</li>
								<li>Launch my developer tool SaaS product</li>
								<li>Complete AWS Solutions Architect Professional certification</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Call to Action -->
		<section class="text-center">
			<Card class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
				<CardContent class="p-8">
					<h2 class="text-2xl font-bold mb-4">Let's Connect!</h2>
					<p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
						I'm always excited to meet fellow developers, discuss new technologies, or explore potential collaborations. 
						Whether you want to chat about code, share project ideas, or just say hello, I'd love to hear from you!
					</p>
					<div class="flex justify-center gap-4">
						<Button href="/contact" class="bg-emerald-600 hover:bg-emerald-700">
							Get In Touch
						</Button>
						<Button href="/projects" variant="outline">
							View My Work
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	</div>
</div>
