"use client"

import React from 'react'
import {ReactTyped} from 'react-typed'
import {technologies} from "@/lib/technologies";
import {Github, Zap} from "lucide-react";

export default function Component() {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
            <div className="relative z-10 p-4">
                <header className="py-6">
                    <nav className="container mx-auto">
                        <ul className="flex justify-center space-x-6 text-lg">
                            {["About", "Tech Stack", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`}
                                       className="hover:text-green-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                <main className="container mx-auto py-12">
                    <section id="hero" className="text-center mb-20">
                        <h1 className="text-5xl font-bold mb-4 glitch" data-text="NonSwag">NonSwag</h1>
                        <ReactTyped
                            strings={[
                                "Developer",
                                "Tech Enthusiast",
                                "Open Source",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            className="text-2xl text-green-400"
                        />
                    </section>
                    <section id="about" className="mb-20">
                        <h2 className="text-3xl font-bold mb-4">&gt; whoami</h2>
                        <p className="text-green-300 leading-relaxed">
                            I am a Java developer specializing in Minecraft plugins and REST APIs, I started programming
                            at the age of 12. I believe users should have the option to customize every aspect of the
                            software they use, and I design everything with that in mind. I&apos;m passionate about
                            contributing to open-source projects, pentesting servers, and helping others fix
                            vulnerabilities.
                        </p>
                    </section>
                    <section id="tech-stack" className="mb-20">
                        <h2 className="text-3xl font-bold mb-4">&gt; cat tech_stack.txt</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {technologies.map((tech, index) => (
                                <div key={index}
                                     className="bg-gray-900 p-4 rounded-lg border border-green-500 flex items-center">
                                    <span className="text-2xl mr-2"><tech.icon/></span>
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
                                    description: "Under the TheNextLvl label I publish Minecraft plugins and run a server network. Focused on performance, quality and customization, TheNextLvl pushes the boundaries of Minecraft plugin development.",
                                    link: "https://thenextlvl.net"
                                },
                                {
                                    name: "MythPvP",
                                    description: "MythPvP is my Minecraft server network that blends mythology and PvP into an immersive experience. With stunning maps, artwork, and engaging gameplay, we aim to deliver an exceptional user experience for all players.",
                                    link: "https://mythpvp.net"
                                }
                            ].map((project, index) => (
                                <div key={index}
                                     className="bg-gray-900 p-6 rounded-lg border border-green-500 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p className="text-green-300 mb-4 flex-grow">{project.description}</p>
                                    <a href={project.link}
                                       className="text-green-400 hover:underline self-start">&gt; ./view_details.sh</a>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="contact" className="text-center">
                        <h2 className="text-3xl font-bold mb-4">&gt; ./initiate_contact.sh</h2>
                        <p className="text-green-300 mb-6">Let&apos;s connect and bring your idea to life!</p>
                        <a
                            href="mailto:mail@nonswag.dev"
                            className="inline-block bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors animate-pulse"
                        >
                            <Zap className="inline-block mr-2"/>
                            Establish Secure Channel
                        </a>
                    </section>
                </main>
                <footer className="py-6 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://github.com/NonSwag" target="_blank" rel="noopener noreferrer"
                           className="text-green-500 hover:text-green-400 transition-colors">
                            <Github className="w-6 h-6"/>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                    <p className="text-green-700">&copy; 2024 NonSwag | All rights reserved | I &lt;3 OpenSource </p>
                </footer>
            </div>
        </div>
    )
}