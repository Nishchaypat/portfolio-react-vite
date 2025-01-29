import React, { useState } from 'react';
import {
  Activity, 
  Globe2, 
  TrendingUp,
  X,
  Monitor,
  ShoppingCart,
  Cpu,
  MessageSquare,
  Store,
  Shirt,
  Coffee,
  Wallet,
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
import { useTheme } from '../context/ThemeContext';

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
  const { currentTheme } = useTheme();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <section id="interests" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>
            Hobbies
          </h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            Some of my hobbies includes:
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 transform 
                ${hoveredCard === index ? 'scale-[1.01]' : ''} 
                ${currentTheme.background.secondary} p-6`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <interest.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>
                  {interest.title}
                </h3>
              </div>
              
              <p className={`${currentTheme.text.secondary} mb-6`}>
                {interest.description}
              </p>

              {interest.hasStocks && (
                <div className="mt-4">
                  <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-11 gap-3">
                    {Object.entries(companyDetails).map(([symbol, company]) => {
                      const IconComponent = company.icon;
                      return (
                        <button
                          key={symbol}
                          onClick={() => setSelectedCompany(symbol)}
                          className={`group flex flex-col items-center p-2 rounded-lg
                            ${currentTheme.background.accent} hover:bg-blue-600
                            transition-colors duration-200`}
                          title={`${company.name} (${symbol})`}
                        >
                          <IconComponent className={`w-5 h-5 ${currentTheme.text.accent} group-hover:text-white`} />
                          <span className={`text-xs mt-1 ${currentTheme.text.accent} group-hover:text-white`}>
                            {symbol}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedCompany && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className={`${currentTheme.background.secondary} rounded-xl w-full max-w-md`}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const IconComponent = companyDetails[selectedCompany].icon;
                      return <IconComponent className={`w-6 h-6 ${currentTheme.text.primary}`} />;
                    })()}
                    <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>
                      {companyDetails[selectedCompany].name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className={`${currentTheme.background.accent} ${currentTheme.text.accent} p-3 rounded-lg`}>
                    <p className="font-medium">Ticker: {selectedCompany}</p>
                  </div>
                  <div className={`${currentTheme.background.accent} ${currentTheme.text.accent} p-3 rounded-lg`}>
                    <p className="font-medium">Sector: {companyDetails[selectedCompany].sector}</p>
                  </div>
                  <div className={`${currentTheme.background.accent} ${currentTheme.text.accent} p-3 rounded-lg`}>
                    <p className="font-medium">Industry: {companyDetails[selectedCompany].industry}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterestSection;