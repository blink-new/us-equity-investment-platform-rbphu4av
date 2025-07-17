import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export function InvestmentProcess() {
  const steps = [
    {
      step: '01',
      icon: UserCheck,
      title: 'Complete KYC',
      description: 'Quick digital onboarding with Aadhaar verification and risk assessment.',
      duration: '5 minutes',
      requirements: ['Aadhaar Card', 'PAN Card', 'Bank Account']
    },
    {
      step: '02',
      icon: CreditCard,
      title: 'Fund Your Account',
      description: 'Transfer funds via NEFT/RTGS or UPI with instant confirmation.',
      duration: '2-4 hours',
      requirements: ['Minimum ₹25,000', 'Bank Transfer', 'UPI Payment']
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Choose Investments',
      description: 'Select from curated US stocks or let our AI recommend based on your profile.',
      duration: 'Instant',
      requirements: ['Risk Profile', 'Investment Goals', 'Time Horizon']
    },
    {
      step: '04',
      icon: BarChart3,
      title: 'Track & Manage',
      description: 'Monitor performance, rebalance portfolio, and access detailed analytics.',
      duration: 'Ongoing',
      requirements: ['Dashboard Access', 'Mobile App', 'Regular Reports']
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start investing in 4 simple steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process gets you invested in US markets quickly and securely, 
            with full regulatory compliance handled for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-primary border-primary">
                      Step {step.step}
                    </Badge>
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.duration}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Requirements
                    </div>
                    {step.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-bg text-lg px-8">
            Start Your Investment Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            No hidden fees • SEBI registered • 24/7 support
          </p>
        </div>
      </div>
    </section>
  )
}