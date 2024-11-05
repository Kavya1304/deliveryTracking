import React from 'react';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const orders = [
  {
    id: 'ORD-2024-001',
    customer: 'Tech Solutions Inc.',
    status: 'Processing',
    date: '2024-03-10',
    value: '$2,450.00',
  },
  {
    id: 'ORD-2024-002',
    customer: 'Global Logistics Ltd.',
    status: 'Shipped',
    date: '2024-03-09',
    value: '$1,850.00',
  },
  {
    id: 'ORD-2024-003',
    customer: 'Smart Systems Co.',
    status: 'Delayed',
    date: '2024-03-08',
    value: '$3,200.00',
  },
];

const OrdersTable: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Delayed':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm text-gray-900">{order.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {order.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;