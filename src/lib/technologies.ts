import { ArrowDownUp, Send, type LucideIcon } from "lucide-react"
import { Code, Coffee, Database, Github, Package, ShipWheel, Terminal, Zap } from "lucide-react"

interface Technology {
  name: string
  icon: LucideIcon
}

export const technologies: Technology[] = [
  { name: "Java", icon: Coffee },
  { name: "SQL", icon: Database },
  { name: "GitHub", icon: Github },
  { name: "Paper", icon: Send },
  { name: "Velocity", icon: Zap },
  { name: "Javalin", icon: ArrowDownUp },
  { name: "Docker", icon: ShipWheel },
  { name: "Ubuntu", icon: Terminal },
  { name: "JetBrains IDEs", icon: Code },
  { name: "Reposilite", icon: Package },
]
