<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Github, ExternalLink, Star, GitFork } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Projects - John Doe</title>
	<meta name="description" content="Portfolio of software development projects and applications" />
</svelte:head>

<div class="py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">My Projects</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400">A showcase of my development work and personal projects</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Featured Project -->
			<Card class="md:col-span-2 lg:col-span-3 border-2 border-emerald-500">
				<CardHeader>
					<div class="flex items-center gap-2 mb-2">
						<Badge variant="secondary" class="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
							Featured Project
						</Badge>
					</div>
					<img src="/placeholder.svg?height=300&width=800" alt="E-Commerce Platform" class="w-full h-64 object-cover rounded-lg mb-4" />
				</CardHeader>
				<CardContent>
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<CardTitle class="text-2xl mb-3">Full-Stack E-Commerce Platform</CardTitle>
							<CardDescription class="text-base mb-4">
								A comprehensive e-commerce solution built with modern technologies. Features include user authentication, 
								product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard.
							</CardDescription>
							<div class="flex flex-wrap gap-2 mb-4">
								<Badge>React</Badge>
								<Badge>Node.js</Badge>
								<Badge>Express</Badge>
								<Badge>MongoDB</Badge>
								<Badge>Stripe</Badge>
								<Badge>JWT</Badge>
								<Badge>Tailwind CSS</Badge>
							</div>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Key Features:</h4>
							<ul class="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
								<li>User registration and authentication</li>
								<li>Product search and filtering</li>
								<li>Shopping cart and wishlist</li>
								<li>Secure payment processing</li>
								<li>Order tracking and history</li>
								<li>Admin panel for inventory management</li>
								<li>Responsive design for all devices</li>
							</ul>
							<div class="flex gap-2">
								<Button size="sm" class="bg-emerald-600 hover:bg-emerald-700">
									<Github class="w-4 h-4 mr-1" />
									View Code
								</Button>
								<Button size="sm" variant="outline">
									<ExternalLink class="w-4 h-4 mr-1" />
									Live Demo
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Regular Projects -->
			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Task Management App" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Collaborative Task Manager</CardTitle>
					<CardDescription class="mb-4">
						Real-time task management application with team collaboration features, drag-and-drop interface, and progress tracking.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Svelte</Badge>
						<Badge variant="outline">Firebase</Badge>
						<Badge variant="outline">TypeScript</Badge>
						<Badge variant="outline">Tailwind</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>24</span>
							<GitFork class="w-4 h-4" />
							<span>8</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Weather Dashboard" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Weather Analytics Dashboard</CardTitle>
					<CardDescription class="mb-4">
						Beautiful weather dashboard with location-based forecasts, historical data visualization, and weather alerts.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Next.js</Badge>
						<Badge variant="outline">Chart.js</Badge>
						<Badge variant="outline">OpenWeather API</Badge>
						<Badge variant="outline">Vercel</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>18</span>
							<GitFork class="w-4 h-4" />
							<span>5</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Social Media App" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Social Media Platform</CardTitle>
					<CardDescription class="mb-4">
						Full-featured social media app with posts, comments, likes, real-time messaging, and user profiles.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">React Native</Badge>
						<Badge variant="outline">Node.js</Badge>
						<Badge variant="outline">Socket.io</Badge>
						<Badge variant="outline">PostgreSQL</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>32</span>
							<GitFork class="w-4 h-4" />
							<span>12</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Expense Tracker" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Personal Finance Tracker</CardTitle>
					<CardDescription class="mb-4">
						Comprehensive expense tracking app with budget planning, category management, and financial insights.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Vue.js</Badge>
						<Badge variant="outline">Python</Badge>
						<Badge variant="outline">FastAPI</Badge>
						<Badge variant="outline">SQLite</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>15</span>
							<GitFork class="w-4 h-4" />
							<span>4</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Recipe App" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Recipe Sharing Platform</CardTitle>
					<CardDescription class="mb-4">
						Community-driven recipe platform with search, ratings, meal planning, and shopping list generation.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Angular</Badge>
						<Badge variant="outline">Spring Boot</Badge>
						<Badge variant="outline">MySQL</Badge>
						<Badge variant="outline">AWS S3</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>21</span>
							<GitFork class="w-4 h-4" />
							<span>7</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="hover:shadow-lg transition-shadow">
				<CardHeader>
					<img src="/placeholder.svg?height=200&width=400" alt="Portfolio Website" class="w-full h-48 object-cover rounded-lg" />
				</CardHeader>
				<CardContent>
					<CardTitle class="mb-2">Developer Portfolio Template</CardTitle>
					<CardDescription class="mb-4">
						Modern, responsive portfolio template for developers with dark mode, animations, and CMS integration.
					</CardDescription>
					<div class="flex flex-wrap gap-2 mb-4">
						<Badge variant="outline">Gatsby</Badge>
						<Badge variant="outline">GraphQL</Badge>
						<Badge variant="outline">Contentful</Badge>
						<Badge variant="outline">Framer Motion</Badge>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex gap-2">
							<Button size="sm" variant="outline">
								<Github class="w-4 h-4 mr-1" />
								Code
							</Button>
							<Button size="sm" variant="outline">
								<ExternalLink class="w-4 h-4 mr-1" />
								Demo
							</Button>
						</div>
						<div class="flex items-center gap-2 text-sm text-gray-500">
							<Star class="w-4 h-4" />
							<span>45</span>
							<GitFork class="w-4 h-4" />
							<span>18</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>

		<div class="text-center mt-12">
			<p class="text-gray-600 dark:text-gray-400 mb-4">
				Want to see more? Check out my GitHub profile for additional projects and contributions.
			</p>
			<Button href="https://github.com" variant="outline" class="mr-4">
				<Github class="w-4 h-4 mr-2" />
				View GitHub Profile
			</Button>
		</div>
	</div>
</div>
