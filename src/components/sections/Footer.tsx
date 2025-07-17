import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook,
  Shield,
  FileText,
  HelpCircle
} from 'lucide-react'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Investment Platform', href: '#' },
      { name: 'Portfolio Management', href: '#' },
      { name: 'Investment Calculator', href: '#' },
      { name: 'Market Research', href: '#' },
      { name: 'Mobile App', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Risk Disclosure', href: '#' },
      { name: 'SEBI Compliance', href: '#' },
      { name: 'Mauritius Regulations', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Investment Guide', href: '#' },
      { name: 'Tax Information', href: '#' },
      { name: 'KYC Support', href: '#' },
      { name: 'Contact Support', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">InvestUS</span>
              </div>
              
              <p className="text-muted-foreground max-w-md">
                Empowering Indian investors to access US equity markets through our 
                tax-efficient Mauritius fund structure with professional management 
                and full regulatory compliance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>support@investus.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+91 80 4567 8900</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Mumbai, India • Port Louis, Mauritius</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="ghost" size="sm" asChild>
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <span>© 2024 InvestUS. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <a key={index} href={link.href} className="hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Regulatory Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Shield className="h-3 w-3" />
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <FileText className="h-3 w-3" />
                <span>FSC Mauritius</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <HelpCircle className="h-3 w-3" />
                <span>DTAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}