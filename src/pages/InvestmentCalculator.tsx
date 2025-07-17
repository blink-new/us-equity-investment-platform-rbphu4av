import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Slider } from '../components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Calculator, 
  TrendingUp, 
  DollarSign,
  BarChart3,
  PieChart,
  Target,
  Calendar,
  Percent
} from 'lucide-react'

const InvestmentCalculator = () => {
  const [sipAmount, setSipAmount] = useState(25000)
  const [lumpsum, setLumpsum] = useState(500000)
  const [investmentPeriod, setInvestmentPeriod] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [inflationRate, setInflationRate] = useState(6)

  // SIP Calculations
  const monthlyRate = expectedReturn / 100 / 12
  const months = investmentPeriod * 12
  const sipMaturityAmount = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
  const sipTotalInvested = sipAmount * months
  const sipReturns = sipMaturityAmount - sipTotalInvested

  // Lumpsum Calculations
  const lumpsumMaturityAmount = lumpsum * Math.pow(1 + expectedReturn / 100, investmentPeriod)
  const lumpsumReturns = lumpsumMaturityAmount - lumpsum

  // Tax calculations (Mauritius structure benefits)
  const indianTaxRate = 20 // LTCG in India
  const mauritiusTaxRate = 0 // No capital gains tax
  const taxSavings = (sipReturns + lumpsumReturns) * (indianTaxRate / 100)

  // Inflation adjusted returns
  const realReturnRate = ((1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1) * 100
  const inflationAdjustedValue = sipMaturityAmount / Math.pow(1 + inflationRate / 100, investmentPeriod)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const scenarios = [
    { name: 'Conservative', return: 8, description: 'Low risk, stable returns' },
    { name: 'Moderate', return: 12, description: 'Balanced risk-return profile' },
    { name: 'Aggressive', return: 15, description: 'High risk, high potential returns' }
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
              <span className="text-muted-foreground">/ Investment Calculator</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Investment Calculator</h1>
          <p className="text-muted-foreground">Plan your US equity investments with tax-efficient Mauritius structure</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5" />
                  <span>Investment Parameters</span>
                </CardTitle>
                <CardDescription>Adjust your investment details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="sip-amount">Monthly SIP Amount</Label>
                  <Input
                    id="sip-amount"
                    type="number"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    placeholder="25000"
                  />
                  <div className="text-sm text-muted-foreground">₹{sipAmount.toLocaleString()}/month</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lumpsum">One-time Investment</Label>
                  <Input
                    id="lumpsum"
                    type="number"
                    value={lumpsum}
                    onChange={(e) => setLumpsum(Number(e.target.value))}
                    placeholder="500000"
                  />
                  <div className="text-sm text-muted-foreground">₹{lumpsum.toLocaleString()}</div>
                </div>

                <div className="space-y-3">
                  <Label>Investment Period: {investmentPeriod} years</Label>
                  <Slider
                    value={[investmentPeriod]}
                    onValueChange={(value) => setInvestmentPeriod(value[0])}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Expected Annual Return: {expectedReturn}%</Label>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    max={20}
                    min={5}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Inflation Rate: {inflationRate}%</Label>
                  <Slider
                    value={[inflationRate]}
                    onValueChange={(value) => setInflationRate(value[0])}
                    max={10}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>3%</span>
                    <span>10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Scenarios</CardTitle>
                <CardDescription>Pre-configured investment scenarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {scenarios.map((scenario, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => setExpectedReturn(scenario.return)}
                  >
                    <div className="text-left">
                      <div className="font-medium">{scenario.name} ({scenario.return}%)</div>
                      <div className="text-xs text-muted-foreground">{scenario.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="results" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="comparison">Comparison</TabsTrigger>
                <TabsTrigger value="tax-benefits">Tax Benefits</TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="space-y-6">
                {/* SIP Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>SIP Investment Results</span>
                    </CardTitle>
                    <CardDescription>Monthly investment of {formatCurrency(sipAmount)} for {investmentPeriod} years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{formatCurrency(sipTotalInvested)}</div>
                        <div className="text-sm text-muted-foreground">Total Invested</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{formatCurrency(sipReturns)}</div>
                        <div className="text-sm text-muted-foreground">Returns Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">{formatCurrency(sipMaturityAmount)}</div>
                        <div className="text-sm text-muted-foreground">Maturity Amount</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lumpsum Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5" />
                      <span>Lumpsum Investment Results</span>
                    </CardTitle>
                    <CardDescription>One-time investment of {formatCurrency(lumpsum)} for {investmentPeriod} years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{formatCurrency(lumpsum)}</div>
                        <div className="text-sm text-muted-foreground">Initial Investment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{formatCurrency(lumpsumReturns)}</div>
                        <div className="text-sm text-muted-foreground">Returns Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">{formatCurrency(lumpsumMaturityAmount)}</div>
                        <div className="text-sm text-muted-foreground">Maturity Amount</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Combined Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Combined Investment Summary</span>
                    </CardTitle>
                    <CardDescription>Total portfolio value combining SIP and lumpsum investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Total Investment</span>
                          <span className="font-medium">{formatCurrency(sipTotalInvested + lumpsum)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Total Returns</span>
                          <span className="font-medium text-green-500">{formatCurrency(sipReturns + lumpsumReturns)}</span>
                        </div>
                        <div className="flex justify-between items-center border-t pt-4">
                          <span className="font-medium">Total Maturity Value</span>
                          <span className="text-xl font-bold text-primary">{formatCurrency(sipMaturityAmount + lumpsumMaturityAmount)}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Absolute Return</span>
                          <span className="font-medium">{(((sipMaturityAmount + lumpsumMaturityAmount) / (sipTotalInvested + lumpsum) - 1) * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Real Return Rate</span>
                          <span className="font-medium">{realReturnRate.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between items-center border-t pt-4">
                          <span className="font-medium">Inflation Adjusted Value</span>
                          <span className="text-lg font-bold text-blue-500">{formatCurrency(inflationAdjustedValue)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>SIP vs Lumpsum Comparison</CardTitle>
                    <CardDescription>Compare different investment strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border border-border rounded-lg">
                          <h3 className="font-medium mb-3 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            SIP Investment
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Monthly Investment:</span>
                              <span className="font-medium">{formatCurrency(sipAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Invested:</span>
                              <span className="font-medium">{formatCurrency(sipTotalInvested)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Final Value:</span>
                              <span className="font-medium text-green-500">{formatCurrency(sipMaturityAmount)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span>Return Multiple:</span>
                              <span className="font-bold">{(sipMaturityAmount / sipTotalInvested).toFixed(1)}x</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border border-border rounded-lg">
                          <h3 className="font-medium mb-3 flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            Lumpsum Investment
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Initial Investment:</span>
                              <span className="font-medium">{formatCurrency(lumpsum)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Invested:</span>
                              <span className="font-medium">{formatCurrency(lumpsum)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Final Value:</span>
                              <span className="font-medium text-green-500">{formatCurrency(lumpsumMaturityAmount)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span>Return Multiple:</span>
                              <span className="font-bold">{(lumpsumMaturityAmount / lumpsum).toFixed(1)}x</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Investment Strategy Recommendation</h4>
                        <p className="text-sm text-blue-700">
                          {sipMaturityAmount > lumpsumMaturityAmount 
                            ? "SIP investment shows better results due to rupee cost averaging and compounding benefits over time."
                            : "Lumpsum investment shows better results due to longer investment horizon and compound growth."
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tax-benefits" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Percent className="h-5 w-5" />
                      <span>Mauritius Structure Tax Benefits</span>
                    </CardTitle>
                    <CardDescription>Tax advantages of investing through Mauritius fund structure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                          <h3 className="font-medium text-red-800 mb-3">Direct US Investment (India)</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Capital Gains Tax:</span>
                              <span className="font-medium">20% + 4% Cess</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dividend Tax:</span>
                              <span className="font-medium">30% Withholding</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax on Returns:</span>
                              <span className="font-medium text-red-600">{formatCurrency(taxSavings)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span>Net Returns:</span>
                              <span className="font-bold">{formatCurrency((sipReturns + lumpsumReturns) - taxSavings)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                          <h3 className="font-medium text-green-800 mb-3">Mauritius Fund Structure</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Capital Gains Tax:</span>
                              <span className="font-medium">0% (DTAA Benefit)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dividend Tax:</span>
                              <span className="font-medium">Reduced Rate</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax on Returns:</span>
                              <span className="font-medium text-green-600">₹0</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span>Net Returns:</span>
                              <span className="font-bold">{formatCurrency(sipReturns + lumpsumReturns)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-primary mb-2">Total Tax Savings</h3>
                          <div className="text-3xl font-bold text-green-500 mb-2">{formatCurrency(taxSavings)}</div>
                          <p className="text-sm text-muted-foreground">
                            Over {investmentPeriod} years through Mauritius DTAA structure
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Key Tax Benefits:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-sm">No Capital Gains Tax</div>
                              <div className="text-xs text-muted-foreground">DTAA between Mauritius and India</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-sm">Reduced Withholding Tax</div>
                              <div className="text-xs text-muted-foreground">On US dividend income</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-sm">Treaty Shopping Benefits</div>
                              <div className="text-xs text-muted-foreground">Optimized tax structure</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-sm">Professional Management</div>
                              <div className="text-xs text-muted-foreground">Expert fund management</div>
                            </div>
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
      </div>
    </div>
  )
}

export default InvestmentCalculator