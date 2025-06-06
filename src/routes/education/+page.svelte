<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { GraduationCap, Award, BookOpen, Calendar } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Education - John Doe</title>
	<meta name="description" content="Educational background, certifications, and continuous learning journey" />
</svelte:head>

<div class="py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Education & Learning</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400">My academic background and continuous learning journey</p>
		</div>

		<!-- Formal Education -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
				<GraduationCap class="w-6 h-6 text-emerald-600" />
				Formal Education
			</h2>
			
			<div class="space-y-6">
				<Card class="border-l-4 border-l-emerald-500">
					<CardHeader>
						<div class="flex items-start justify-between">
							<div>
								<CardTitle class="text-xl mb-2">Bachelor of Science in Computer Science</CardTitle>
								<CardDescription class="text-lg text-emerald-600 dark:text-emerald-400 mb-2">
									University of Technology
								</CardDescription>
								<div class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
									<Calendar class="w-4 h-4" />
									2014 - 2018
								</div>
							</div>
							<GraduationCap class="w-8 h-8 text-emerald-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div class="space-y-4">
							<p class="text-gray-700 dark:text-gray-300">
								<strong>GPA: 3.8/4.0</strong> - Graduated Magna Cum Laude
							</p>
							<div>
								<h4 class="font-semibold mb-2">Relevant Coursework:</h4>
								<div class="grid md:grid-cols-2 gap-2">
									<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
										<li>Data Structures and Algorithms</li>
										<li>Software Engineering</li>
										<li>Database Systems</li>
										<li>Web Development</li>
										<li>Computer Networks</li>
									</ul>
									<ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
										<li>Operating Systems</li>
										<li>Machine Learning</li>
										<li>Software Architecture</li>
										<li>Human-Computer Interaction</li>
										<li>Cybersecurity Fundamentals</li>
									</ul>
								</div>
							</div>
							<div>
								<h4 class="font-semibold mb-2">Senior Project:</h4>
								<p class="text-gray-600 dark:text-gray-400">
									"Real-time Collaborative Code Editor" - Built a web-based IDE with real-time collaboration features using WebSockets, React, and Node.js. Received Best Project Award.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>

		<!-- Certifications -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
				<Award class="w-6 h-6 text-teal-600" />
				Certifications
			</h2>
			
			<div class="grid md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between">
							<div>
								<CardTitle class="text-lg">AWS Certified Solutions Architect</CardTitle>
								<CardDescription>Amazon Web Services</CardDescription>
							</div>
							<Award class="w-6 h-6 text-orange-500" />
						</div>
					</CardHeader>
					<CardContent>
						<div class="space-y-2">
							<Badge variant="outline">Valid until: Dec 2025</Badge>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								Professional level certification demonstrating expertise in designing distributed systems on AWS.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="flex items-center justify-between">
							<div>
								<CardTitle class="text-lg">Google Cloud Professional Developer</CardTitle>
								<CardDescription>Google Cloud Platform</CardDescription>
							</div>
							<Award class="w-6 h-6 text-blue-500" />
						</div>
					</CardHeader>
					<CardContent>
						<div class="space-y-2">
							<Badge variant="outline">Valid until: Aug 2025</Badge>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								Expertise in developing scalable and reliable applications using GCP services.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="flex items-center justify-between">
							<div>
								<CardTitle class="text-lg">MongoDB Certified Developer</CardTitle>
								<CardDescription>MongoDB University</CardDescription>
							</div>
							<Award class="w-6 h-6 text-green-500" />
						</div>
					</CardHeader>
					<CardContent>
						<div class="space-y-2">
							<Badge variant="outline">Valid until: Mar 2026</Badge>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								Proficiency in MongoDB database design, development, and administration.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="flex items-center justify-between">
							<div>
								<CardTitle class="text-lg">Certified Kubernetes Administrator</CardTitle>
								<CardDescription>Cloud Native Computing Foundation</CardDescription>
							</div>
							<Award class="w-6 h-6 text-purple-500" />
						</div>
					</CardHeader>
					<CardContent>
						<div class="space-y-2">
							<Badge variant="outline">Valid until: Jan 2025</Badge>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								Hands-on certification for Kubernetes cluster administration and troubleshooting.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>

		<!-- Online Learning -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
				<BookOpen class="w-6 h-6 text-cyan-600" />
				Continuous Learning
			</h2>
			
			<div class="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle class="text-xl mb-4">Recent Courses & Training</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="grid md:grid-cols-2 gap-6">
							<div>
								<h4 class="font-semibold mb-3">2024</h4>
								<ul class="space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Advanced React Patterns - Frontend Masters</li>
									<li>• System Design Interview Prep - Educative</li>
									<li>• GraphQL with Apollo - Udemy</li>
									<li>• Docker & Kubernetes Mastery - Pluralsight</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold mb-3">2023</h4>
								<ul class="space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Microservices Architecture - Coursera</li>
									<li>• Advanced TypeScript - Egghead.io</li>
									<li>• AWS Solutions Architecture - A Cloud Guru</li>
									<li>• Testing JavaScript Applications - Kent C. Dodds</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-xl mb-4">Learning Platforms & Stats</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center">
								<div class="text-2xl font-bold text-emerald-600 mb-1">150+</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">Courses Completed</div>
							</div>
							<div class="text-center">
								<div class="text-2xl font-bold text-teal-600 mb-1">500+</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">Hours of Learning</div>
							</div>
							<div class="text-center">
								<div class="text-2xl font-bold text-cyan-600 mb-1">25+</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">Technologies Learned</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>

		<!-- Skills Development -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Skills Development Timeline</h2>
			
			<Card>
				<CardContent class="p-6">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
							<div>
								<h4 class="font-semibold">2024 - Present: Advanced Architecture & Leadership</h4>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Focusing on system design, microservices, team leadership, and emerging technologies like AI/ML integration.
								</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
							<div>
								<h4 class="font-semibold">2022-2023: Cloud & DevOps Mastery</h4>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Deep dive into cloud platforms (AWS, GCP), containerization, CI/CD, and infrastructure as code.
								</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-3 h-3 bg-cyan-500 rounded-full mt-2"></div>
							<div>
								<h4 class="font-semibold">2020-2021: Full-Stack Specialization</h4>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Mastered modern JavaScript frameworks, database design, API development, and testing methodologies.
								</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-3 h-3 bg-slate-500 rounded-full mt-2"></div>
							<div>
								<h4 class="font-semibold">2018-2019: Foundation Building</h4>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Established strong fundamentals in web development, version control, and software engineering principles.
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	</div>
</div>
