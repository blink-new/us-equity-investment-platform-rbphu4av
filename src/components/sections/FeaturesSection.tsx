import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  TrendingUp, 
  Calculator, 
  Globe, 
  FileText, 
  BarChart3,
  Zap,
  Users,
  Lock
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Mauritius Fund Structure',
      description: 'Leverage tax-efficient Mauritius-India DTAA for optimized returns and reduced tax burden.',
      badge: 'Tax Efficient',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Direct US Market Access',
      description: 'Invest directly in NASDAQ and NYSE listed companies including Apple, Google, Tesla, and more.',
      badge: 'Global Access',
      color: 'text-blue-600'
    },
    {
      icon: Calculator,
      title: 'Investment Calculator',
      description: 'Plan your investments with our advanced calculator showing tax benefits and projected returns.',
      badge: 'Planning Tool',
      color: 'text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Portfolio Tracking',
      description: 'Monitor your investments with live market data, performance analytics, and detailed reporting.',
      badge: 'Live Data',
      color: 'text-orange-600'
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'Full SEBI compliance with automated reporting, KYC management, and regulatory documentation.',
      badge: 'Compliant',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Professional Management',
      description: 'Expert fund managers with 15+ years experience in US markets and Indian regulations.',
      badge: 'Expert Team',
      color: 'text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Quick investment processing with T+2 settlement and instant portfolio updates.',
      badge: 'Fast',
      color: 'text-yellow-600'
    },
    {
      icon: Lock,
      title: 'Bank-grade Security',
      description: 'Multi-layer security with encryption, secure custody, and insurance coverage.',
      badge: 'Secure',
      color: 'text-gray-600'
    },
    {
      icon: Globe,
      title: 'Multi-currency Support',
      description: 'Seamless INR to USD conversion with competitive exchange rates and transparent pricing.',
      badge: 'Multi-currency',
      color: 'text-teal-600'
    }
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to invest in US markets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, compliance, and support 
            needed for successful US equity investing from India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-background ${feature.color} bg-opacity-10`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}