import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-mono text-white mb-4 uppercase text-sm">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Edge Network</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Compute</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Storage</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-white mb-4 uppercase text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Documentation</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">API Reference</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Guides</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-white mb-4 uppercase text-sm">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted hover:text-primary text-sm">About</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Blog</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-white mb-4 uppercase text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Privacy</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary text-sm">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-muted">All systems operational</span>
          </div>
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} VOID_DEPLOY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
