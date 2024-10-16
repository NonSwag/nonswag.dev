import type {LucideIcon} from 'lucide-react'
import {Code, Coffee, Database, FileText, Github, Package, ShipWheel, Terminal, Zap} from 'lucide-react'

interface Technology {
    name: string;
    icon: LucideIcon;
}

export const technologies: Technology[] = [
    {name: "Java", icon: Coffee},
    {name: "SQL", icon: Database},
    {name: "GitHub", icon: Github},
    {name: "Paper", icon: FileText},
    {name: "Velocity", icon: Zap},
    {name: "Docker", icon: ShipWheel},
    {name: "Ubuntu", icon: Terminal},
    {name: "JetBrains IDEs", icon: Code},
    {name: "Reposilite", icon: Package},
]