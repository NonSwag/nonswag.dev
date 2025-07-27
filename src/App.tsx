"use client";

import { Github, Zap } from "lucide-react";
import { ReactTyped } from "react-typed";
import { technologies } from "./lib/technologies";

export default function Component() {
	return (
		<div className="min-h-screen bg-black text-primary font-mono max-w-screen overflow-hidden">
			<div className="relative z-10 p-4">
				<header className="py-6">
					<nav className="container mx-auto">
						<ul className="flex justify-center space-x-6 text-lg">
							{["About", "Tech Stack", "Projects", "Contact"].map((item) => (
								<li key={item}>
									<a
										href={`#${item.toLowerCase().replace(" ", "-")}`}
										className="hover:text-hover transition-colors"
										data-umami-event={`view-${item.toLowerCase().replace(" ", "-")}`}
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</header>
				<main className="container mx-auto py-12">
					<section id="hero" className="text-center mb-20">
						<h1 className="text-5xl font-bold mb-4 glitch" data-text="NonSwag">
							NonSwag
						</h1>
						<ReactTyped
							strings={["Developer", "Tech Enthusiast", "Open Source"]}
							typeSpeed={40}
							backSpeed={50}
							loop
							className="text-2xl text-primary"
						/>
					</section>
					<section id="about" className="mb-20">
						<h2 className="text-3xl font-bold mb-4">&gt; whoami</h2>
						<p className="text-secondary leading-relaxed">
							I am a Java developer specializing in Minecraft plugins and REST
							APIs, I started programming at the age of 12. I believe users
							should have the option to customize every aspect of the software
							they use, and I design everything with that in mind. I&apos;m
							passionate about contributing to open-source projects, pentesting
							servers, and helping others fix vulnerabilities.
						</p>
					</section>
					<section id="tech-stack" className="mb-20">
						<h2 className="text-3xl font-bold mb-4">&gt; cat tech_stack.txt</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{technologies.map((tech) => (
								<div
									key={tech.name}
									className="bg-gray-900 p-4 rounded-lg border border-primary flex items-center"
								>
									<span className="text-2xl mr-2">
										<tech.icon />
									</span>
									<span>{tech.name}</span>
								</div>
							))}
						</div>
					</section>
					<section id="projects" className="mb-20">
						<h2 className="text-3xl font-bold mb-4">&gt; ls projects/</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									name: "TheNextLvl Productions",
									description:
										"Under the TheNextLvl label I publish Minecraft plugins and run a server network. Focused on performance, quality and customization, TheNextLvl pushes the boundaries of Minecraft plugin development.",
									link: "https://thenextlvl.net",
								},
								{
									name: "fastStats (WIP)",
									description:
										"fastStats is a work in progress stats and metrics platform.",
									link: "https://github.com/fastStats-org",
								},
							].map((project) => (
								<div
									key={project.name}
									className="bg-gray-900 p-6 rounded-lg border border-primary flex flex-col"
								>
									<h3 className="text-xl font-semibold mb-2">{project.name}</h3>
									<p className="text-secondary mb-4 grow">
										{project.description}
									</p>
									<a
										href={project.link}
										className="text-primary hover:underline self-start"
										data-umami-event={`view-project-${project.name
											.toLowerCase()
											.replace(/\s+/g, "-")}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										&gt; ./view_details.sh
									</a>
								</div>
							))}
						</div>
					</section>
					<section id="contact" className="text-center">
						<h2 className="text-3xl font-bold mb-4">
							&gt; ./initiate_contact.sh
						</h2>
						<p className="text-secondary mb-6">
							Let&apos;s connect and bring your idea to life!
						</p>
						<a
							href="mailto:mail@nonswag.dev"
							className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-hover transition-colors animate-pulse"
							data-umami-event="contact-email"
						>
							<Zap className="inline-block mr-2" />
							Establish Secure Channel
						</a>
					</section>
				</main>
				<footer className="py-6 text-center">
					<div className="flex justify-center space-x-6 mb-4">
						<a
							href="https://github.com/NonSwag"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:text-hover transition-colors"
							data-umami-event="view-github"
						>
							<Github className="w-6 h-6" />
							<span className="sr-only">GitHub</span>
						</a>
					</div>
					<p className="text-dark">
						&copy; {new Date().getFullYear()} NonSwag | All rights reserved | I
						&lt;3 OpenSource{" "}
					</p>
				</footer>
			</div>
		</div>
	);
}
