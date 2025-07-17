import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { 
  User, 
  FileText, 
  CreditCard, 
  Shield,
  CheckCircle,
  Upload,
  AlertCircle,
  BarChart3,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'

const KYCOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panNumber: '',
    aadharNumber: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Financial Information
    annualIncome: '',
    investmentExperience: '',
    riskTolerance: '',
    investmentGoals: '',
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    
    // Documents
    panCard: null,
    aadharCard: null,
    bankStatement: null,
    incomeProof: null,
    
    // Declarations
    termsAccepted: false,
    fatcaDeclaration: false,
    riskDisclosure: false
  })

  const totalSteps = 5
  const progressPercentage = (currentStep / totalSteps) * 100

  const steps = [
    { number: 1, title: 'Personal Info', icon: User, description: 'Basic personal details' },
    { number: 2, title: 'Address', icon: FileText, description: 'Residential information' },
    { number: 3, title: 'Financial Profile', icon: CreditCard, description: 'Income and investment details' },
    { number: 4, title: 'Documents', icon: Upload, description: 'Upload required documents' },
    { number: 5, title: 'Review & Submit', icon: Shield, description: 'Final verification' }
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle KYC submission
    console.log('KYC Data:', formData)
    alert('KYC application submitted successfully!')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number *</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  placeholder="ABCDE1234F"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="aadharNumber">Aadhar Number *</Label>
              <Input
                id="aadharNumber"
                value={formData.aadharNumber}
                onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                placeholder="1234 5678 9012"
                maxLength={12}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Complete Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter your complete residential address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Enter your city"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pincode">PIN Code *</Label>
              <Input
                id="pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                placeholder="400001"
                maxLength={6}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="annualIncome">Annual Income *</Label>
              <Select value={formData.annualIncome} onValueChange={(value) => handleInputChange('annualIncome', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your annual income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-5">Below ₹5 Lakhs</SelectItem>
                  <SelectItem value="5-10">₹5 - 10 Lakhs</SelectItem>
                  <SelectItem value="10-25">₹10 - 25 Lakhs</SelectItem>
                  <SelectItem value="25-50">₹25 - 50 Lakhs</SelectItem>
                  <SelectItem value="50-100">₹50 Lakhs - 1 Crore</SelectItem>
                  <SelectItem value="above-100">Above ₹1 Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investmentExperience">Investment Experience *</Label>
              <Select value={formData.investmentExperience} onValueChange={(value) => handleInputChange('investmentExperience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your investment experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="riskTolerance">Risk Tolerance *</Label>
              <Select value={formData.riskTolerance} onValueChange={(value) => handleInputChange('riskTolerance', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your risk tolerance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative - Low risk, stable returns</SelectItem>
                  <SelectItem value="moderate">Moderate - Balanced risk and return</SelectItem>
                  <SelectItem value="aggressive">Aggressive - High risk, high potential returns</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investmentGoals">Investment Goals</Label>
              <Textarea
                id="investmentGoals"
                value={formData.investmentGoals}
                onChange={(e) => handleInputChange('investmentGoals', e.target.value)}
                placeholder="Describe your investment goals and objectives"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleInputChange('bankName', e.target.value)}
                  placeholder="HDFC Bank"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                  placeholder="1234567890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code *</Label>
                <Input
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                  placeholder="HDFC0001234"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">PAN Card *</CardTitle>
                  <CardDescription>Upload clear image of your PAN card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aadhar Card *</CardTitle>
                  <CardDescription>Upload both sides of Aadhar card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bank Statement *</CardTitle>
                  <CardDescription>Last 3 months bank statement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PDF up to 10MB</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Income Proof</CardTitle>
                  <CardDescription>Salary slip or ITR (optional)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PDF up to 10MB</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Document Requirements</h4>
                  <ul className="text-sm text-blue-700 mt-1 space-y-1">
                    <li>• All documents should be clear and readable</li>
                    <li>• PAN and Aadhar details should match the information provided</li>
                    <li>• Bank statement should show your name and account details</li>
                    <li>• File size should not exceed the specified limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Your Information</CardTitle>
                <CardDescription>Please verify all details before submission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Personal Information</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Name: {formData.firstName} {formData.lastName}</p>
                      <p>Email: {formData.email}</p>
                      <p>Phone: {formData.phone}</p>
                      <p>PAN: {formData.panNumber}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state}</p>
                      <p>PIN: {formData.pincode}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Financial Profile</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Income: {formData.annualIncome}</p>
                      <p>Experience: {formData.investmentExperience}</p>
                      <p>Risk Tolerance: {formData.riskTolerance}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Bank Details</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Bank: {formData.bankName}</p>
                      <p>Account: {formData.accountNumber}</p>
                      <p>IFSC: {formData.ifscCode}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Declarations & Consent</CardTitle>
                <CardDescription>Please read and accept the following declarations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I accept the <a href="#" className="text-primary underline">Terms and Conditions</a> and{' '}
                    <a href="#" className="text-primary underline">Privacy Policy</a> of InvestUS
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="fatca"
                    checked={formData.fatcaDeclaration}
                    onCheckedChange={(checked) => handleInputChange('fatcaDeclaration', checked)}
                  />
                  <Label htmlFor="fatca" className="text-sm leading-relaxed">
                    I confirm that I am an Indian tax resident and agree to the FATCA declaration requirements
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="risk"
                    checked={formData.riskDisclosure}
                    onCheckedChange={(checked) => handleInputChange('riskDisclosure', checked)}
                  />
                  <Label htmlFor="risk" className="text-sm leading-relaxed">
                    I understand the risks associated with equity investments and the Mauritius fund structure
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
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
              <span className="text-xl font-bold">InvestUS</span>
              <span className="text-muted-foreground">/ KYC Onboarding</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your KYC</h1>
          <p className="text-muted-foreground">Secure onboarding process to start your US equity investment journey</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep >= step.number 
                  ? 'bg-primary border-primary text-white' 
                  : 'border-border text-muted-foreground'
              }`}>
                {currentStep > step.number ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </div>
              <div className="text-center mt-2">
                <div className="text-sm font-medium">{step.title}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <steps[currentStep - 1].icon className="h-5 w-5" />
              <span>{steps[currentStep - 1].title}</span>
            </CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          {currentStep < totalSteps ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={!formData.termsAccepted || !formData.fatcaDeclaration || !formData.riskDisclosure}
              className="bg-green-600 hover:bg-green-700"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Submit KYC Application
            </Button>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground">Need Help?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Our KYC process typically takes 2-3 business days for verification. 
                For any assistance, contact our support team at support@investus.com or call +91-1800-123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KYCOnboarding