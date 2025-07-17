import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  TrendingUp, 
  Award, 
  Shield, 
  Globe,
  BarChart3,
  Target,
  Calendar,
  Users,
  DollarSign,
  Star
} from 'lucide-react'

const FundPerformance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y')

  const fundMetrics = {
    aum: 2.5, // in billions
    investors: 15000,
    inception: '2019-03-15',
    rating: 'AAA',
    expense_ratio: 0.75,
    minimum_investment: 50000
  }

  const performance = {
    '1M': { fund: 2.4, benchmark: 1.8, outperformance: 0.6 },
    '3M': { fund: 8.7, benchmark: 7.2, outperformance: 1.5 },
    '6M': { fund: 14.2, benchmark: 12.8, outperformance: 1.4 },
    '1Y': { fund: 18.5, benchmark: 15.2, outperformance: 3.3 },
    '3Y': { fund: 45.8, benchmark: 38.4, outperformance: 7.4 },
    '5Y': { fund: 89.2, benchmark: 76.8, outperformance: 12.4 }
  }

  const riskMetrics = {
    volatility: 16.8,
    sharpe_ratio: 1.45,
    max_drawdown: -12.3,
    beta: 1.12,
    alpha: 3.2,
    information_ratio: 0.85
  }

  const topHoldings = [
    { symbol: 'AAPL', name: 'Apple Inc.', weight: 8.5, sector: 'Technology' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', weight: 7.2, sector: 'Technology' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', weight: 6.8, sector: 'Consumer Discretionary' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', weight: 6.1, sector: 'Technology' },
    { symbol: 'TSLA', name: 'Tesla Inc.', weight: 4.9, sector: 'Consumer Discretionary' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', weight: 4.3, sector: 'Technology' },
    { symbol: 'META', name: 'Meta Platforms', weight: 3.8, sector: 'Technology' },
    { symbol: 'BRK.B', name: 'Berkshire Hathaway', weight: 3.5, sector: 'Financial Services' }
  ]

  const sectorAllocation = [
    { sector: 'Technology', weight: 42.5, color: 'bg-blue-500' },
    { sector: 'Healthcare', weight: 15.8, color: 'bg-green-500' },
    { sector: 'Financial Services', weight: 12.3, color: 'bg-yellow-500' },
    { sector: 'Consumer Discretionary', weight: 11.7, color: 'bg-purple-500' },
    { sector: 'Communication Services', weight: 8.9, color: 'bg-pink-500' },
    { sector: 'Industrials', weight: 5.2, color: 'bg-indigo-500' },
    { sector: 'Others', weight: 3.6, color: 'bg-gray-500' }
  ]

  const awards = [
    { title: 'Best US Equity Fund', organization: 'Mauritius Investment Awards', year: '2023' },
    { title: 'Top Performing Fund', organization: 'Asian Fund Management', year: '2023' },
    { title: 'Excellence in Risk Management', organization: 'Global Fund Awards', year: '2022' }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

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
              <span className="text-muted-foreground">/ Fund Performance</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mauritius Fund Performance</h1>
          <p className="text-muted-foreground">Comprehensive analysis of our US equity fund structure</p>
        </div>

        {/* Fund Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assets Under Management</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${fundMetrics.aum}B</div>
              <div className="text-sm text-muted-foreground">Total fund size</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Investors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fundMetrics.investors.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Indian investors</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fund Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fundMetrics.rating}</div>
              <div className="text-sm text-muted-foreground">Mauritius FSC Rating</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expense Ratio</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fundMetrics.expense_ratio}%</div>
              <div className="text-sm text-muted-foreground">Annual management fee</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance vs Benchmark</CardTitle>
                  <CardDescription>Fund performance compared to S&P 500 index</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-2 mb-4">
                      {Object.keys(performance).map((period) => (
                        <Button
                          key={period}
                          variant={selectedPeriod === period ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedPeriod(period)}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Fund Return</span>
                        <span className="text-lg font-bold text-green-500">
                          +{performance[selectedPeriod as keyof typeof performance].fund}%
                        </span>
                      </div>
                      <Progress value={performance[selectedPeriod as keyof typeof performance].fund} className="h-3" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">S&P 500 Benchmark</span>
                        <span className="text-lg font-bold text-blue-500">
                          +{performance[selectedPeriod as keyof typeof performance].benchmark}%
                        </span>
                      </div>
                      <Progress value={performance[selectedPeriod as keyof typeof performance].benchmark} className="h-3" />
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Outperformance</span>
                          <span className="text-lg font-bold text-primary">
                            +{performance[selectedPeriod as keyof typeof performance].outperformance}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Statistics</CardTitle>
                  <CardDescription>Fund performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inception Date</span>
                      <span className="text-sm font-medium">{fundMetrics.inception}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Minimum Investment</span>
                      <span className="text-sm font-medium">₹{fundMetrics.minimum_investment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Fund Manager</span>
                      <span className="text-sm font-medium">EquityBridge Asset Management</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Domicile</span>
                      <span className="text-sm font-medium">Mauritius</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Base Currency</span>
                      <span className="text-sm font-medium">USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dealing Frequency</span>
                      <span className="text-sm font-medium">Daily</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Historical Performance Chart</CardTitle>
                <CardDescription>Fund performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive performance chart would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="holdings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Holdings</CardTitle>
                  <CardDescription>Largest positions in the fund</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topHoldings.map((holding, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">{holding.symbol}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">{holding.name}</div>
                            <div className="text-xs text-muted-foreground">{holding.sector}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{holding.weight}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                  <CardDescription>Portfolio distribution by sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sectorAllocation.map((sector, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{sector.sector}</span>
                          <span className="text-sm text-muted-foreground">{sector.weight}%</span>
                        </div>
                        <Progress value={sector.weight} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Metrics</CardTitle>
                  <CardDescription>Fund risk analysis and measures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Volatility (Annualized)</span>
                      <span className="text-sm font-medium">{riskMetrics.volatility}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sharpe Ratio</span>
                      <span className="text-sm font-medium">{riskMetrics.sharpe_ratio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maximum Drawdown</span>
                      <span className="text-sm font-medium text-red-500">{riskMetrics.max_drawdown}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Beta (vs S&P 500)</span>
                      <span className="text-sm font-medium">{riskMetrics.beta}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Alpha</span>
                      <span className="text-sm font-medium text-green-500">+{riskMetrics.alpha}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Information Ratio</span>
                      <span className="text-sm font-medium">{riskMetrics.information_ratio}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                  <CardDescription>Fund risk profile and suitability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Risk Level: Moderate to High</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        This fund is suitable for investors with moderate to high risk tolerance 
                        seeking long-term capital appreciation through US equity exposure.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Risk Factors:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Market volatility and economic cycles</li>
                        <li>• Currency exchange rate fluctuations</li>
                        <li>• Regulatory changes in US and India</li>
                        <li>• Concentration risk in technology sector</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Awards & Recognition</CardTitle>
                  <CardDescription>Industry awards and accolades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {awards.map((award, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium">{award.title}</div>
                          <div className="text-sm text-muted-foreground">{award.organization}</div>
                          <div className="text-xs text-muted-foreground">{award.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Compliance</CardTitle>
                  <CardDescription>Regulatory oversight and compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Mauritius FSC Regulated</div>
                        <div className="text-sm text-muted-foreground">
                          Licensed and regulated by Financial Services Commission, Mauritius
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">SEBI Compliant</div>
                        <div className="text-sm text-muted-foreground">
                          Compliant with Indian regulations for overseas investments
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="text-sm text-green-800">
                        <strong>Tax Benefits:</strong> Optimized tax structure through Mauritius 
                        Double Taxation Avoidance Agreement (DTAA) with India and USA.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default FundPerformance