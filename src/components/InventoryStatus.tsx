import React from 'react';
import { BarChart3 } from 'lucide-react';

const inventory = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    sku: 'WE-001',
    stock: 145,
    reorderPoint: 50,
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    sku: 'SW-002',
    stock: 32,
    reorderPoint: 40,
    status: 'Low Stock',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    sku: 'LS-003',
    stock: 89,
    reorderPoint: 30,
    status: 'In Stock',
  },
  {
    id: 4,
    name: 'USB-C Hub',
    sku: 'UH-004',
    stock: 15,
    reorderPoint: 25,
    status: 'Critical',
  },
];

const InventoryStatus: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-indigo-600" />
          <span className="text-sm text-gray-500">Real-time inventory levels</span>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Generate Report
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Level
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.sku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'In Stock'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        (item.stock / item.reorderPoint) * 100 > 100
                          ? 'bg-green-600'
                          : (item.stock / item.reorderPoint) * 100 > 50
                          ? 'bg-yellow-400'
                          : 'bg-red-600'
                      }`}
                      style={{
                        width: `${Math.min(
                          (item.stock / item.reorderPoint) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryStatus;