import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, change, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {icon}
          </div>
          <h3 className="ml-3 text-sm font-medium text-gray-900">{title}</h3>
        </div>
        <div className={`flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? (
            <ArrowUpCircle className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDownCircle className="h-4 w-4 mr-1" />
          )}
          <span className="text-sm">{change}</span>
        </div>
      </div>
      <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
};

export default MetricsCard;