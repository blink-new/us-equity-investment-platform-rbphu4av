import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Shield, 
  Globe, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Scale,
  Building,
  Users,
  Lock,
  Award,
  BookOpen
} from 'lucide-react'

const RegulatoryInfo = () => {
  const regulations = [
    {
      title: 'Mauritius Financial Services Commission (FSC)',
      description: 'Our fund is licensed and regulated by the FSC, Mauritius',
      status: 'Active',
      license: 'GB19103456',
      details: [
        'Licensed Global Business Category 1 entity',
        'Subject to FSC supervision and reporting',
        'Compliance with Mauritius Securities Act',
        'Regular audits and regulatory filings'
      ]
    },
    {
      title: 'Securities and Exchange Board of India (SEBI)',
      description: 'Compliant with Indian regulations for overseas investments',
      status: 'Compliant',
      license: 'INP000012345',
      details: [
        'Registered as Portfolio Investment Scheme',
        'Compliance with LRS regulations',
        'FEMA compliance for Indian investors',
        'Regular reporting to RBI and SEBI'
      ]
    },
    {
      title: 'US Securities Regulations',
      description: 'Compliance with US market regulations for equity investments',
      status: 'Compliant',
      license: 'SEC Exempt',
      details: [
        'Qualified Institutional Buyer (QIB) status',
        'Compliance with US securities laws',
        'Regular filings with US authorities',
        'Anti-money laundering compliance'
      ]
    }
  ]

  const taxBenefits = [
    {
      title: 'India-Mauritius DTAA',
      benefit: 'No Capital Gains Tax',
      description: 'Capital gains from equity investments are exempt from tax in India under the Double Taxation Avoidance Agreement',
      savings: 'Up to 20% + 4% cess savings'
    },
    {
      title: 'US-Mauritius Tax Treaty',
      benefit: 'Reduced Withholding Tax',
      description: 'Dividend income from US stocks subject to reduced withholding tax rates',
      savings: 'Reduced from 30% to 15%'
    },
    {
      title: 'Treaty Shopping Benefits',
      benefit: 'Optimized Tax Structure',
      description: 'Strategic use of tax treaties to minimize overall tax burden on investments',
      savings: 'Significant tax optimization'
    }
  ]

  const complianceFramework = [
    {
      area: 'Anti-Money Laundering (AML)',
      requirements: [
        'Customer Due Diligence (CDD) procedures',
        'Enhanced Due Diligence for high-risk clients',
        'Suspicious transaction reporting',
        'Regular AML training for staff'
      ]
    },
    {
      area: 'Know Your Customer (KYC)',
      requirements: [
        'Identity verification procedures',
        'Source of funds verification',
        'Ongoing monitoring of client relationships',
        'Regular KYC updates and reviews'
      ]
    },
    {
      area: 'Risk Management',
      requirements: [
        'Comprehensive risk assessment framework',
        'Regular stress testing and scenario analysis',
        'Investment committee oversight',
        'Independent risk monitoring'
      ]
    },
    {
      area: 'Reporting & Disclosure',
      requirements: [
        'Regular financial reporting to regulators',
        'Transparent disclosure to investors',
        'Compliance with international standards',
        'Third-party audit and verification'
      ]
    }
  ]

  const investorProtections = [
    {
      title: 'Segregated Assets',
      description: 'Client assets are held separately from company assets in segregated accounts',
      icon: Lock
    },
    {
      title: 'Professional Indemnity Insurance',
      description: 'Comprehensive insurance coverage for professional liability and errors',
      icon: Shield
    },
    {
      title: 'Regulatory Oversight',
      description: 'Regular supervision and monitoring by multiple regulatory authorities',
      icon: Scale
    },
    {
      title: 'Independent Custodian',
      description: 'Assets held with reputable international custodian banks',
      icon: Building
    },
    {
      title: 'Audit & Compliance',
      description: 'Regular audits by Big 4 accounting firms and compliance reviews',
      icon: Award
    },
    {
      title: 'Investor Compensation',
      description: 'Access to investor compensation schemes in case of default',
      icon: Users
    }
  ]

  const riskDisclosures = [
    {
      category: 'Market Risk',
      description: 'Equity investments are subject to market volatility and may result in losses',
      mitigation: 'Diversified portfolio and professional risk management'
    },
    {
      category: 'Currency Risk',
      description: 'Investments in USD are subject to currency exchange rate fluctuations',
      mitigation: 'Currency hedging strategies available on request'
    },
    {
      category: 'Regulatory Risk',
      description: 'Changes in regulations may impact investment returns and structure',
      mitigation: 'Continuous monitoring and adaptation to regulatory changes'
    },
    {
      category: 'Liquidity Risk',
      description: 'Some investments may have limited liquidity during market stress',
      mitigation: 'Diversified holdings and liquidity management framework'
    },
    {
      category: 'Concentration Risk',
      description: 'Over-concentration in specific sectors or stocks may increase risk',
      mitigation: 'Portfolio diversification and position limits'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">EquityBridge</span>
              <span className="text-muted-foreground">/ Regulatory Information</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Regulatory Information</h1>
          <p className="text-muted-foreground">
            Comprehensive regulatory compliance and investor protection framework
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="regulations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="regulations">Regulations</TabsTrigger>
            <TabsTrigger value="tax-benefits">Tax Benefits</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="protection">Protection</TabsTrigger>
            <TabsTrigger value="risks">Risk Disclosure</TabsTrigger>
          </TabsList>

          <TabsContent value="regulations" className="space-y-6">
            <div className="grid gap-6">
              {regulations.map((regulation, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Globe className="h-5 w-5" />
                          <span>{regulation.title}</span>
                        </CardTitle>
                        <CardDescription className="mt-2">{regulation.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant={regulation.status === 'Active' ? 'default' : 'secondary'}>
                          {regulation.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          License: {regulation.license}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {regulation.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tax-benefits" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Optimization Through Mauritius Structure</CardTitle>
                <CardDescription>
                  Strategic tax benefits available through our Mauritius-based fund structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {taxBenefits.map((benefit, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-foreground">{benefit.title}</h3>
                          <Badge variant="secondary" className="mt-1">{benefit.benefit}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">{benefit.savings}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Structure Diagram</CardTitle>
                <CardDescription>How the Mauritius structure optimizes your tax burden</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8">
                  <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-blue-100 rounded-lg">
                      <div className="font-medium">Indian Investor</div>
                      <div className="text-sm text-muted-foreground">You</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="inline-block p-4 bg-green-100 rounded-lg">
                      <div className="font-medium">Mauritius Fund</div>
                      <div className="text-sm text-muted-foreground">Tax-efficient structure</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="inline-block p-4 bg-purple-100 rounded-lg">
                      <div className="font-medium">US Equity Markets</div>
                      <div className="text-sm text-muted-foreground">NYSE, NASDAQ</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>Benefits: No capital gains tax + Reduced withholding tax + Professional management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid gap-6">
              {complianceFramework.map((framework, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>{framework.area}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {framework.requirements.map((requirement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="protection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investor Protection Measures</CardTitle>
                <CardDescription>
                  Comprehensive safeguards to protect your investments and interests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {investorProtections.map((protection, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-border rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <protection.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">{protection.title}</h3>
                        <p className="text-sm text-muted-foreground">{protection.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Authorities</CardTitle>
                <CardDescription>Multiple layers of regulatory oversight and supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-2">Mauritius FSC</h3>
                    <p className="text-sm text-muted-foreground">Primary regulator for fund operations</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Scale className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-medium mb-2">SEBI India</h3>
                    <p className="text-sm text-muted-foreground">Oversight for Indian investor compliance</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-medium mb-2">US SEC</h3>
                    <p className="text-sm text-muted-foreground">US market regulations compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>Risk Disclosure Statement</span>
                </CardTitle>
                <CardDescription>
                  Important risks associated with equity investments through Mauritius structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskDisclosures.map((risk, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-foreground">{risk.category}</h3>
                        <Badge variant="outline">Risk</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium">Mitigation: {risk.mitigation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Disclaimers</CardTitle>
                <CardDescription>Please read these important disclaimers carefully</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <BookOpen className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800 mb-1">Investment Risk</p>
                        <p className="text-yellow-700">
                          All investments carry risk and past performance is not indicative of future results. 
                          The value of investments may go down as well as up.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Scale className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-800 mb-1">Regulatory Changes</p>
                        <p className="text-blue-700">
                          Tax benefits and regulatory structures may change due to amendments in laws 
                          and regulations in India, Mauritius, or the United States.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800 mb-1">Professional Advice</p>
                        <p className="text-red-700">
                          This information is for educational purposes only. Please consult with qualified 
                          tax and legal advisors before making investment decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default RegulatoryInfo