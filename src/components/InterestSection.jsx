import React, { useState } from 'react';
import {
  Activity, 
  Globe2, 
  TrendingUp,
  ChevronRight,
  Monitor,
  Building2,
  ShoppingCart,
  Cpu,
  MessageSquare,
  Store,
  Shirt,
  Coffee,
  Wallet,
  ChevronDown,
  Banknote,
  Binary,
  LineChart,
  Pill,
  Car,
  Apple,
  BarChart,
  CircuitBoard,
  Cookie,
  Building
} from 'lucide-react';

const companyDetails = {
  AAPL: { name: 'Apple', sector: 'Technology', industry: 'Consumer Electronics', icon: Apple },
  'BRK-B': { name: 'Berkshire Hathaway', sector: 'Financials', industry: 'Insurance', icon: Building },
  BLK: { name: 'BlackRock', sector: 'Financials', industry: 'Asset Management', icon: BarChart },
  MSFT: { name: 'Microsoft', sector: 'Technology', industry: 'Software', icon: Monitor },
  TSLA: { name: 'Tesla', sector: 'Consumer Discretionary', industry: 'Automobile', icon: Car },
  MSTR: { name: 'MicroStrategy', sector: 'Technology', industry: 'Software', icon: Binary },
  VTI: { name: 'Vanguard Total Stock Market ETF', sector: 'ETF', industry: 'Exchange-Traded Fund', icon: LineChart },
  JPM: { name: 'JPMorgan Chase', sector: 'Financials', industry: 'Banking', icon: Banknote },
  AMZN: { name: 'Amazon', sector: 'Consumer Discretionary', industry: 'E-Commerce', icon: ShoppingCart },
  TSM: { name: 'Taiwan Semiconductor', sector: 'Technology', industry: 'Semiconductors', icon: CircuitBoard },
  GOOGL: { name: 'Alphabet', sector: 'Communication Services', industry: 'Internet', icon: Globe2 },
  RDDT: { name: 'Reddit', sector: 'Communication Services', industry: 'Social Media', icon: MessageSquare },
  NVDA: { name: 'NVIDIA', sector: 'Technology', industry: 'Semiconductors', icon: Cpu },
  WMT: { name: 'Walmart', sector: 'Consumer Staples', industry: 'Retail', icon: Store },
  PLTR: { name: 'Palantir', sector: 'Technology', industry: 'Software', icon: Binary },
  NKE: { name: 'Nike', sector: 'Consumer Discretionary', industry: 'Apparel', icon: Shirt },
  MDLZ: { name: 'Mondelez', sector: 'Consumer Staples', industry: 'Food Products', icon: Cookie },
  CELH: { name: 'Celsius Holdings', sector: 'Consumer Discretionary', industry: 'Beverages', icon: Coffee },
  PFE: { name: 'Pfizer', sector: 'Health Care', industry: 'Pharmaceuticals', icon: Pill },
  SOFI: { name: 'SoFi', sector: 'Financials', industry: 'Fintech', icon: Wallet },
  LYFT: { name: 'Lyft', sector: 'Consumer Discretionary', industry: 'Ridesharing', icon: Car },
  F: { name: 'Ford Motor', sector: 'Consumer Discretionary', industry: 'Automobile', icon: Car }
};

const InterestSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isStocksOpen, setIsStocksOpen] = useState(false);

  const interests = [
    {
      title: "Badminton",
      icon: Activity,
      description: "Regular player focusing on technique and strategy. Participate in local tournaments and recreational games to maintain fitness and competitive spirit.",
    },
    {
      title: "Geo-politics",
      icon: Globe2,
      description: "Keen interest in international relations, policy making, and global economic trends. Follow developments across major regions and their impact on world affairs.",
    },
    {
      title: "Stock Market",
      icon: TrendingUp,
      description: "Active investor with focus on technology and growth stocks. Regular analysis of market trends and company fundamentals.",
      hasStocks: true
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Areas of Interest
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Exploring diverse passions and continuous learning through various interests
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                  <interest.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">{interest.title}</h3>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {interest.description}
              </p>

              {interest.hasStocks && (
                <div className="mt-4">
                  <button
                    onClick={() => setIsStocksOpen(!isStocksOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>View Tracked Companies</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isStocksOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isStocksOpen && (
                    <div className="mt-2 space-y-2 max-h-96 overflow-y-auto">
                      {Object.entries(companyDetails).map(([symbol, company]) => {
                        const IconComponent = company.icon;
                        return (
                          <div
                            key={symbol}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer group"
                            onClick={() => setSelectedCompany(symbol)}
                          >
                            <div className="flex items-center space-x-2">
                              <IconComponent className="w-4 h-4" />
                              <span className="text-sm">{company.name}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedCompany && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {(() => {
                    const IconComponent = companyDetails[selectedCompany].icon;
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                  <h3 className="text-xl font-semibold">
                    {companyDetails[selectedCompany].name} ({selectedCompany})
                  </h3>
                </div>
                <div className="space-y-2">
                  <p><strong>Sector:</strong> {companyDetails[selectedCompany].sector}</p>
                  <p><strong>Industry:</strong> {companyDetails[selectedCompany].industry}</p>
                </div>
                <button 
                  onClick={() => setSelectedCompany(null)}
                  className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterestSection;