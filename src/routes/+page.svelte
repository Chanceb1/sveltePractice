<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
    import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap } from '@lucide/svelte';
</script>

<svelte:head>
	<title>John Doe - Software Engineer</title>
	<meta name="description" content="Full-stack software engineer specializing in modern web technologies" />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
	<div class="max-w-6xl mx-auto text-center">
		<div class="mb-8">
			<img src="/placeholder.svg?height=150&width=150" alt="Profile" class="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-500" />
			<h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
				John Doe
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
				Full-Stack Software Engineer
			</p>
			<p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
				Passionate about building scalable web applications and solving complex problems with clean, efficient code.
			</p>
		</div>
		
		<div class="flex justify-center gap-4 mb-8">
			<Button href="/contact" class="bg-emerald-600 hover:bg-emerald-700">
				<Mail class="w-4 h-4 mr-2" />
				Get In Touch
			</Button>
			<Button variant="outline" href="/projects">
				<Code class="w-4 h-4 mr-2" />
				View Projects
			</Button>
		</div>
		
		<div class="flex justify-center gap-6">
			<a href="https://github.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
				<Github class="w-6 h-6" />
			</a>
			<a href="https://linkedin.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
				<Linkedin class="w-6 h-6" />
			</a>
			<a href="mailto:john@example.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
				<Mail class="w-6 h-6" />
			</a>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section class="py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl font-bold text-center mb-12">Technical Skills</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Code class="w-5 h-5 text-emerald-600" />
						Frontend
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap gap-2">
						<Badge variant="secondary">React</Badge>
						<Badge variant="secondary">Svelte</Badge>
						<Badge variant="secondary">TypeScript</Badge>
						<Badge variant="secondary">Tailwind CSS</Badge>
						<Badge variant="secondary">Next.js</Badge>
					</div>
				</CardContent>
			</Card>
			
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Briefcase class="w-5 h-5 text-emerald-600" />
						Backend
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap gap-2">
						<Badge variant="secondary">Node.js</Badge>
						<Badge variant="secondary">Python</Badge>
						<Badge variant="secondary">PostgreSQL</Badge>
						<Badge variant="secondary">MongoDB</Badge>
						<Badge variant="secondary">Express</Badge>
					</div>
				</CardContent>
			</Card>
			
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<GraduationCap class="w-5 h-5 text-emerald-600" />
						Tools & DevOps
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap gap-2">
						<Badge variant="secondary">Docker</Badge>
						<Badge variant="secondary">AWS</Badge>
						<Badge variant="secondary">Git</Badge>
						<Badge variant="secondary">CI/CD</Badge>
						<Badge variant="secondary">Linux</Badge>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<!-- Featured Projects -->
<section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
			<p class="text-gray-600 dark:text-gray-400">Some of my recent work</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Project 1" class="w-full h-48 object-cover rounded-t-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">E-Commerce Platform</CardTitle>
					<CardDescription class="mb-4">
						Full-stack e-commerce solution with React, Node.js, and Stripe integration.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">React</Badge>
						<Badge variant="outline">Node.js</Badge>
						<Badge variant="outline">MongoDB</Badge>
					</div>
					<div class="flex gap-2">
						<Button size="sm" variant="outline">
							<Github class="w-4 h-4 mr-1" />
							Code
						</Button>
						<Button size="sm" variant="outline">
							<ExternalLink class="w-4 h-4 mr-1" />
							Live Demo
						</Button>
					</div>
				</CardContent>
			</Card>
			
			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Project 2" class="w-full h-48 object-cover rounded-t-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Task Management App</CardTitle>
					<CardDescription class="mb-4">
						Collaborative task management tool with real-time updates and team features.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Svelte</Badge>
						<Badge variant="outline">Firebase</Badge>
						<Badge variant="outline">TypeScript</Badge>
					</div>
					<div class="flex gap-2">
						<Button size="sm" variant="outline">
							<Github class="w-4 h-4 mr-1" />
							Code
						</Button>
						<Button size="sm" variant="outline">
							<ExternalLink class="w-4 h-4 mr-1" />
							Live Demo
						</Button>
					</div>
				</CardContent>
			</Card>
			
			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Project 3" class="w-full h-48 object-cover rounded-t-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Weather Dashboard</CardTitle>
					<CardDescription class="mb-4">
						Beautiful weather dashboard with location-based forecasts and data visualization.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Next.js</Badge>
						<Badge variant="outline">Chart.js</Badge>
						<Badge variant="outline">API Integration</Badge>
					</div>
					<div class="flex gap-2">
						<Button size="sm" variant="outline">
							<Github class="w-4 h-4 mr-1" />
							Code
						</Button>
						<Button size="sm" variant="outline">
							<ExternalLink class="w-4 h-4 mr-1" />
							Live Demo
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
		
		<div class="text-center">
			<Button href="/projects" variant="outline">
				View All Projects
			</Button>
		</div>
	</div>
</section>

<!-- Experience Preview -->
<section class="py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Experience</h2>
			<p class="text-gray-600 dark:text-gray-400">My professional journey</p>
		</div>
		
		<div class="space-y-6 mb-8">
			<Card>
				<CardContent class="p-6">
					<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
						<div>
							<h3 class="text-xl font-semibold">Senior Software Engineer</h3>
							<p class="text-emerald-600 dark:text-emerald-400">TechCorp Inc.</p>
						</div>
						<Badge variant="outline">2022 - Present</Badge>
					</div>
					<p class="text-gray-600 dark:text-gray-400">
						Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.
					</p>
				</CardContent>
			</Card>
			
			<Card>
				<CardContent class="p-6">
					<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
						<div>
							<h3 class="text-xl font-semibold">Full Stack Developer</h3>
							<p class="text-emerald-600 dark:text-emerald-400">StartupXYZ</p>
						</div>
						<Badge variant="outline">2020 - 2022</Badge>
					</div>
					<p class="text-gray-600 dark:text-gray-400">
						Built scalable web applications from scratch, implemented CI/CD pipelines, and collaborated with cross-functional teams.
					</p>
				</CardContent>
			</Card>
		</div>
		
		<div class="text-center">
			<Button href="/experience" variant="outline">
				View Full Experience
			</Button>
		</div>
	</div>
</section>
