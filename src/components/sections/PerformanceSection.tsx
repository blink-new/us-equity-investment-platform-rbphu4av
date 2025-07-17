import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export function PerformanceSection() {
  const performanceData = {
    '1Y': {
      fundReturn: 15.2,
      benchmark: 12.8,
      alpha: 2.4,
      volatility: 18.5
    },
    '3Y': {
      fundReturn: 18.7,
      benchmark: 14.2,
      alpha: 4.5,
      volatility: 16.8
    },
    '5Y': {
      fundReturn: 22.1,
      benchmark: 16.9,
      alpha: 5.2,
      volatility: 15.2
    }
  }

  const topHoldings = [
    { symbol: 'AAPL', name: 'Apple Inc.', allocation: 8.5, change: 2.3, price: '$175.43' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', allocation: 7.2, change: 1.8, price: '$338.11' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', allocation: 6.8, change: -0.5, price: '$138.21' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', allocation: 5.9, change: 3.1, price: '$144.73' },
    { symbol: 'TSLA', name: 'Tesla Inc.', allocation: 4.3, change: -1.2, price: '$248.50' }
  ]

  const metrics = [
    { label: 'Total AUM', value: '₹2,547 Cr', change: 12.5, icon: DollarSign },
    { label: 'Active Investors', value: '15,247', change: 8.3, icon: TrendingUp },
    { label: 'Avg. Investment', value: '₹1.67L', change: 5.7, icon: BarChart3 },
    { label: 'Fund Rating', value: '4.8/5', change: 0.2, icon: TrendingUp }
  ]

  return (
    <section id="performance" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Fund Performance
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Consistent outperformance across all time periods
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Mauritius-based US equity fund has consistently delivered superior returns 
            while maintaining optimal risk-adjusted performance.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="h-8 w-8 text-primary" />
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change > 0 ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    <span>{Math.abs(metric.change)}%</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Fund Performance
                <Badge variant="outline">Updated Live</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="1Y" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="1Y">1 Year</TabsTrigger>
                  <TabsTrigger value="3Y">3 Years</TabsTrigger>
                  <TabsTrigger value="5Y">5 Years</TabsTrigger>
                </TabsList>
                
                {Object.entries(performanceData).map(([period, data]) => (
                  <TabsContent key={period} value={period} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Fund Return (CAGR)</div>
                        <div className="text-2xl font-bold text-green-600">+{data.fundReturn}%</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Benchmark Return</div>
                        <div className="text-2xl font-bold text-muted-foreground">+{data.benchmark}%</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Alpha Generated</div>
                        <div className="text-2xl font-bold text-primary">+{data.alpha}%</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Volatility</div>
                        <div className="text-2xl font-bold text-muted-foreground">{data.volatility}%</div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Top Holdings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Top Holdings
                <Badge variant="outline">As of Today</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topHoldings.map((holding, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{holding.symbol.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium">{holding.symbol}</div>
                        <div className="text-sm text-muted-foreground">{holding.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{holding.allocation}%</div>
                      <div className={`text-sm flex items-center ${
                        holding.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {holding.change > 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {Math.abs(holding.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Portfolio
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}