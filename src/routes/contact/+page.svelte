<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from '@lucide/svelte';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	function handleSubmit(event) {
		event.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		// Reset form or show success message
	}
</script>

<svelte:head>
	<title>Contact - John Doe</title>
	<meta name="description" content="Get in touch with John Doe - software engineer and developer" />
</svelte:head>

<div class="py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400">
				I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello.
			</p>
		</div>

		<div class="grid lg:grid-cols-3 gap-8">
			<!-- Contact Information -->
			<div class="lg:col-span-1 space-y-6">
				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<MessageCircle class="w-5 h-5 text-emerald-600" />
							Let's Talk
						</CardTitle>
						<CardDescription>
							I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg mb-4">Contact Information</CardTitle>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="flex items-center gap-3">
							<Mail class="w-5 h-5 text-emerald-600" />
							<div>
								<p class="font-medium">Email</p>
								<a href="mailto:john@example.com" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600">
									john@example.com
								</a>
							</div>
						</div>
						
						<div class="flex items-center gap-3">
							<Phone class="w-5 h-5 text-emerald-600" />
							<div>
								<p class="font-medium">Phone</p>
								<a href="tel:+1234567890" class="text-gray-600 dark:text-gray-400 hover:text-emerald-600">
									+1 (234) 567-8900
								</a>
							</div>
						</div>
						
						<div class="flex items-center gap-3">
							<MapPin class="w-5 h-5 text-emerald-600" />
							<div>
								<p class="font-medium">Location</p>
								<p class="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg mb-4">Social Media</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="space-y-3">
							<a href="https://github.com" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
								<Github class="w-5 h-5 text-gray-700 dark:text-gray-300" />
								<span class="text-gray-700 dark:text-gray-300">GitHub</span>
							</a>
							
							<a href="https://linkedin.com" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
								<Linkedin class="w-5 h-5 text-blue-600" />
								<span class="text-gray-700 dark:text-gray-300">LinkedIn</span>
							</a>
							
							<a href="https://twitter.com" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
								<Twitter class="w-5 h-5 text-sky-500" />
								<span class="text-gray-700 dark:text-gray-300">Twitter</span>
							</a>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent class="p-6">
						<h4 class="font-semibold mb-2">Response Time</h4>
						<p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
							I typically respond to emails within 24-48 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
						</p>
						<div class="flex items-center gap-2 text-sm">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-gray-600 dark:text-gray-400">Usually responds within a day</span>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<Card>
					<CardHeader>
						<CardTitle class="text-2xl">Send Me a Message</CardTitle>
						<CardDescription>
							Fill out the form below and I'll get back to you as soon as possible.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid md:grid-cols-2 gap-4">
								<div class="space-y-2">
									<Label for="name">Name *</Label>
									<Input
										id="name"
										type="text"
										placeholder="Your full name"
										bind:value={formData.name}
										required
									/>
								</div>
								<div class="space-y-2">
									<Label for="email">Email *</Label>
									<Input
										id="email"
										type="email"
										placeholder="your.email@example.com"
										bind:value={formData.email}
										required
									/>
								</div>
							</div>
							
							<div class="space-y-2">
								<Label for="subject">Subject *</Label>
								<Input
									id="subject"
									type="text"
									placeholder="What's this about?"
									bind:value={formData.subject}
									required
								/>
							</div>
							
							<div class="space-y-2">
								<Label for="message">Message *</Label>
								<Textarea
									id="message"
									placeholder="Tell me about your project, question, or just say hello..."
									rows="6"
									bind:value={formData.message}
									required
								/>
							</div>
							
							<Button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700">
								<Send class="w-4 h-4 mr-2" />
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>

				<!-- FAQ Section -->
				<Card class="mt-8">
					<CardHeader>
						<CardTitle>Frequently Asked Questions</CardTitle>
					</CardHeader>
					<CardContent class="space-y-4">
						<div>
							<h4 class="font-semibold mb-2">What type of projects do you work on?</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								I work on a variety of web applications, from small business websites to large-scale enterprise solutions. 
								I specialize in full-stack development with modern JavaScript frameworks.
							</p>
						</div>
						
						<div>
							<h4 class="font-semibold mb-2">Are you available for freelance work?</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								I occasionally take on interesting freelance projects. Feel free to reach out with your project details, 
								and I'll let you know if I have availability.
							</p>
						</div>
						
						<div>
							<h4 class="font-semibold mb-2">Do you provide mentoring or consulting?</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								Yes! I enjoy helping other developers grow their skills. I offer both technical mentoring and 
								architecture consulting services.
							</p>
						</div>
						
						<div>
							<h4 class="font-semibold mb-2">What's the best way to reach you?</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								Email is usually the best way to reach me for detailed discussions. For quick questions or 
								networking, LinkedIn works great too.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</div>
