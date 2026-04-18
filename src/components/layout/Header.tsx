import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary" />
          <span className="font-sans font-bold text-xl tracking-tight">VOID_DEPLOY</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-mono text-muted hover:text-white transition-colors">Features</Link>
          <Link href="#docs" className="text-sm font-mono text-muted hover:text-white transition-colors">Docs</Link>
          <Link href="#pricing" className="text-sm font-mono text-muted hover:text-white transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-mono text-muted hover:text-white transition-colors hidden sm:block">
            Login
          </Link>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
