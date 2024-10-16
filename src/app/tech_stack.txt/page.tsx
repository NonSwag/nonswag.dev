'use client'


import {technologies} from "@/lib/technologies";

export default function TechStack() {
    return (
        <div className="flex flex-col">
            {technologies && technologies.map((item) => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>
    )
}