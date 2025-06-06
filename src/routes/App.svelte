<script>
  import Header from '../lib/components/Header.svelte';
  import Hero from '../lib/components/Hero.svelte';
  import About from './About.svelte';
  import Skills from './Skills.svelte';
  import Projects from './Projects.svelte';
  import Experience from './Experience.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';

  let activeSection = $state('home');
  let scrollY = $state(0);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = sectionId;
    }
  }

  onMount(() => {
    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });
</script>

<svelte:window bind:scrollY />

<div class="min-h-screen bg-gray-900 text-white">
  <Header {scrollToSection} {activeSection} {scrollY} />
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </main>
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    background-color: #111827;
    color: #f9fafb;
  }
</style>
