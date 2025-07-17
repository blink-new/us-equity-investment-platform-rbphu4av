import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Shield, Globe, Calculator, ArrowRight, CheckCircle } from 'lucide-react'

export function HeroSection() {
  const benefits = [
    'Tax-efficient Mauritius structure',
    'Direct US equity access',
    'Professional fund management',
    'Regulatory compliance handled'
  ]

  const stats = [
    { label: 'Assets Under Management', value: '₹2,500 Cr+', icon: TrendingUp },
    { label: 'Active Investors', value: '15,000+', icon: Globe },
    { label: 'Average Returns', value: '12.5% p.a.', icon: TrendingUp },
    { label: 'Fund Rating', value: '4.8/5', icon: Shield }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Shield className="h-3 w-3 mr-1" />
                SEBI Registered Fund
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Invest in 
                <span className="text-primary"> US Equities</span>
                <br />
                from India
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Access the world's largest stock market through our Mauritius-based fund structure. 
                Enjoy tax benefits, professional management, and seamless investing experience.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-lg px-8">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Calculator className="mr-2 h-5 w-5" />
                Investment Calculator
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Mauritius Regulated</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}