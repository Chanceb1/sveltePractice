<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Briefcase, Calendar, MapPin } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Experience - John Doe</title>
	<meta name="description" content="Professional experience and career history" />
</svelte:head>

<div class="py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Professional Experience</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400">My career journey and professional growth</p>
		</div>

		<div class="space-y-8">
			<Card class="border-l-4 border-l-emerald-500">
				<CardHeader>
					<div class="flex items-start justify-between">
						<div>
							<CardTitle class="text-2xl mb-2">Senior Software Engineer</CardTitle>
							<CardDescription class="text-lg text-emerald-600 dark:text-emerald-400 mb-2">
								TechCorp Inc.
							</CardDescription>
							<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
								<div class="flex items-center gap-1">
									<Calendar class="w-4 h-4" />
									March 2022 - Present
								</div>
								<div class="flex items-center gap-1">
									<MapPin class="w-4 h-4" />
									San Francisco, CA
								</div>
							</div>
						</div>
						<Briefcase class="w-8 h-8 text-emerald-600" />
					</div>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<p class="text-gray-700 dark:text-gray-300">
							Leading a team of 5 developers in building scalable microservices architecture for a high-traffic e-commerce platform serving over 1M users.
						</p>
						<div>
							<h4 class="font-semibold mb-2">Key Achievements:</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Improved system performance by 40% through database optimization and caching strategies</li>
								<li>Mentored 3 junior developers, helping them advance to mid-level positions</li>
								<li>Led migration from monolithic to microservices architecture</li>
								<li>Implemented comprehensive testing strategy, increasing code coverage to 95%</li>
								<li>Reduced deployment time from 2 hours to 15 minutes with CI/CD improvements</li>
							</ul>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Technologies:</h4>
							<div class="flex flex-wrap gap-2">
								<Badge>Node.js</Badge>
								<Badge>React</Badge>
								<Badge>TypeScript</Badge>
								<Badge>PostgreSQL</Badge>
								<Badge>Docker</Badge>
								<Badge>Kubernetes</Badge>
								<Badge>AWS</Badge>
								<Badge>Redis</Badge>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="border-l-4 border-l-teal-500">
				<CardHeader>
					<div class="flex items-start justify-between">
						<div>
							<CardTitle class="text-2xl mb-2">Full Stack Developer</CardTitle>
							<CardDescription class="text-lg text-teal-600 dark:text-teal-400 mb-2">
								StartupXYZ
							</CardDescription>
							<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
								<div class="flex items-center gap-1">
									<Calendar class="w-4 h-4" />
									June 2020 - March 2022
								</div>
								<div class="flex items-center gap-1">
									<MapPin class="w-4 h-4" />
									Remote
								</div>
							</div>
						</div>
						<Briefcase class="w-8 h-8 text-teal-600" />
					</div>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<p class="text-gray-700 dark:text-gray-300">
							Developed and maintained multiple web applications for a fast-growing fintech startup, working closely with product and design teams.
						</p>
						<div>
							<h4 class="font-semibold mb-2">Key Achievements:</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Built customer-facing dashboard from scratch, serving 10K+ active users</li>
								<li>Implemented real-time payment processing system with 99.9% uptime</li>
								<li>Reduced page load times by 60% through performance optimization</li>
								<li>Established code review process and development best practices</li>
								<li>Integrated third-party APIs for payment processing and KYC verification</li>
							</ul>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Technologies:</h4>
							<div class="flex flex-wrap gap-2">
								<Badge>React</Badge>
								<Badge>Python</Badge>
								<Badge>Django</Badge>
								<Badge>PostgreSQL</Badge>
								<Badge>Stripe API</Badge>
								<Badge>Heroku</Badge>
								<Badge>GitHub Actions</Badge>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="border-l-4 border-l-cyan-500">
				<CardHeader>
					<div class="flex items-start justify-between">
						<div>
							<CardTitle class="text-2xl mb-2">Software Developer</CardTitle>
							<CardDescription class="text-lg text-cyan-600 dark:text-cyan-400 mb-2">
								WebSolutions Ltd.
							</CardDescription>
							<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
								<div class="flex items-center gap-1">
									<Calendar class="w-4 h-4" />
									January 2019 - June 2020
								</div>
								<div class="flex items-center gap-1">
									<MapPin class="w-4 h-4" />
									New York, NY
								</div>
							</div>
						</div>
						<Briefcase class="w-8 h-8 text-cyan-600" />
					</div>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<p class="text-gray-700 dark:text-gray-300">
							Developed custom web applications for various clients, ranging from small businesses to enterprise solutions.
						</p>
						<div>
							<h4 class="font-semibold mb-2">Key Achievements:</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Delivered 15+ client projects on time and within budget</li>
								<li>Built responsive websites with modern JavaScript frameworks</li>
								<li>Collaborated with designers to implement pixel-perfect UI/UX</li>
								<li>Maintained legacy systems and performed database migrations</li>
								<li>Provided technical support and training to clients</li>
							</ul>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Technologies:</h4>
							<div class="flex flex-wrap gap-2">
								<Badge>JavaScript</Badge>
								<Badge>Vue.js</Badge>
								<Badge>PHP</Badge>
								<Badge>Laravel</Badge>
								<Badge>MySQL</Badge>
								<Badge>WordPress</Badge>
								<Badge>jQuery</Badge>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card class="border-l-4 border-l-slate-500">
				<CardHeader>
					<div class="flex items-start justify-between">
						<div>
							<CardTitle class="text-2xl mb-2">Junior Web Developer</CardTitle>
							<CardDescription class="text-lg text-slate-600 dark:text-slate-400 mb-2">
								Digital Agency Pro
							</CardDescription>
							<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
								<div class="flex items-center gap-1">
									<Calendar class="w-4 h-4" />
									June 2018 - December 2018
								</div>
								<div class="flex items-center gap-1">
									<MapPin class="w-4 h-4" />
									Boston, MA
								</div>
							</div>
						</div>
						<Briefcase class="w-8 h-8 text-slate-600" />
					</div>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<p class="text-gray-700 dark:text-gray-300">
							Started my professional journey as a junior developer, learning industry best practices and contributing to various web development projects.
						</p>
						<div>
							<h4 class="font-semibold mb-2">Key Achievements:</h4>
							<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
								<li>Completed comprehensive onboarding program in web development</li>
								<li>Assisted in building 8 client websites from design to deployment</li>
								<li>Learned version control, testing, and deployment processes</li>
								<li>Contributed to team code reviews and knowledge sharing sessions</li>
								<li>Gained experience with responsive design and cross-browser compatibility</li>
							</ul>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Technologies:</h4>
							<div class="flex flex-wrap gap-2">
								<Badge>HTML5</Badge>
								<Badge>CSS3</Badge>
								<Badge>JavaScript</Badge>
								<Badge>Bootstrap</Badge>
								<Badge>Git</Badge>
								<Badge>Photoshop</Badge>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</div>
