export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-accent/20 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">TRex Construction</h3>
            <p className="text-primary-foreground/70 text-sm">Building excellence through quality and innovation.</p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Building Construction</li>
              <li>Renovations</li>
              <li>Infrastructure</li>
              <li>Consultations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-lg bg-background/10 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center text-primary-foreground/70 hover:text-accent"
                  aria-label={social}
                >
                  {social[0].toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} TRex Construction. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
